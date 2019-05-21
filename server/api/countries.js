const router =require('express').Router()

// const Aircrafts = require('../db/models/aircrafts')
// const Countries = require('../db/models/countries')
const {Aircrafts, Countries}=require('../db/models/index')
// //-------Routers----------

// router.get('/', async (req, res, next) =>{
//   try{
//     const all_countries = await Countries.findAll();
//     res.json(all_countries)
//   }catch(err)
//   {next(err)}
// });

router.get('/:id', async (req, res, next) =>{
    const id = req.params.id;
    try{
      const all_countries = await Countries.findById(id,    
        {
        include: [
            {model: Aircrafts, required: false}
        ]
    }
      );
      res.json(all_countries)
    }catch(err)
    {next(err)}
});


router.get('/', async(req,res,next)=>{
    try{
        const top_countries = await Countries.getTopFive()
        res.json(top_countries)
      }catch(err)
      {next(err)}
})

// router.post('/', async(req,res,next)=>{
//     try{
//        const name=req.body.name 
//        const GFI =req.body.GFI
//        const flagUrl = req.body.flagUrl
//        const countries = await Aircrafts.create({make, GFI, flagUrl })
//        console.log(countries)
//        res.json(countries)
//     }catch(err){next(err)}
//   })


// router.put('/:id', async(req,res,next)=>{
//   const id=req.params.id
//   try{
//       const [numberRows, arrayAircrafts]=await Aircrafts.update(req.body,
//          {where:{ 
//            id: id},
//          returning: true,
//          plain: true } )
//          if(arrayAircrafts.length===0){
//           res.status(500).send()
//          }else{
//           res.status(200).json({message: 'Updated successfully', aircrafts: arrayAircrafts})
//          }
//   }catch (err) {next(err)}
// })


// router.delete('/:id', async(req,res,next)=>{
//   const id=req.params.id
//   try{
//     Aircrafts.destroy({
//       where: {
//         id: id,
//       }
//     })
//     res.sendStatus(204)
//   }catch(err){next(err)}
// })

// Export routers
module.exports=router