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


// Мы можем использовать квадратные скобки в литеральной нотации для создания вычисляемого свойства.
// Пример:
// let fruit = prompt("Какой фрукт купить?", "apple");
// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };
// alert( bag.apple ); // 5, если fruit="apple"

// Смысл вычисляемого свойства прост: запись [fruit] означает, что имя свойства необходимо взять из переменной fruit.
// И если посетитель введёт слово "apple", то в объекте bag теперь будет лежать свойство {apple: 5}.
// По сути, пример выше работает так же, как и следующий пример:
// let fruit = prompt("Какой фрукт купить?", "apple");
// let bag = {};
// bag[fruit] = 5;