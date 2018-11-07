# LIRI-node-app

### Purpose
This node application creates a LIRI - _Language_ Interpretation and Recognition Interface. It is a command line node app that takes in parameters and gives back data.

### How It Works
Using Spotify, Bands in Town, and OMDB, this LIRI app does searches based on a user's input by sending requests to the respective API. It uses the following Node packages to make this possible:

* [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

* [Request](https://www.npmjs.com/package/request)

* [OMDB API](http://www.omdbapi.com)

* [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

* [Moment](https://www.npmjs.com/package/moment)

* [DotEnv](https://www.npmjs.com/package/dotenv)

### User Instructions
The liri.js app takes in one of the following commands and returns data specific to the type of command:
* `concert-this`
    * Searches the Bands in Town Artist Events API for an artist and returns the following information about the event to the terminal:
        * Name of the venue

        * Venue location

        * Date of the Event (use moment to format this as "MM/DD/YYYY")

        * By default, if no artist is provided then the program will return info about Bon Jovi.

* `spotify-this-song`
    * Sends a request to the Spotify API for a song input and returns the following information about the song in the terminal:
        * Artist(s)

        * The song's name

        * A preview link of the song from Spotify

        * The album that the song is from

        * By default, if no song is provided then the program will return info about "The Sign" by Ace of Base.

* `movie-this`
    * Searches the OMDB API for a movie title and returns the following information to the terminal:
     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```
    * By default, if no movie is provided by the user, the program will output data for the movie 'Mr. Nobody.'


* `do-what-it-says`
    * Uses the `fs` Node package and takes the text inside of a random.txt file and uses it to call one of LIRI's commands. The text in random.txt can be edited to create unique calls with each command type.

### Preview of liri.js in action
See the following videos for a preview of how a user would use this LIRI app:
* Using command type [`concert-this`](https://drive.google.com/file/d/1gXQL0_gxHNYABwmfs55_n_7R98pxxDJB/view) 

* Using command type [`spotify-this-song`](https://drive.google.com/file/d/1GEU8EX8jn_dd4jVd6fMK35llXQ0Kh-yU/view)

* Using command type [`movie-this`](https://drive.google.com/file/d/1lkE7qwUUucKCBxb1OyBOuvMrVaKUknUQ/view)

* Using command [`do-what-it-says`](https://drive.google.com/file/d/1suEvMgMC9DirU9PaNEilYO6TCTPaXtUi/view)

### BONUS
* Each input typed by the user is logged to a `log.txt` file.

* Content is appended to this log file, not overwritten.

### Portfolio
* This project is also accessible via [my Portfolio](https://emadamczyk.github.io/EA-Portfolio/portfolio.html)