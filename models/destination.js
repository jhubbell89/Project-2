const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var destinationsSchema = new Schema(
    {
        name: String,
        pass: {
            type: String,
            enum: ['a','b','c','d']
        },
        location: [string],
        gps: [string],
        trip: [{type: Schema.Types.ObjectId, ref: 'Trip'}],
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model("Destination", userSchema);