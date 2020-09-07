'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt('How much films do you see?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How much films do you see?', '');
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < personalMovieDB.count; i++) {
            const a = prompt('Last film?', ''),
                b = prompt('Mark', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },

    detectPersonalLever: function () {
        if (personalMovieDB.count < 3) {
            alert('Low level');
        } else if (personalMovieDB.count >= 3 && personalMovieDB.count < 5) {
            alert("Middle level");
        } else if (personalMovieDB >= 7) {
            alert("Top level");
        } else {
            console.log("Error");
        }
    },

    showMyBD: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genre === '' || genre == null) {
                i--;
                alert("BAD");
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i)=>{
            console.log(`Genre ${i+1} - is ${item}`);
        });
    }
};