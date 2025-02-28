//https://www.youtube.com/watch?v=mG4U9t5nWG8&list=PLPl81lqbj-4IEnmCXEJeEXPepr8gWtsl6
//https://bluuweb.dev/07-node/

//const frutero = require('./frutas.js') // Carga la constante del archivo frutas.js
//frutero.forEach(item => {
//    console.log(item) //Muestra el array por pantalla
//    console.count(item) // cuenta los elementos repetidos
//})
/*
const {frutas, dinero} =require('./frutas.js') // carga diferentes constantes del archivo frutas
frutas.forEach(item => {
    console.log(item) //Muestra el array por pantalla
    console.count(item) // cuenta los elementos repetidos
})
console.log(dinero);
*/
// Para crear paquetes (package.json) en la terminal escribimos npm init -y. Esto creara un archivo llamado package.json
// Para asociar paquetes a package.json, por ejemplo instalar el paquete cowsay, introduciomos en el terminal npm i cowsay. Creara la carpeta no_modules y el archivo package-look.json
/*const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hola amigos soy una vaca",
    e : "oO",
    T : "U "
}));
// Comunicar con el servidor
const http = require("http"); // Esta API esta por defecto en node.js
const port = 5000;

const server = http.createServer((req, res) => { //va a pedir un requerimiento y una respuesta
    res.end("estoy respondiendo a tu solicitud v3");
});

server.listen(port, () => {
    console.log("servidor andando 🚀");
});*/
//para reiniciar el servidor se tiene que pulsar ctrl + C o instalar el paquete nodemom con npm install -g nodemon instalamos el modulo y con nodemon app.js hacemos que este leyendo los cambios

/*************************************Instalar Express para simplificar la comunicación con el servidor**************/
// instalacion npm i express

const express = require('express');
const app = express();
const port = 3000;
/**********************Motor de plantillas con EJS *********/
//Cargar plantillas de express para hacer la web dinaminca https://www.npmjs.com/package/ejs
// para instalar ejs, introducimos en el terminal npm i ejs
app.set('view engine', 'ejs'); // Cargamos el motor de plantillas
app.set('views', __dirname + '/views'); // Indicamos la carpeta de las plantillas

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
    res.render("index.ejs", {titulo: "Mi titulo dinámico"})
  })
  app.get('/servicios', (req, res) => {
    res.render("servicios.ejs", {tituloServicios: "Este es un mensaje dinámico de servicios"})
  })
  // Si no encuentra ninguna ruta definida, se cargara la pagina de error 404.html
app.use((req,res,next)=> {
    res.status(404).render("404.ejs", {
        titulo: "404",
        descripcion: "Título del sitio web"
    })
})
/*
/****Cargar arxivos estataticos html */
app.use(express.static(__dirname + "/public")) // Carga el archivo index.html por defecto i si ponemos el nombre de los otros archivos los muestra http://localhost:3000/404.html

app.get('/', (req, res) => {
  res.send('Mi respuesta desde express v2')
})
//Sirve para crear una nueva dirección en el servidor
app.get('/servicios', (req, res) => {
    res.send('Estás en la página de servicios')
  })
app.listen(port, () => {
  console.log(`Servidor a su servicio en el puerto: `, port)
})
// Si no encuentra ninguna ruta definida, se cargara la pagina de error 404.html
app.use((req,res,next)=> {
    res.status(404).sendFile(__dirname + "/public/404.html")
})



