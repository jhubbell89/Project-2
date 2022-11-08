const Destination = require('../models/destination');
const Trip = require('../models/trip')

module.exports = {
  new: newDestination,  
  create, 
}

function newDestination(req, res) {
  Trip.findById(req.params.id, function (err, trips) {
    res.render('trips/new', {trips})
  })
}

function create(req, res) {
    Trip.findById(req.params.id, function(err, trip) {
      trip.destinations.push(req.body);
      trip.save(function(err) {
        res.redirect(`/trips/${trip._id}`, trip, destination);
      });
    });
  }
    