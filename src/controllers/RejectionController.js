const Booking = require('../models/Booking');


module.exports = {
    async store(req, res) {
        //ADICIONAR VERIFICAÇÕES:
        //SÓ O DONO PODE ACEITAR
        //NÃO PODE MUDAR OS ESTADOS (TRUE > FALSE OU FALSE > TRUE)
        //ETC...
        const { booking_id } = req.params;
        const booking = await Booking.findById(booking_id).populate('spot');
        booking.approved = false;

        await booking.save();

        const bookingUserSocket = req.connectedUsers[booking.user];

        if (bookingUserSocket) {
            req.io.to(bookingUserSocket).emit('booking_response', booking);
        }

        return res.json(booking);
    }
}