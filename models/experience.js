const mongoose = require('mongoose');

// Define the schema
const experienceSchema = new mongoose.Schema({
    experience: {
        type: String,
        required: true,  // assuming experience is mandatory
    },
    location: {
        type: String,
        required: true,  // assuming location is mandatory
    },
    state: {
        type: String,
        required: true,  // assuming state is mandatory
    },
    country: {
        type: String,
        required: true,  // assuming country is mandatory
    },
    amountSpent: {
        type: Number,
        required: true,  // assuming amountSpent is mandatory
        min: 0           // you can add additional validation if needed
    },
    tourGuide: {
        type: String,
        required: false  // assuming tourGuide is optional
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the model from the schema
const Experience = mongoose.model('Experience', experienceSchema);

// Export the model
module.exports = Experience;
