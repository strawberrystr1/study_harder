'use strict';

function day(lang) {
    if (lang === 'ru') {
       console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
    } else {
        console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
    }
}

day('ru');

let lang ='en';
switch (lang) {
    case 'ru':
        console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break;
    case 'en':
        console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
        break;
}


let days = [['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']];
console.log('en', days[1]);
console.log('ru', days[1]);

let namePerson = 'Вася';
let person = namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Максим' ? console.log('Преподаватель') : console.log('студент');

