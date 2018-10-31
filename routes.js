const express = require('express');

const router = express.Router();

const people = [
    {
        "id" : 1,
        "nombre" : "Wilfredo",
        "edad" : 20
    },
    {
        "id" : 2,
        "nombre" : "Zabdy",
        "edad" : 25
    },
    {
        "id" : 3,
        "nombre" : "Jessmy",
        "edad" : 22
    }
];

router.get('/', (req,res) =>{
    res.send('Hello World');
});

router.get('/api/people', (req,res) => {
    res.send(people);
});

router.get('/api/people/:id', (req,res) => {
    const person = people.find(p => p.id === parseInt(req.params.id));
    if (!person){
        res.status(404).send(req.params.id + " ID not found.")
    }else{
        res.send(person);
    }

});

router.post('/api/people', (req,res) => {
    const person = {
        id: people.length +1,
        nombre: req.body.nombre,
        edad: req.body.edad
    };
    people.push(person);
    res.send(person);
});

//404 Route
router.get('*', function(req, res){
    res.send('Page not Found!', 404);
});

module.exports = router;