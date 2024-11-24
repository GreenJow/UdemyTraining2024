'use strict';

let numberOfFilms = 0;
let totalFilms = 0;
let iterations = 1;


function start() { 
    for(let i = 0; i < iterations; i++) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
        if(!numberOfFilms || isNaN(numberOfFilms) || numberOfFilms == null) {
            alert ('Введите корректные данные');
                        i--;
                        continue;
        }
        else if (numberOfFilms.length > 50) {
                            alert ('Слишком длинная строка');     
                            i--;
                            continue;          
                        }
                    else {
                        totalFilms += +numberOfFilms;
                    }
    }
}

start();

function rememberMyFilms() {   
    
    const personalMovieDB = {
        count: totalFilms,
        movies: {},
        actors: [],
        genres: [],
        private: false
    };
    
    let genresCounter = 0;
    
    function writeYourGenres() {
        for(let i = 0; i < iterations; i++) {

            genresCounter = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i] = genresCounter;
        };
    };
        
    function showMyDB() {
        if (personalMovieDB.private === false) {
            console.log(personalMovieDB);
        }
    }

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
            writeYourGenres();
            showMyDB();
            
            console.log(totalFilms);

};
    
    rememberMyFilms();

  

    function detectPersonalLevel() {
        let filmCounter = totalFilms;
        if (filmCounter < 10) {
            alert ('Просмотрено довольно мало фильмов');
        }
        else if (filmCounter >= 10 && filmCounter < 30 ) {
            alert ('Вы классический зритель');
        }
        else if (filmCounter >= 30){
            alert ('Вы киноман');
        }
        else {
            alert ('Произошла ошибка');
            
        };
    }

    detectPersonalLevel();
   

    
    




  