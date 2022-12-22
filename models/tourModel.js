const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must be have a name'],
        unique: [true, 'the name is already used'],
    },
    rating: {
        type: String,
        default: 4.5,
    },
    price: {
        type: Number,
        required: [true, 'A tour must be have a price'],
    },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
