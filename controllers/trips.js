const Trip = require('../models/trip');
// const Destinations = require('./models/destination');

module.exports = {
    new: newTrip,
    // create,
    // index,
    // show
};

// function index(req, res) {
//     Trip.find({}, function(err, trips) {
    
//         res.render('index', {trips})
       
//     })
// }
  
// function create(req, res) {
    
//     const trip = new Trip(req.body);
//     trip.save(function(err) {
//       if (err) return res.redirect('/trips/addTrip');
//       res.redirect('index');
//     });
// }

function newTrip(req, res) {
    res.render('trips/new');
}

// function show(req, res) {
//     Trip.findById(req.params.id, function(err, trip) {
//         // Destinations.find({trip: trip._id}, function(err, destinations) 
//         {
//         res.render('trips/show', { title: 'Trip Detail', trip});
//     }
//     // );
//   });
// };