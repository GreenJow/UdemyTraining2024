'use strict';

let numberOfFilms = 0;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: [],
    genres: [],
    private: false
};

for (let i = 0; i < 3; i++){
    numberOfFilms += +prompt('Сколько фильмов вы уже посмотрели?');
    const movie = prompt('Один из последних просмотренных фильмов', '');
    const rating = prompt('На сколько оцените его?','');
    
    if (numberOfFilms === '' || movie === '' || rating === '') {
        alert ('Введите корректные данные');
        i--;
    } 
    else {
        personalMovieDB.movies[movie] = rating;
    }
};

console.log(personalMovieDB);

