require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
//const bands = new Bands(keys.bands);
const request = require("request");
const moment = require("moment");
const fs = require("fs");

// let input = process.argv[2];
// console.log(process.argv);
const inputArgs = process.argv;
let input = "";
//console.log(inputArgs.slice(2).join(" "));
input = inputArgs.slice(2).join("+")
//console.log(input);

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
//console.log(queryUrl);

request(queryUrl, function(error, response, body) {
    //console.log("successful request");
    let movie = JSON.parse(body);
    


  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover the movie title, Year movie came out, the imdbRating, Rotten Tomatoes Rating, Country where produced, Language, Plot, Actors
    console.log("--------------------");
    console.log(`Title: ${movie.Title}\nRelease Year: ${movie.Year}\nIMDb Rating: ${movie.imdbRating}\nRotten Tomatoes Rating: ${movie.Ratings[1].Value}\nCountry: ${movie.Country}\nLanguage: ${movie.Language}\nPlot: ${movie.Plot}\nActors: ${movie.Actors}`);
    console.log("--------------------");
  }
});

  