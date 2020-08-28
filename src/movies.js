// Iteration 1: All directors? - Get the array of all directors.
let tester = [
    {
      "title": "The Shawshank Redemption",
      "year": 1994,
      "director": "Frank Darabont",
      "duration": "2h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.3
    },
    {
      "title": "The Godfather",
      "year": 1972,
      "director": "Francis Ford Coppola",
      "duration": "2h 55min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.2
    },
    {
      "title": "The Godfather: Part II",
      "year": 1974,
      "director": "Francis Ford Coppola",
      "duration": "3h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9
    },
    {
        "title": "Schindler\"s List",
        "year": 1993,
        "director": "Steven Spielberg",
        "duration": "3h 15min",
        "genre": [
          "Biography",
          "Drama",
          "History"
        ],
        "rate": 8.9
      }]

function getDirectors(movie){
    return movie.director;
}

function getAllDirectors(movies){
    var copy = [...movies];
    var result = copy.map(getDirectors);
    return result;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    var copy = [...movies];
    var result = copy.filter(isSspMovie);
    result = result.filter(isDramaMovie);
    return result.length;
}

function isDramaMovie(movie){
    return movie.genre.includes("Drama");
}

function isSspMovie(movie){
    return movie.director === "Steven Spielberg";
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    var result = 0;
    if (movies.length == 0){
        return 0
    }
    result = movies.reduce(getAverage,0) / movies.length;
    return Number(result.toFixed(2));
}

function getAverage(acc, rates){
    var sumAvg = Number(acc);
    if (!isNaN(rates.rate)){
        sumAvg += rates.rate;
    }
    return sumAvg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    var result = 0;
    if (movies.length == 0){
        return 0;
    }
    var copy = [...movies];
    copy = copy.filter(isDramaMovie);
    result = ratesAverage(copy);
    return result;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    var result = [];
    var copy = [...movies];
    if (movies.length == 1){
        return copy;
    }
    result = copy.sort(oldestMovies);
    return result;
}

function oldestMovies(film1, film2){
    if (film1.year - film2.year != 0){
        return film1.year - film2.year;
    } else {
        if (film1.title < film2.title){
            return -1;
        } else {
            return 1;
        }
    }
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    var result = [];
    var result20 = [];
    var copy = [...movies];
    result = copy.sort(isOrdered);
    
    for (let i = 0; i<20; i++){
        if (result[i] === undefined){
            break;
        }
        result20.push(result[i].title);
    }
    return result20;
}

function isOrdered(film1, film2){
    if (film1.title < film2.title){
        return -1;
    } else {
        return 1;
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
