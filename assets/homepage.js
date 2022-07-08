var inputEl = document.querySelector(".input")
var generateBtnEl = document.querySelector(".generate")
var  saveBtnEl = document.querySelector(".save")
var savedMoviesUlEl = document.querySelector(".savedMovies")
var googlebtnEl = document.querySelector(".google")


function randomUrl() {

    var page = Math.floor(Math.random() * 466)

    return 'https://api.themoviedb.org/3/movie/top_rated?api_key=57a87d855b4da05e62b4da62e5c0856e&language=en-US&page=' + page + '&region=US'
}

var fetchFunction = function(){

    fetch(randomUrl())
    .then(response => response.json())
    .then(response => {
        console.log(response.results[0])
        var movie = randomIndex(response.results)
            inputEl.innerHTML = response.results[movie].title
    })
    .catch(err => console.error(err));
}

// btnEl.addEventListener("click", fetchFunction){
//     document.createElement(li)
// }


generateBtnEl.addEventListener("click", function(){
    fetchFunction();
    inputEl.classList.remove("opacity")


})



function randomIndex(array) {

    return Math.floor(Math.random() * array.length)
}

saveBtnEl.addEventListener("click", function(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputEl.innerHTML));
    savedMoviesUlEl.appendChild(li);

})

googlebtnEl.addEventListener("click", function(){
    window.open('http://www.google.com/search?q=' + inputEl.innerHTML);      

})

