const { Post, sequelize} = require('../models/');

const postsController = { 

        index: async (req, res) => {
        let post = await Post.findAll();
        return res.json(post);
    },
    
        create: async (request, response) => {
        let {texto, img, usuarios_id, n_likes} = request.body;

        let posts = {texto, img, usuarios_id, n_likes};
        let post = await Post.create(posts);

        return response.json(post);

    },

        update: async (req, response) => {
            const {id} = req.params;
            const {texto, img, usuarios_id, n_likes} = req.body;
            let post = await Post.update({texto, img, usuarios_id, n_likes},
                 {
                where: {id}
            });

            return response.send(post)
        },

        delete: async (req, res) => {
            const {id} = req.params;
            let post = await Post.destroy({
                where: {id}
            });
            return res.json(post);
        },

        show: async (req, res) => {
            const {usuarios_id} = req.params;
            let mostrarposts = await Post.findAll({where: {usuarios_id}});
            return res.json(mostrarposts);
        }
    
}
    module.exports = postsController
