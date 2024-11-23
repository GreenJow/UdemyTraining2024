'use strict';

let numberOfFilms = 0;
let totalFilms = 0;
let iterations = 3;
    for(let i = 0; i<iterations; i++) {

        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

        if (!numberOfFilms || isNaN(numberOfFilms)) {
                        alert ('Введите корректные данные');
                        i--;
                        continue;
                    }
                    else if (numberOfFilms.length > 50 ) {
                            alert ('Слишком длинная строка');     
                            i--;
                            continue;          
                        }
                    else {
                        totalFilms += +numberOfFilms;
                    }

                    const personalMovieDB = {
                        count: totalFilms,
                        movies: {},
                        actors: [],
                        genres: [],
                        private: false
                    };

            for(let i = 0; i<iterations; i++) {
                const movie = prompt('Один из последних просмотренных фильмов', '');
        
                if (!movie) {
                    alert ('Введите корректные данные');
                    i--;
                    continue;
                } else if (movie.length > 50) {
                    alert ('Слишком длинная строка');
                    i--;     
                    continue; 
                } else {
                    const rating = prompt('На сколько оцените его?','');
                    personalMovieDB.movies[movie] = rating;
                    break;
                }
            };

            console.log(personalMovieDB);
            console.log(i);   
    };


