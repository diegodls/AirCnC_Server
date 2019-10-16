const User = require('../models/User')
const Spot = require('../models/Spot')

module.exports = {

    async index(req, res) {//essa função vai listar os spots
        const { tech } = req.query;
        const spots = await Spot.find({ techs: tech }); // mesmo o campo techs lá no DB sendo um array, o mongoDB vai verificar se nesse array tem a string que passamos (tech)
        return res.json(spots);

    },


    async store(req, res) {//essa função vai inserir um spot no DB
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers; //vai pegar o id de quem está criando, que será enviado através do header

        const user = await User.findById(user_id)

        if (!user) {
            return res.status(400).json({ error: 'User does not exists' })
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()), //como lá no DB o tech é um array e aqui vai receber uma string, deve-se fazer um split para pegar cada campo após a virgula, e o trim vai retirar os espaços, por exemplo: ReacJS,[espaço]Java,[espaço]blablabla
            price,
        })
        return res.json(spot)
    }
}