const Experience = require('../models/experience');
const Trip = require('../models/trip');  // Corrected model import (capitalized)

// Create Experience Post
const createPost = async (req, res) => {
    try {
        const { experience, location, state, country, amountSpent, tourGuide } = req.body;

        const newExperience = new Experience({
            experience,
            location,
            state,
            country,
            amountSpent,
            tourGuide
        });

        await newExperience.save();
        res.status(201).json({ message: 'Experience saved successfully!' });
    } catch (err) {
        console.error('Error saving experience:', err);
        res.status(500).json({ message: 'Error saving experience', error: err.message });
    }
}

// Create Trip Post
const createTrip = async (req, res) => {
    try {
        const { destination, date, days, people } = req.body;

        // Use Trip model to create a new trip, not Experience model
        const newTrip = new Trip({
            destination,
            date,
            days,
            people,
        });

        await newTrip.save();
        res.status(201).json({ message: 'Trip saved successfully!' });
    } catch (err) {
        console.error('Error saving trip:', err);
        res.status(500).json({ message: 'Error saving trip', error: err.message });
    }
}

module.exports = { createPost, createTrip };
