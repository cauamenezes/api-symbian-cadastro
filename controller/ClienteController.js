const express = require('express');

const cliente = require('../model/Cliente');

const router = express.Router();

router.post('/cliente/cadastrarCliente', (req, res)=>{

    const {nome, sobrenome, email, celular} = req.body;

    cliente.create({
        nome, 
        sobrenome,
        email,
        celular
    }).then(
        ()=>{
            res.status(200).json({"msg": "Cliente cadastrado!"});
        }
    );

});

module.exports = router;