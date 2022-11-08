const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var gearSchema = new Schema(
    {
        item: String,
        qty: Number,
        condition: String,

    }, {
        timestamps: true
    }
)

var notesSchema = new Schema(
    {
        note: [string],

    },{
        timestamps: true
    }
)

const tripSchema = new Schema(
    {
        person: String,
        leave: Date,
        days: Number,
        gear: [gearSchema],
        notes: [notesSchema],

    }, {
        timestamps: true
    }
)


module.exports = mongoose.model("Trip", userSchema);