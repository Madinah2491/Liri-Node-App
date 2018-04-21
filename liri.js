require("dotenv").config();

var keys = require ("./keys.js");


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

 function Twitter (){

    var Twitter = require('twitter');
 
    var client = new Twitter({
    consumer_key: keys.twitter.consumer_key,
    consumer_secret: keys.twitter.consumer_secret,
    access_token_key: keys.twitter.access_token_key,
    access_token_secret: keys.twitter.access_token_secret
    });
    
    var params = {screen_name: 'yepitsmadinah'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets[0].text);
    }
    });

 }

 Twitter();