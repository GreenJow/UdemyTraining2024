'use strict';


    for (let i = 0; i < 3; i++) {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        const movie = prompt('Один из последних просмотренных фильмов', '');
        const rating = prompt('На сколько оцените его?','');
    

        if (numberOfFilms.length > 50 || movie.length > 50 || rating.length > 50) {
            alert ('Слишком длинная строка');
            i--;
        }
        else {
            if (numberOfFilms === '' || movie === '' || rating === '') {
                alert ('Введите корректные данные');
                i--;
            } 
            else {
                
                const personalMovieDB = {
                    count: numberOfFilms += numberOfFilms,
                    movies: {},
                    actors: [],
                    genres: [],
                    private: false
                };
                
                personalMovieDB.movies[movie] = rating;
                console.log(personalMovieDB);
            }
        };
    
    };

