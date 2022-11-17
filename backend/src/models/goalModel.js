const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    fname: {
        type: String,
        required: [true, 'Please add a text value'],
    },
    lname: {
        type: String,
        required: [true, 'Please add a text value'],
    },
    age: {
        type: Number,
        required: [true, 'Please add a text value'],
    },
    description: {
        type: String,
        required: [true, 'Please add a text value'],
    },

},
{
    timestamps: true,
}
)

module.exports = mongoose.model('Goal', goalSchema);