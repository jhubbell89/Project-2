const Trip = require('../models/trip');
const Destination = require('../models/destination');

module.exports = {
    new: newTrip,
    create,
    index,
    show,
    // delete: deleteTrip,
    // edit,
    // update,
};

function index(req, res) {
    Trip.find({}, function(err, trips) {
        res.render('trips/index', {trips})
       
    })
}

function show(req, res) {
    Trip.findById(req.params.id)
    .populate('place').exec(function(err, trip) {
        Destination.find({_id: {$nin: trip.place}})
            .exec(function(err, destinations) {
                res.render('trips/show', { title: 'Trip Detail', trip, destinations });
            });
    });
  }

function newTrip(req, res) {
    res.render('trips/new');
}

function create(req, res) {
    const trip = new Trip(req.body);
    trip.save(function(err) {
      if (err) return res.redirect('/trips/new');
      res.redirect(`/trips/${trip._id}`);
    });
}



// function deleteTrip(req, res) {
//     Trip.deleteTrip(req.params.id)
//     res.redirect('/trips')
// }