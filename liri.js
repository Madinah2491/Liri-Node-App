require("dotenv").config();

var keys = require ("./keys.js");

var search = process.argv[2];

var Spotify = require('node-spotify-api');

 function spotifySongs() {
    var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
    });
    
    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data.tracks); 
    });
 } 

var Twitter = require('twitter');

 function mytweets (){

    var client = new Twitter({
    consumer_key: keys.twitter.consumer_key,
    consumer_secret: keys.twitter.consumer_secret,
    access_token_key: keys.twitter.access_token_key,
    access_token_secret: keys.twitter.access_token_secret
    });
    
    var params = {screen_name: 'yepitsmadinah'};
    
    client.get('search/tweets', params, function(error, tweets, response) {
        
        if (!error) {
        console.log(tweets[1].text);
    }
    });

 }

 mytweets();
 spotifySongs();

 var request = require("request");

// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}

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
//  1. `node liri.js my-tweets`

//    * This will show your last 20 tweets and when they were created at in your terminal/bash window.

// 2. `node liri.js spotify-this-song '<song name here>'`

//    * This will show the following information about the song in your terminal/bash window
     
//      * Artist(s)
     
//      * The song's name
     
//      * A preview link of the song from Spotify
     
