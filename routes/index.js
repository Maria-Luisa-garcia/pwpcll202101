var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: 'Garcia Tellez Maria Luisa', appName: 'WebApp' });
});

/*Agregando nueva ruta*/
            /*(peticion, respuesta, siguiente)*/
router.get('/greeting', function(req, res, next){
res.status(200).json({message: 'Hola Campeon de la Fullstack Web'})
})

module.exports = router;
