








switch (input) {
    case "concert-this":
        concertThis(); //fill in this function
        break;
    case "spotify-this-song":
        spotifyThisSong(); //fill in this function
        break;
    default:
        console.log("I don't understand. Ask Foogle-Bot");
        break;
}

function spotifyThisSong() {
    console.log("spotify this song: " + process.argv[3]);
}

function concertThis() {
    
}