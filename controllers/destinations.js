
const Destination = require('../models/destination');
const Trip = require('../models/trip')

module.exports = {
  new: newDestination,  
  create, 
  addToPlace,
  delete: deleteDestination,
}

function newDestination(req, res) {
  Destination.find(function(err, destination) {
    res.render('destinations/index', {destination})
  })
}

function create(req, res){
  var destination = new Destination(req.body)
  destination.save(function(err){destination})
  res.redirect('index')
}

function addToPlace(req, res) {
  console.log(req.params)
  Trip.findById(req.params.id, function(err, trip) {
    trip.place.push(req.body.destinationId);
    trip.save(function(err) {
      res.redirect(`/trips/${trip._id}`);
    })
  })
}

function deleteDestination(req, res) {
  Destination.findOneAndDelete(
    {_id: req.params.id, userRecommending: req.user._id}, function(err) {
      res.rediret('/detinations/index')
    }
  )
}