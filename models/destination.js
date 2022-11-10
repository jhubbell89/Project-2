const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var destinationSchema = new Schema({
        name: String,
        pass: {
            type: String,
            enum: ['a','b','c','d']
        },
        location: [String],
        gps: [String],
        
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model("Destination", destinationSchema);