'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How much films do you see?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much films do you see?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < numberOfFilms; i++) {
        const a = prompt('Last film?', ''),
            b = prompt('Mark', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();

function detectPersonalLever() {
    if (personalMovieDB.count < 3) {
        alert('Low level');
    } else if (personalMovieDB.count >= 3 && personalMovieDB.count < 5) {
        alert("Middle level");
    } else if (personalMovieDB >= 7) {
        alert("Top level");
    } else {
        console.log("Error");
    }
}

detectPersonalLever();

function showMyBD(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyBD(personalMovieDB.privat);