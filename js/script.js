'use strict';

const numberOfFilms = prompt('How much films do you see?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < numberOfFilms; i++) {
    if (i >= 5) {
        break;
    }

    const a = prompt('Last film?', ''),
        b = prompt('Mark', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}


if (personalMovieDB.count < 3) {
    alert('Low level');
} else if (personalMovieDB.count >= 3 && personalMovieDB.count < 5) {
    alert("Middle level");
} else if (personalMovieDB >= 7) {
    alert("Top level");
} else {
    console.log("Error");
}

console.log(personalMovieDB);