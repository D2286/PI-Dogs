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

	const dbinfo= await Dog.findAll();
	return dbinfo
}

/* cargaTempDb = async () =>{
    let allApi = await get(apInt);
    let allData = await allApi.map((e)=>{
        
        return{
            temperament: e.temperament,
        }
})
return allData
} */

//-------RUTAS-------//-----///////


router.get('/temps', async ( req, res ) => {

    const dogsApi = await getApi();
    const dogsDb = dogsApi.map( el => el.temperament ).join().split(',')
    const dogsDbTrim = dogsDb.map( el => el.trim())
    
    dogsDbTrim.forEach( el => {
        if(el.legth > 2) {
            Temperament.findOrCreate({
                where: {
                    name: el
                }
            })
        }
    })

    const allTemperaments = await Temperament.findAll();

    return res.status( 200 ).send( allTemperaments )
})


///// Trae tosdos los perros y con ?name="nombre perros"

router.get("/", async (req, res)=>{
	try{
		let name=req.query.name;
		let api= await getApi();
		let db= await getDB();
		let getTotal=[...api,...db];

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

router.get("/dogs/:id", async (req, res)=>{
	try{
		let {id}=req.params;
		let db= await getDB();
        let Api= await getApi();
        let getTotal=[...Api,...db];

        //console.log(getTotal)
		if(id){
			idDog= await getTotal.filter((e)=>e.id==id);
            idDog.length ?
			res.status(200).send(idDog) : 
			res.status(404).send("Este perro no se encuentra");     
		}else{
            res.send(getTotal)        
        }      
	}  
	catch(err){
		res.send(err)
	}
})

//POST///----------/////

///------Crea perros 

router.post("/", async (req,res)=>{
    const {name, weight, height, life_span, temperament, image} = req.body
    const crear = await Dog.create({
        name,
        weight,
        height,
        life_span,
        image
});
    let tempDb = await Temperament.findAll({
        where:{
            name:temperament
        }
    })
    crear.addTemperament(tempDb)
    res.send("personaje creado")
})


router.post("/createmp", async (req,res)=>{
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
} */