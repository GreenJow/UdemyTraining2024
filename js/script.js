"use strict";


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');


const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
    };


const a = prompt('Один из последних посмотренных фильмов', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних посмотренных фильмов', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b; //Используем квадратные скобки вместо точки для избежания дальнейших багов
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);