const router = require('express').Router(); 

const Aircrafts = require('../api/aircrafts')
const Countries = require('../api/countries')

router.use('/aircrafts', Aircrafts)
router.use('/countries', Countries)


router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})
module.exports = router










// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
// apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))

// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

// router.get('/', async (req, res, next) =>{
// 	try{
// 	  const all_aircrafts = await Aircrafts.findAll({
// 		  include:[
// 			  {model: Countries.name, required: false}
// 		  ]
// 	  });
// 	  res.json(all_aircrafts)
// 	}catch(err)
// 	{next(err)}
//   });

// router.get('/:id', async (req, res, next) =>{
//     const id = req.params.id;
//     try{
//       const all_aircrafts = await Aircrafts.findById(id, {
//           include: [
//               {model: Countries.name, required: false}
//           ]
//       });
//       res.json(all_aircrafts)
//     }catch(err)
//     {next(err)}
// });


// router.post('/', async(req,res,next)=>{
//     try{
//        const make = req.body.make 
//        const model = req.body.model
//        const year = req.body.year
//        const type = req.body.type
//        const cost = req.body.cost
//        const imageUrl = req.body.imageUrl
//        const description = req.body.description
//        const aircrafts = await Aircrafts.create({make, model, year, type, cost, imageUrl, description})
//        console.log(aircrafts)
//        res.json(aircrafts)
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


// router.get('/', async (req, res, next) =>{
//   try{
//     const all_countries = await Countries.findAll({
//         include:[
//             {model: Aircrafts.name, required: false}
//         ]
//     });
//     res.json(all_countries)
//   }catch(err)
//   {next(err)}
// });

// router.get('/:id', async (req, res, next) =>{
//     const id = req.params.id;
//     try{
//       const all_countries = await Countries.findById(id, {
//           include: [
//               {model: Aircrafts.name, required: false}
//           ]
//       });
//       res.json(all_countries)
//     }catch(err)
//     {next(err)}
// });

// router.get('/', async(req,res,next)=>{
//     try{
//         const top_countries = await Countries.getTopFive()
//         res.json(top_countries)
//       }catch(err)
//       {next(err)}
// })

// router.post('/', async(req,res,next)=>{
//     try{
//        const name=req.body.name 
//        const GFI =req.body.GFI
//        const flagUrl = req.body.flagUrl
//        const countries = await Aircrafts.create({name, GFI, flagUrl })
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

// module.exports = router;






