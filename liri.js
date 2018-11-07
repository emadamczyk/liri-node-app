require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);
const request = require("request");
const moment = require("moment");
moment().format();
const fs = require("fs");




const command = process.argv[2];
//console.log(command);
const inputArgs = process.argv;
let input = "";
//console.log(inputArgs.slice(2).join(" "));
input = inputArgs.slice(3).join(" ")
//console.log(input);
logThis();

// Use switch to handle the chosen input from user
switch (command) {
    case "concert-this":
        concertThis(); 
        break;
    case "spotify-this-song":
        spotifyThisSong(); 
        break;
    case "movie-this":
        movieThis(); 
        break;
    case "do-what-it-says":
        doWhatItSays();  
        break;       
    default:
        console.log("I don't understand. Ask Foogle-Bot");
        break;
}

//Concerts - node liri.js concert-this <artist/band name here>
//Searches Bands in Town for an artist and render the following information about each event to the terminal: Name of the venue, Venue location, Date of the Event (uses moment to format this as "MM/DD/YYYY")
function concertThis() {
    if (input === undefined || input === null || input === "") {
        input = "Bon Jovi";
    }
    let queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    //console.log(queryUrl);
    request(queryUrl, function(error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {
            //console.log("successful request")
            let concertThisBand = JSON.parse(body)[0];
            // Parse the body of the site and recover name of venue, venue location, date of event
            console.log("--------------------");
            console.log(`Artist: ${input}\nVenue: ${concertThisBand.venue.name}\nLocation: ${concertThisBand.venue.city}, ${concertThisBand.venue.country}`);
            console.log(`Date: ${moment(concertThisBand.datetime).format("MM/DD/YYYY")}`);
            console.log("--------------------");
              
        } 
    });
};

//Songs - node liri.js spotify-this-song '<song name here>'
//returns Artist(s), The song's name, A preview link of the song from Spotify,
//The album that the song is from
//default to "The Sign" by Ace of Base
function spotifyThisSong() {
    if (input === undefined || input === null || input === "") {
        input = "Ace of Base The Sign";
    }
    spotify.search({type: 'track', query: input}, function(err, data){
        //console.log(data.tracks.items[0]);
        
        if(err){
            return console.log('Error occured' + err);
        }
        //console.log(JSON.stringify(data, null, 2));
        //console.log(data.tracks.items[0]);
        let topResponse = data.tracks.items[0];
        console.log("--------------------");
        console.log(`Artist: ${topResponse.artists[0].name}\nSong Name: ${topResponse.name}\nPreview Link: ${topResponse.preview_url}\nAlbum: ${topResponse.album.name}`);
        console.log("--------------------");
    });
};

//Movies - node liri.js movie-this '<movie name here>'
//Output - Title of the movie, Year the movie came out, IMDB Rating of the movie, Rotten Tomatoes Rating of the movie, Country where the movie was produced, Language of the movie, Plot of the movie, Actors in the movie
//default - output data for the movie 'Mr. Nobody'
function movieThis() {
    if (input === undefined || input === null || input === "") {
        input = "Mr. Nobody";
    }
    // Run a request to the OMDB API with the movie specified
    let queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
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
};


//do what it says - node liri.js do-what-it-says
function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }
        // print the contents of data
        //console.log(data);
        // Then split it by commas (to make it more readable)
        let dataArr = data.split(",");
        input = dataArr[1];
        console.log(input);
  
        // display the content as an array for later use
        //console.log(dataArr);
  
        if (dataArr[0] === "spotify-this-song") {
            spotifyThisSong();
        } else if (dataArr[0] === "concert-this") {
            concertThis();
        } else if (dataArr[0] === "movie-this") {
            movieThis();
        }
    });
};    

//Bonus - Log each command to the log.txt file
function logThis() {
    fs.appendFile("log.txt", `,${input}`, function(err) {   

        // If an error was experienced we will log it.
        if (err) {
        console.log(err);
        }
  
        // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        else {
        console.log("Content added to log.txt");
        }
    });
};    
  