var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto', {
    isContacto:true
  });
});



router.post('/', async (req, res, next) => {

var nombre = req.body.nombre;
var email = req.body.email;
var telefono = req.body.tel;
var mensaje = req.body.mensaje;

var obj = {
  to:'jedisenio©gmail.com',
  subject: 'Contacto desde la web',
  html: nombre + "se contactó a traves y quiere más info a este correo" + email + ".<br> Además, hizo el siguiente comentario: " + mensaje + ".<br> Su tel es" + telefono
}

var transporter= nodemailer.createTransport({
host: process.env.SMTP_HOST,
port: process.env.SMTP_PORT,
auth: {
  user: process.env.SMTP_USER,
  pass: process.env.SMPT_PASS
}



})

var info = await transporter.sendMail(obj);

res.render('contacto', {
  isContacto: true,
  message: 'Mensaje enviado correctamente'
});

});

module.exports = router;
