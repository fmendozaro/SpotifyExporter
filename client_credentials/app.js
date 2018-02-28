/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

// var request = require('request'); // "Request" library

var client_id = ''; // Your client id
var client_secret = ''; // Your secret
var user_id = '';
var playlist_id = '';


// use the access token to access the Spotify Web API
// var token = body.access_token;
var options = {
    headers: {
        'Authorization': 'Bearer ' + ''
    },
    json: true
};

fetch('https://api.spotify.com/v1/users/'+user_id+'/playlists/'+playlist_id+'/tracks?limit=100', options).then(function(response){
    return response.json();
}).then(function(results){
    document.write(`<ul>`);
    results.items.forEach(function(k, v){
        document.write(`<li>${k.track.name} - ${k.track.artists[0].name}</li>`);
    });
    document.write(`</ul>`);
});



