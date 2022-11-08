const Destination = require('../models/destination');

module.exports = {
    create, 
}

function create(req, res) {
    Trip.findById(req.params.id, function(err, trip) {
      trip.destinations.push(req.body);
      trip.save(function(err) {
        res.redirect(`/trips/${trip._id}`);
      });
    });
  }
    