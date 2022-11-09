const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var gearSchema = new Schema({
        item: String,
        qty: Number,
        condition: String,
    }, {
        timestamps: true
    }
)

var notesSchema = new Schema({
        note: [String],
    },{
        timestamps: true
    }
)

const tripSchema = new Schema({
        person: {
            type: String,
            enum: ['james']
        },
        leave: Date,
        return: Date,
        gear: [gearSchema],
        notes: [notesSchema],
    }, {
        timestamps: true
    }
)


module.exports = mongoose.model("Trip", tripSchema);