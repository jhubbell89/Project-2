
const Destination = require('../models/destination');
const Trip = require('../models/trip')

module.exports = {
  new: newDestination,  
  create, 
//   addToLocations
}

// function addToLocations(req, res) {
//     Trip.findById(req.params.id, function (err, trip))
// }

function newDestination(req, res) {
  Trip.findById(req.params.id, function (err, trip) {
    Destination.find(function(err, allDestinations) {
      res.render('destinations/index', {trip, destination: allDestinations})
    }
    )
  }
  )
}

function create(req, res){
  var destination = new Destination(req.body)
  destination.save(function(err){})
  // Trip.findById(req.params.id,function(err, trip){
  //     trip.save(function(err){
          res.redirect('destinations/index', destination )
      // }
      // )
  // }
  // )
}