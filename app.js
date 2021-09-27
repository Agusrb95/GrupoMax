const express = require('express');
const app = express ();
const axios = require('axios');
//const FormData = require('form-data');
// Template
app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({extennded: false}));
app.use(express.static('public'))

app.get('/',function(req,res){
  res.render('prueba');
})

app.post('/',function(req,res){
  let data ={
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    provincia: req.body.provincia,
    horario: req.body.horario,
    consulta: req.body.consulta,
  }
  console.log(req.body);
  console.log(data);
  axios.post('https://sistemacaliva.com/api/front-test',data,{
  headers:{
    'Contet-Type' : 'application/json',
    'test-key': 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiZGV2ZWxvcGVyIiwiSXNzdWVyIjoiSXNzdWVyIiwiVXNlcm5hbWUiOiJGcm9udERldiIsImV4cCI6MTYyODY5NTg3NiwiaWF0IjoxNjI4Njk1ODc2fQ.CDRPz6Eta78BzmuNTNZsnzzDU2TRgvEtMs-_aZlWCZQ'
  }
}).then((res => console.log(res)));
res.send(req.body);
})






app.listen(3000, function(){
  console.log("El servidor esta corriendo en el puerto 3000")
})