if(process.env.NODE_ENV != "production"){
	require('dotenv').config({path: "../.env"});
}
const axios = require("axios");
const mongoose = require("mongoose");
const initData =  require("./data.js");
const Listing = require("../models/listing.js");
const GEOAPIFY_API_KEY = "f1d27e3d6868449cabcc7b47660fb8e9";

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
    console.log("connected to DB");
})
.catch((err) =>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
  }

async function getCoordinates(location) {
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(location)}&apiKey=${GEOAPIFY_API_KEY}`;

    try {
        const response = await axios.get(url);

        if (response.data.features.length > 0) {
            return response.data.features[0].geometry;
        }

        return null;
    } catch (err) {
        console.error("Geoapify Error:", err.message);
        return null;
    }
}

const initDB = async () => {
    try {
        await Listing.deleteMany({});

        const listings = [];

        for (let listing of initData.data) {

            listing.owner = "6a4a109caba3e2fcc5dbd587";

            const geometry = await getCoordinates(
                `${listing.location}, ${listing.country}`
            );

            if (!geometry) {
                console.log(`Skipping ${listing.location}`);
                continue;
            }

            listing.geometry = geometry;
            listings.push(listing);
        }

        await Listing.insertMany(listings);

        console.log("Data was initialized");
    } catch (err) {
        console.error(err);
    }
};


initDB();
