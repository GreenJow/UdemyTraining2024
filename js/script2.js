'use strict'



function showTextMessage(inputText) {
    console.log(inputText);
}

let text = prompt('Введите текст');
showTextMessage(text);

//const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    heigt: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
}

console.log(options.colors.border);
console.log(options['colors']['bg']);

delete options.name;

console.log(options);

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет ${options[key][i]}`)
        }
    }  
    console.log(`Свойство ${key} имеет ${options[key]}`)
}