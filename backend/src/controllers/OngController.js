const generationUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');


module.exports = {
    async index (req, res) {
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },

    async create(req, res){
        const { name, email, whatsapp, city, uf } = req.body;
        const id = generationUniqueId();
        
        await connection('ongs').insert({
            id, 
            name, 
            whatsapp,
            email,
            city,
            uf,
        });

        return res.json({ id });
    }
};