// variables for DOM elements 
var inputEl = document.querySelector(".input")
var generateBtnEl = document.querySelector(".generate")
var saveBtnEl = document.querySelector(".save")
var savedMoviesUlEl = document.querySelector(".savedMovies")
var googlebtnEl = document.querySelector(".google")
// var savedBookUlEl = document.querySelector(".savedBooks")
var generateBookBtnEl = document.querySelector(".generateBook")
var inputBookEl = document.querySelector(".inputBook")
var googleBookBtnEl = document.querySelector(".googleBook")
var savebtnBookEl = document.querySelector(".saveBook")
var saveBooksUlEl = document.querySelector(".savedBooks")



// Movies 
// Movies 
// Movies 

// random page from fetch function 
function randomUrl() {

    var page = Math.floor(Math.random() * 466)

    return 'https://api.themoviedb.org/3/movie/top_rated?api_key=57a87d855b4da05e62b4da62e5c0856e&language=en-US&page=' + page + '&region=US'
}

// fetch function for generating movie title 
var fetchFunction = function () {

    fetch(randomUrl())
        .then(response => response.json())
        .then(response => {
            // console.log(response.results[0])
            var movie = randomIndex(response.results)
            inputEl.innerHTML = response.results[movie].title
            console.log(response.results[movie].title)

        })
        .catch(err => console.error(err));
}

// btnEl.addEventListener("click", fetchFunction){
//     document.createElement(li)
// }


// Search button function to call fetch function to get a generated movie every click
generateBtnEl.addEventListener("click", function () {
    fetchFunction();
    inputEl.classList.remove("opacity")
})


function randomIndex(array) {
    return Math.floor(Math.random() * array.length)
}


// save button click function 
saveBtnEl.addEventListener("click", function () {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputEl.innerHTML));
    savedMoviesUlEl.appendChild(li);
})


//google click function
googlebtnEl.addEventListener("click", function () {
    window.open('http://www.google.com/search?q=' + inputEl.innerHTML);

})





// BOOK SECTION
// BOOK SECTION
// BOOK SECTION


//rapidAPI key / host
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '61329c8183msh78cc9d6cf80b668p1997dajsn80542530576b',
        'X-RapidAPI-Host': 'bookshelves.p.rapidapi.com'
    }
};


//fetch function for generating random book
var bookFetchFunction = function () {
    fetch('https://bookshelves.p.rapidapi.com/books', options)
        .then(response => response.json())
        .then(response => {
            // console.log(response.results[0])
            inputBookEl.innerHTML = response.Books[Math.floor(Math.random() * 37)].title

            console.log(response.Books[Math.floor(Math.random() * 37)].title)

        })
        .catch(err => console.error(err));
}



// Search button function to call fetch function to get a generated book every click
generateBookBtnEl.addEventListener("click", function () {
    bookFetchFunction();
    inputBookEl.classList.remove("opacity")


})


// save button click function for book
savebtnBookEl.addEventListener("click", function () {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputBookEl.innerHTML));
    saveBooksUlEl.appendChild(li);

})


//google button event listener to open new tabs and search generated book
googleBookBtnEl.addEventListener("click", function () {
    window.open('http://www.google.com/search?q=' + inputBookEl.innerHTML);

})















//---------------OLD CODE for reference-------------------
//--------------------------------------------------------
//--------------------------------------------------------


// // BOOKS 
// function RandomBook() {
//     var bookRdm = Math.floor(Math.random() * 37)
//     return bookRdm
// }




    // show quote NOT GOIN TO USE??
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '61329c8183msh78cc9d6cf80b668p1997dajsn80542530576b',
// 		'X-RapidAPI-Host': 'movies-quotes.p.rapidapi.com'
// 	}
// };

// fetch('https://movies-quotes.p.rapidapi.com/quote', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));