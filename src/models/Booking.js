const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId, //o id gerado automaticamente no db
        ref: 'User', 
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId, //o id gerado automaticamente no db
        ref: 'Spot', 
    },
});

module.exports = mongoose.model('Booking', BookingSchema)