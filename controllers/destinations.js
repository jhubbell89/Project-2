
const Destination = require('../models/destination');
const Trip = require('../models/trip')

module.exports = {
  new: newDestination,  
  create, 
  addToPlace,
  delete: deleteDestination,
  edit,
  update,
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
      console.log('test deletedestination')
      res.redirect('/destinations/index')
    }
  )
}

function edit(req, res) {
  Destination.findOne({_id: req.params.id, userRecommending: req.user._id}, function(err, destination) {
    if (err || !destination) return res.redirect('/destinations/index');
    res.render('destinations/edit', {destination})
  })
}

function update(req, res) {
  Destination.findOneAndUpdate(
    {_id: req.params.id, userRecommending: req.user._id},
    req.body,
    {new: true},
    function(err, destination) {
      if (err || !destination) return res.redirect('/destinations/edit');
      res.redirect('/destinations/index')
    }
  )
}