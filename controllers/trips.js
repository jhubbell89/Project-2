const Trip = require('../models/trip');

module.exports = {
    new: newTrip,
    create,
    index,
    show
};

function index(req, res) {
    Trip.find({}, function(err, trips) {
        if (err) {
            console.log(err);
            res.redirect('/')
        }
        res.render('trips/index', {trips})
    })
}
  
function create(req, res) {
    
    const flight = new Trip(req.body);
    flight.save(function(err) {
      if (err) return res.redirect('/trips/new');
      res.redirect('index');
    });
}

function newTrip(req, res) {
    res.render('trips/new');
}

function show(req, res) {
    Trip.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
        res.render('trips/show', { title: 'Trip Detail', trip, destinations});
    });
  });
};