const mongoose = require('mongoose');

// Define the schema
const TripSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: true,  // assuming experience is mandatory
    },
    date: {
        type: String,
        required: true,  // assuming location is mandatory
    },
    days: {
        type: String,
        required: true,  // assuming state is mandatory
    },
    people: {
        type: Number,
        required: true,  // assuming country is mandatory
    },
});

// Create the model from the schema
const Trip = mongoose.model('Trip', TripSchema);

// Export the model
module.exports = Trip;
