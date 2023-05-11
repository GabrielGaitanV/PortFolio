const fs = require("fs");
const path = require("path");
//Requiero express para su uso
const express = require('express');
const app = express();
//Puerto donde se situara nuestro local
const port = 3007;

//Requiero las rutas
const indexRouter = require("./routes/indexRouter.js");

//Motor de plantilla
app.set('view engine', 'ejs');

//uso expres para enviar a la ruta
app.use("/", indexRouter);

app.use(express.static(path.join(__dirname,'/public')));

app.listen(port, () => console.log('Portfolio in online'));

