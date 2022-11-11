const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var destinationSchema = new Schema({
        name: String,
        pass: {
            type: String,
            enum: ['Northwest Forest Pass',
            'National Forest Pass',
            'Oregon Pacific Coast Pass',
            'America the Beautiful National Parks Pass']
        },
        location: String,
        gps: String,
        user: {type: Schema.Types.ObjectId, ref: 'User'},
        userName: String,
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model("Destination", destinationSchema);