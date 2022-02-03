const { Router } = require('express');
const {Dog, Temperament} = require("../db");
const axios = require("axios");
const apInt = "https://api.thedogapi.com/v1/breeds"
const apExt = "https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}"

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

/* const Temperamentos = require("./Temperamentos.js")
const perros = require("./Temperamentos.js") */

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// funciones// ----- /////

const getApi = async ()=>{

    try {
        const get = await axios.get(apInt);
        const apiInfo= get.data;
        const format = apiInfo.map((e)=>{
        return {
            id:e.id,
            name:e.name,
            height: e.height.imperial,
            weight: e.weight.imperial,
            life_span: e.life_span,
            temperament: [e.temperament]
            .join()
            .split(",")
            .map((e) => e.trim()),
            image: e.image.url    
        }
    })
    //console.log(apiInfo)
    return format

}catch(e){
   
}
};

const getDB = async ()=>{

	return await Dog.findAll({
        include:{
            model: Temperament,
            attributes:["name"],
            through:{
                attributes:[],
            },
        }
    });
	
}

const getAllDogs = async()=>{
    const apinfo = await getApi();
    const dbinfo = await getDB();
    const intotale = apinfo.concat(dbinfo);
    return intotale 

}

//-------RUTAS-------//-----///////


router.get('/tempes', async ( req, res ) => {

    const dogsApi = await axios.get(apExt);
    const dogsDb = dogsApi.data.map( el => el.temperament )
    const dogsDbTrim = dogsDb.toString().trim().split(/\s*,\s*/)
    const splitTemperaments = dogsDbTrim.filter(temp => temp.length > 0);
    
    splitTemperaments.forEach( el => {
        
            Temperament.findOrCreate({
                where: {
                    name: el
                }
               
            })
            console.log(splitTemperaments) 
    })

    const allTemperaments = await Temperament.findAll();

    return res.status( 200 ).send( allTemperaments )
})



///// Trae tosdos los perros y con ?name="nombre perros"

router.get("/", async (req, res)=>{
	try{
		let name=req.query.name;
		//let api= await getApi();
		//let db= await getDB();
		let getTotal= await getAllDogs();

		if(name){
			let nameDog= await getTotal.filter(e=>e.name.toLowerCase()===name.toLowerCase())

			nameDog.length ?
			res.status(200).send(nameDog) : 
			res.status(404).send("Este perro no se encuentra");
		}else{
			res.send(getTotal)
		}
	}
	catch(err){
		res.send(err)
	}
})

//--------Trae perros por id /# de id

router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      if (id) {
        const allDogs = await getAllDogs();
        const filtered = allDogs.filter((elem) => elem.id == id);
        if (filtered.length > 0) return res.status(200).send(filtered);
        return res.status(404).send("The ID was not found");
      }
    }
    catch(err) {
      console.log(err)
      return res.status(404).json(err)
    }
  });

//POST///----------/////

///------Crea perros 

router.post("/", async (req,res, next)=>{
    const {name, weight, height, life_span, image, temperament} = req.body;
try{
    const crear = await Dog.create({
        name,
        weight,
        height,
        life_span,
        image,
});
    let tempDb = await Temperament.findAll({
        where:{
            name:temperament
        }
    })
    crear.addTemperament(tempDb)
    res.send("personaje creado")
}
catch(error){
    next(error)
}
})


router.post("/tempes", async (req,res)=>{
    const dogger = req.body
    if(dogger)
    {const crear = await Temperament.create(dogger);
        res.send(crear)
    }else{
        res.send("No hay")
    }

})


module.exports = router;


/*    router.post("/temps", async (req,res)=>{
        const {name, weight, height, life_span, temperament, image} = req.body
        const crear = await Dog.create({
            name,
            weight,
            height,
            life_span,
            image
    });
        for (let i = 0; i < temperament.length; i++) {
            let temperamentDB = await Temperament.findAll({
                where:{
                    name: temperament[i]
                },
                attributes:["id"]     
        })
        crear.addTemperament(temperamentDB[0].id)
        }
        res.send("temperamento creado") */
 /* if(name && weight && heigth && life_span && temperaments && image){
    try{
        const crear = await Dog.create({name, weight, heigth, life_span, image})
        res.send(crear)     
    }catch(e){
        next(e)
    }
}else{
    res.send("No hay nada")
}   */