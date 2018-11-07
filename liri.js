require("dotenv").config();
const keys = require("\.keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
const request = require("request");
const moment = require("moment");
const fs = require("fs");





const inputArgs = process.argv;
let input = "";
console.log(inputArgs.slice(2).join(" "));
input = inputArgs.slice(2).join("+")
console.log(input);

// Use switch to handle the chosen input from user
switch (input) {
    case "concert-this":
        concertThis(); //fill in this function
        break;
    case "spotify-this-song":
        spotifyThisSong(); //fill in this function
        break;
    case "movie-this":
        movieThis(); //fill in this function
        break;
    case "do-what-it-says":
        doWhatItSays(); //fill in this function 
        break;       
    default:
        console.log("I don't understand. Ask Foogle-Bot");
        break;
}

//Songs - node liri.js spotify-this-song '<song name here>'
//returns Artist(s), The song's name, A preview link of the song from Spotify,
//The album that the song is from
//default to "The Sign" by Ace of Base
function spotifyThisSong() {
    console.log("spotify this song: " + process.argv[3]);
};

//Concerts - node liri.js concert-this <artist/band name here>
//Searches Bands in Town for an artist and render the following information about each event to the terminal: Name of the venue, Venue location, Date of the Event (uses moment to format this as "MM/DD/YYYY")
function concertThis() {

}

//Movies - node liri.js movie-this '<movie name here>'
//Output - Title of the movie, Year the movie came out, IMDB Rating of the movie, Rotten Tomatoes Rating of the movie, Country where the movie was produced, Language of the movie, Plot of the movie, Actors in the movie
//default - output data for the movie 'Mr. Nobody'
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&" + var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy" + apikey;
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Release Year: " + JSON.parse(body).Year);
  }
});
function movieThis() {

}


//do what it says - node liri.js do-what-it-says
fs.readFile("random.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
  
    // We will then print the contents of data
    console.log(data);
  
    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
  
    // We will then re-display the content as an array for later use.
    console.log(dataArr);
  
    dataArr.forEach(function(title) { console.log(title)});
  
  });

//Bonus  
// fs.writeFile("log.txt", /*"Inception, Die Hard"*/, function(err) {

//     // If the code experiences any errors it will log the error to the console.
//     if (err) {
//       return console.log(err);
//     }
  
//     // Otherwise, it will print: "movies.txt was updated!"
//     console.log("random.txt was updated!");
  
//   });
fs.appendFile("log.txt", input, function(err) {

    // If an error was experienced we will log it.
    if (err) {
      console.log(err);
    }
  
    // If no error is experienced, we'll log the phrase "Content Added" to our node console.
    else {
      console.log("Content Added!");
    }
  
  });
  