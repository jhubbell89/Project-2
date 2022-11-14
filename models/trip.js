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
        note: String,
    },{
        timestamps: true
    }
)

const tripSchema = new Schema({
        name: String,
        person: {
            type: String,
            
        },
        leave: Date,
        return: Date,
        gear: [gearSchema],
        notes: [notesSchema],
        place: [{type: Schema.Types.ObjectId, ref: 'Destination'}],
    }, {
        timestamps: true
    }
)

module.exports = mongoose.model("Trip", tripSchema);