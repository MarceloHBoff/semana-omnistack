import Booking from '../models/Booking';

export default {
  async store(req, res) {
    const { user_id } = req.headers;
    const { id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: id,
      date,
    });

    await booking.populate('spot').populate('user').execPopulate();

    const ownerSocket = req.connectedUsers[booking.spot.user];

    if (ownerSocket) {
      req.io.to(ownerSocket).emit('booking_rquest', booking);
    }

    return res.json(booking);
  },
};
