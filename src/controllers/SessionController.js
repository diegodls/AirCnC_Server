//index - retorna uma listagem de seções
//show - mostra uma unica seção
//store - armazena uma seção
//update - modifica uam seção
//destroy - deleta uam seção

const User = require('../models/User')

module.exports = {
    async store(req, res) {
        const { email } = req.body;
        //const user = await User.create({ email }) apenas criação

        let user = await User.findOne({ email }) //vai verificar se possui o email no banco

        if (!user) {
            user = await User.create({ email })
        }


        return res.json(user);
    }
}