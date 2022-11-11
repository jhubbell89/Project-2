
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

function create(req, res) {
    const trip = new Trip(req.body);
    trip.save(function(err) {
      if (err) return res.redirect('/trips/new');
      res.redirect(`/trips/${trip._id}`);
    });
}

function newTrip(req, res) {
    res.render('trips/new');
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

// function update(req, res) {
//     Skill.update(req.params.id, req.body);
//     res.redirect('/skills');
// }
  
// function edit(req, res) {
//     res.render('skills/edit', {
//       skill: Skill.getOne(req.params.id)
//     });
// }

// function deleteTrip(req, res) {
//     Trip.deleteTrip(req.params.id)
//     res.redirect('/trips')
// }