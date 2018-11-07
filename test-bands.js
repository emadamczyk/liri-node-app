//code for concertThis function

require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
//const bands = new Bands(keys.bands);
const request = require("request");
const moment = require("moment");


// let input = process.argv[2];
// console.log(process.argv);
const inputArgs = process.argv;
let input = "";
//console.log(inputArgs.slice(2).join(" "));
input = inputArgs.slice(2).join(" ")
//console.log(input);

//let queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?" + bands
let queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
//console.log(queryUrl);
request(queryUrl, function(error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {
        //console.log("successful request")
        let concertThisBand = JSON.parse(body)[0];
        console.log("--------------------");
        console.log(`Artist: ${input}\nVenue: ${concertThisBand.venue.name}\nLocation: ${concertThisBand.venue.city}, ${concertThisBand.venue.country}`);
        console.log(`Date: ${moment(concertThisBand.datetime).format("MM/DD/YYYY")}`);
        console.log("--------------------");
      // Parse the body of the site and recover name of venue, venue location, date of event
      //console.log("Venue: " + JSON.parse(body).Year);
    }
  });
  