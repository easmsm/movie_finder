//variables
let movieSearch = document.getElementById("movie-search")
let twitterSearch = document.getElementById("twitter-search")
let searchHashTag = document.getElementById("search-hash-tag")
let search = document.getElementById("search")


//source https://github.com/tombaranowicz/TwitterMonitoringJavaScript/blob/master/index.js, using Postman to generate urls

const Twit = require('twit')
const notifier = require('node-notifier');
const open = require('open');
const franc = require('franc')

const apikey = 'uvVg9Ad90bgLgMeEZCrzhSaFg'
const apiSecretKey = 'yHMOcBgS1ah7zRC38oXVUE1ydwKRif6MJmcqm72jSB6Ku1U9fr'
const accessToken = '900833742218043392-40uWRnJBGPnJOWVF16pddcOERLMHJ6t'
const accessTokenSecret = '8K8apSfZZtOd89XmhPBLDW4NMPfEsUxhZDuamUCN3QsJ5'

var T = new Twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});

(async () => {
   // //1. GET RECENT TWEETS
T.get('search/tweets', { q: '#movies since:2022-07-01s', count: 100 }, function(err, data, response) {
const tweets = data.statuses
.map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) //CHECK LANGUAGE
.map(tweet => tweet.text)
.filter(tweet => tweet.toLowerCase().includes('elon'));
console.log(tweets);
    })
})