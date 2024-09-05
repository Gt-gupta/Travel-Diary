const Trips = require('../models/trip');
const Posts = require('../models.experience');
const Experience = require('../models/experience');
// Function to get all trips or filter by userId
const getTrips = async (req, res) => {
    try {
        // If you want to filter by userId (optional, based on your request params)
        const { userId } = req.query;

        let trips;
        if (userId) {
            // If a userId is provided, find trips for that user
            trips = await Trips.find({ userId });
        } else {
            // Otherwise, fetch all trips
            trips = await Trips.find();
        }

        // Respond with the list of trips
        res.status(200).json({ trips });
    } catch (error) {
        console.error('Error fetching trips:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getPosts = async (req,res)=>{
    try{
        const {userId} = req.query;
        let posts;
        if(userId){
            posts = await Experience.find({userId});
        }
        else{
            posts = await Experience.find();
        }
        res.status(200).json({posts});
    }
    catch(error){
        console.error('Error fetching posts:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { getTrips , getPosts};
