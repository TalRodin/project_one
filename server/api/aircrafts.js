const router =require('express').Router()

// const Aircrafts = require('../db/models/aircrafts')
// const Countries = require('../db/models/countries')
const {Aircrafts, Countries}=require('../db/models/index')

// //-------Routers----------

router.get('/', async (req, res, next) =>{
  try{
    const all_aircrafts = await Aircrafts.findAll()
    res.json(all_aircrafts)
  }catch(err)
  {next(err)}
});

router.get('/search', async(req, res, next)=>{
  try{ 
    const type = req.query.type
    const types = await Aircrafts.getAircraftByType(type)
    res.json(types)
  }catch(err){
    next(err)
  }
})

router.get('/:id', async (req, res, next) =>{
    const id = req.params.id;
    try{
      const all_aircrafts = await Aircrafts.findByPk(id, {
          include: [
              {model: Countries}
          ]
      });
      res.json(all_aircrafts)
    }catch(err)
    {next(err)}
});


router.post('/', async(req,res,next)=>{
    try{
       const make = req.body.make
       const model = req.body.model
       const year = req.body.year
       const type = req.body.type
       const cost = req.body.cost
       const imageUrl = req.body.imageUrl
       const description = req.body.description
       const countryId = req.body.countryId
       const aircrafts = await Aircrafts.create({make, model, year, type, cost, imageUrl, description, countryId})
       res.json(aircrafts)
    }catch(err){next(err)}
  })


router.put('/:id', async(req,res,next)=>{
  const id=req.params.id
  try{
      const [numberRows, arrayAircrafts]=await Aircrafts.update(req.body,
         {where:{ 
           id: id},
         returning: true,
         plain: true } )
         if(arrayAircrafts.length===0){
          res.status(500).send()
         }else{
          res.status(200).json({message: 'Updated successfully', aircrafts: arrayAircrafts})
         }
  }catch (err) {next(err)}
})


router.delete('/:id', async(req,res,next)=>{
  const id=req.params.id
  try{
    Aircrafts.destroy({
      where: {
        id: id
      }
    })
    res.sendStatus(204)
  }catch(err){next(err)}
})

// Export routers
module.exports=router