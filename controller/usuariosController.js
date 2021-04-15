
const { response } = require('express');
const { Usuario, sequelize} = require('../models/');

const usuariosController = { 

        index: async (req, res) => {
        let usuarios = await Usuario.findAll();
        return res.json(usuarios);
    },
    
        create: async (request, response) => {
        let {nome, email, senha} = request.body;

        let users = {nome, email, senha};
        let usuarios = await Usuario.create(users);
        
        return response.json(usuarios);

    },

        update: async (req, response) => {
            const {id} = req.params;
            const {nome, email, senha} = req.body;
            let usuarios = await Usuario.update({nome, email, senha},
                 {
                where: {id}
            });

            return response.send(usuarios)
        },

        delete: async (req, res) => {
            const {id} = req.params;
            let usuarios = await Usuario.destroy({
                where: {id}
            });
            return res.json(usuarios);
        }

}
    module.exports = usuariosController


