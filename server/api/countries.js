const router = require('express').Router()

// const Aircrafts = require('../db/models/aircrafts')
// const Countries = require('../db/models/countries')
const {Aircrafts, Countries} = require('../db/models/index')
//-------Routers----------

router.get('/', async (req, res, next) =>{
  try{
    const all_countries = await Countries.findAll();
    res.json(all_countries)
  }catch(err)
  {next(err)}
});

router.get('/', function(req,res,next){
  res.json([])
})

router.get('/top5/', async(req,res,next)=>{
  try{
      const top_countries = await Countries.getTopFive()
      res.json(top_countries)
    }catch(err)
    {next(err)}
})

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
      const all_countries = await Countries.findByPk(id,    
        {
        include: [
            {model: Aircrafts}
        ]
    })   
    if(all_countries===null){
    res.status(404).send()
}
      
      res.json(all_countries)
    } catch (err)
    {next(err)}
});

router.post('/', async(req,res,next)=>{
    try{
       const name=req.body.name 
       const GFI =req.body.GFI
       const flagUrl = req.body.flagUrl
       const countries = await Countries.create({name, GFI, flagUrl })
       console.log(countries)
       res.json(countries)
    }catch(err){next(err)}
  })


router.put('/:id', async(req,res,next)=>{
  const id=req.params.id
  try{
      const [numberRows, arrayCountries]=await Countries.update(req.body,
         {where:{ 
           id: id},
         returning: true,
         plain: true } )
         if(arrayCountries.length===0){
          res.status(500).send()
         }else{
          res.status(200).json({message: 'Updated successfully', countries: arrayCountries})
         }
  }catch (err) {next(err)}
})


router.delete('/:id', async(req, res, next) => {
  const id = req.params.id
  try {
    Countries.destroy({
      where: {
        id: id,
      }
    })
    res.sendStatus(204)
  } catch (err){next(err)}
})

// Export routers
module.exports = router