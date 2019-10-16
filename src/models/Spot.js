const mongoose = require('mongoose')

const urlFiles = 'http://[SEU_IP_E_A_PORTA_AQUI]/files/'
//exemplo: 'http://192.168.1.1:3333/files/'

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {//aqui temos um relacionamento, onde é armazenado o usuário que está criando esse Spot
        type: mongoose.Schema.Types.ObjectId, //o id gerado automaticamente no db
        ref: 'User',
    }
}, {
    toJSON: { // esse metodo serve para que toda vez que o retorno for convertido em json, o mongo vai adicionar os "virtual"(tipo o abaixo) no objeto json retornado.
        virtuals: true,
    }
});

//virtual é usado no mongo para criar campos
SpotSchema.virtual('thumbnail_url').get(function () {
    return `${urlFiles}${this.thumbnail}`
    //para funcionar, tem que criar uma rota para retornar a imagem(express)
})

module.exports = mongoose.model('Spot', SpotSchema)