// variables for DOM elements 
var inputEl = document.querySelector(".input")
var generateBtnEl = document.querySelector(".generate")
var savebtnMovieEl = document.querySelector(".save")
var savedMoviesUlEl = document.querySelector(".savedMovies")
var googlebtnEl = document.querySelector(".google")
// var savedBookUlEl = document.querySelector(".savedBooks")
var generateBookBtnEl = document.querySelector(".generateBook")
var inputBookEl = document.querySelector(".inputBook")
var googleBookBtnEl = document.querySelector(".googleBook")
var savebtnBookEl = document.querySelector(".saveBook")
var savedBooksUlEl = document.querySelector(".savedBooks")
//food search variable
var foodSearchBtnEl = document.querySelector(".grubhubBtn");
var deleteBookListBtnEl = document.querySelector(".deleteSavedBooksBtn")
var deleteMovieListBtnEl = document.querySelector(".deleteSavedMoviesBtn")

//mobile menu

const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

var savedBooksList = JSON.parse(localStorage.getItem("booksList") || "[]");
var savedMoviesList = JSON.parse(localStorage.getItem("moviesList") || "[]");

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

//delete buttons

//delete book list
deleteBookListBtnEl.addEventListener("click", function (){
    savedBooksUlEl.innerHTML = "";
    window.localStorage.removeItem('booksList');

});

//delete movie List
deleteMovieListBtnEl.addEventListener("click", function (){
    savedMoviesUlEl.innerHTML = "";
    window.localStorage.removeItem('moviesList');

});

//PAGE LOAD FUNCTION
//this will happen on page load
// get data from local storage and put it on page
function onPageLoad() {
    // first, we need to get the 'moviesList' data from localstorage. Remember, this data is an array
    var savedMovies = JSON.parse(localStorage.getItem("moviesList") || "[]");
     console.log(savedMovies);

    /// because we have an array of data, we need to loop over each item in the array
        for (var i = 0; i < savedMovies.length; i++) {
            // in a for loop, the current thing you are looping over is savedMovies[i]
            console.log(savedMovies);

            deleteBtnMovie(savedMovies[i])

    // //loads movies in "saved movies list"
    //     var li = document.createElement("li");
    //     li.appendChild(document.createTextNode(savedMovies[i]));  //savedMovies[i] is the name of the movie to put on the page
    //     savedMoviesUlEl.appendChild(li);

        }
    
    var savedBooks = JSON.parse(localStorage.getItem("booksList") || "[]");
            console.log(savedBooks);

        for (var i = 0; i < savedBooks.length; i++) {
            console.log(savedBooks);

        // var li = document.createElement("li");
        // li.appendChild(document.createTextNode(savedBooks[i]));
        // savedBooksUlEl.appendChild(li);
        deleteBtn(savedBooks[i])

        }

}

onPageLoad()

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
            inputEl.textContent = response.results[movie].title
            console.log(response.results[movie].title)

        })
        .catch(err => console.error(err));
}

// btnEl.addEventListener("click", fetchFunction){
//     document.createElement(li)
// }


var movieKey = 0

// Search button function to call fetch function to get a generated movie every click
generateBtnEl.addEventListener("click", function () {
    fetchFunction();
    inputEl.classList.remove("opacity")
})

function randomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

// save button click function 
savebtnMovieEl.addEventListener("click", function () {

    //save movie in local storage -->

    // first, need to get data in local storage
    // var savedMoviesList = JSON.parse(localStorage.getItem("moviesList") || "[]");  // || means "or". If there is nothing in local storage, return empty ARRAY
        console.log("Saved Movies List", savedMoviesList);
    // we only want 10 movies on the movies list. IF there are more than 10, no more should be added to the list
    // check how many movies are in the movies list
    if (savedMoviesList.length >= 10) {  
        // we need to prevent more movies being added after 10 movies
         savedMoviesList = savedMoviesList.slice(0,0) // slice: this prevents item(movie) to be added to array after 10 movies
        
    } else {
    //  need to put data into savedMoviesList
     // remember, savedMoviesList is an array!
        savedMoviesList.push(inputEl.textContent)
        deleteBtnMovie(inputEl.textContent)
        //saves the movie in 'saved movies' li
        // var li = document.createElement("li");
        // li.appendChild(document.createTextNode(inputEl.innerHTML));
        // savedMoviesUlEl.appendChild(li);

        //last, set savedMoviesList into local storage
        localStorage.setItem("moviesList", JSON.stringify(savedMoviesList));
    }
})




function deleteBtnMovie(title){
    //saves the book in 'saved books' list
   var li = document.createElement("li");
   var singleDeleteBtn = document.createElement("button")
   singleDeleteBtn.className = "singleItemDelete"
   singleDeleteBtn.textContent = "Remove"

   li.appendChild(document.createTextNode(title));
   singleDeleteBtn.addEventListener("click", function() {
       savedMoviesUlEl.removeChild(li); 
   var filteredMovies =  savedMoviesList.filter((name)=> name !== title)
    localStorage.setItem("moviesList", JSON.stringify(filteredMovies));
   })
   li.appendChild(singleDeleteBtn)
   savedMoviesUlEl.appendChild(li);
   movieKey++
  

}















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
            inputBookEl.textContent = response.Books[Math.floor(Math.random() * 37)].title
            
            console.log(response.Books[Math.floor(Math.random() * 37)].title)
            
        })
        .catch(err => console.error(err));
    }
    
    
    var bookKey = 0

// Search button function to call fetch function to get a generated book every click
generateBookBtnEl.addEventListener("click", function () {
    bookFetchFunction();
    inputBookEl.classList.remove("opacity")

})

savebtnBookEl.addEventListener("click", function() {
    console.log(inputBookEl.textContent);

    //save book in local storage -->

    //get data in local storage
    // var savedBooksList = JSON.parse(localStorage.getItem("booksList") || "[]");
        console.log("Saved Books List", savedBooksList);
    
    // // we only want 10 Books on the Book list. IF there are more than 10, no more should be added
    // //check how many books are in the list
    if  (savedBooksList.length >= 10) {
        savedBooksList = savedBooksList.slice(0,0) // slice: this prevents item(book) to be added to array after 10 items
     }else{
        // next, need to put data into savedBooksList
        // remember, savedBooksList is an array!

        savedBooksList.push(inputBookEl.textContent)
deleteBtn(inputBookEl.textContent)
    //      //saves the book in 'saved books' list
    //     var li = document.createElement("li");
    //     var singleDeleteBtn = document.createElement("button")
    //     singleDeleteBtn.className = "singleItemDelete"
    //     singleDeleteBtn.textContent = "Delete"
    //     li.appendChild(document.createTextNode(inputBookEl.textContent));
    //     li.appendChild(singleDeleteBtn)
    //     savedBooksUlEl.appendChild(li);

    //     singleDeleteBtn.addEventListener("click", function() {
    //         savedBooksUlEl.removeChild(li);
    //         localStorage.setItem("booksList", JSON.stringify(savedBooksList));
            
    
    //      })
    
    //     //last, set savedBooksList into local storage
        localStorage.setItem("booksList", JSON.stringify(savedBooksList));

     }

})

function deleteBtn(title){
         //saves the book in 'saved books' list
        var li = document.createElement("li");
        var singleDeleteBtn = document.createElement("button")
        singleDeleteBtn.className = "singleItemDelete"
        singleDeleteBtn.textContent = "Remove"
  
        li.appendChild(document.createTextNode(title));
        singleDeleteBtn.addEventListener("click", function() {
            savedBooksUlEl.removeChild(li); 
        var filteredBooks =  savedBooksList.filter((name)=> name !== title)
         localStorage.setItem("booksList", JSON.stringify(filteredBooks));
        })
        li.appendChild(singleDeleteBtn)
        savedBooksUlEl.appendChild(li);
        bookKey++
       

}



//google button event listener to open new tabs and search generated book
googleBookBtnEl.addEventListener("click", function () {
    window.open('http://www.google.com/search?q=' + inputBookEl.innerHTML);

})

//grubhub button event listener to redirect to grubhub
foodSearchBtnEl.addEventListener("click", function() {
     window.open("https://grubhub.com"); 

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