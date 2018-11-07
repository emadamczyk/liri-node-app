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
input = inputArgs.slice(2).join("+")
//console.log(input);

spotify.search({type: 'track', query: input}, function(err, data){
    //console.log(data.tracks.items[0]);
			

    // spotLog.push("SPOTIFY LOG-------"); //push to log.txt
    
    if(err){
        return console.log('Error occured' + err);
    }
    //console.log(JSON.stringify(data, null, 2));
    //console.log(data.tracks.items[0]);
    let topResponse = data.tracks.items[0];
    console.log("--------------------");
    console.log(`Artist: ${topResponse.artists[0].name}\nSong Name: ${topResponse.name}\nPreview Link: ${topResponse.preview_url}\nAlbum: ${topResponse.album.name}`);
    console.log("--------------------");

    
    // log(spotLog);
});
  