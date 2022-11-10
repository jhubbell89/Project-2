
const Destination = require('../models/destination');
// const Trip = require('../models/trip')

module.exports = {
  new: newDestination,  
  create, 
//   addToLocations
}

// function addToLocations(req, res) {
//     Trip.findById(req.params.id, function (err, trip))
// }

function newDestination(req, res) {
  Destination.find(function(err, destination) {
    res.render('destinations/index', {destination})
    }
    )
}



function create(req, res){
  var destination = new Destination(req.body)
  destination.save(function(err){destination})
          res.redirect('index')
}