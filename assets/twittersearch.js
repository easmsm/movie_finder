//variables
let movieSearch = document.getElementById("movie-search")
let twitterSearch = document.getElementById("twitter-search")
let searchHashTag = document.getElementById("search-hash-tag")
//let search = document.getElementById("search")

function search () {
    twitterSearch.textContent = 'https://api.twitter.com/2/tweets/search/recent?query=%23movies'
}

// const apikey = 'uvVg9Ad90bgLgMeEZCrzhSaFg'
// const apiSecretKey = 'yHMOcBgS1ah7zRC38oXVUE1ydwKRif6MJmcqm72jSB6Ku1U9fr'
// const accessToken = '900833742218043392-40uWRnJBGPnJOWVF16pddcOERLMHJ6t'
// const accessTokenSecret = '8K8apSfZZtOd89XmhPBLDW4NMPfEsUxhZDuamUCN3QsJ5'

