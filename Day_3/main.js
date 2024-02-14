let firstName = 'Oluwabukunolami';
let lastName = 'Muritala';
let country = 'Nigeria';
let city = 'Ilorin';
let age = 23;
let isMarried = true;
let year = 2024;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

let number = '10';
console.log(typeof number);
console.log(typeof number == 10);
// let num = parseInt(number);
// console.log(num);

let parsefloat = '9.8';
let parse = parseFloat('9.8');
console.log(parse)
// console.log(Math.round(parse));

console.log(5 > 3);
console.log(5>=3);
console.log(3<5);
console.log(5 == 3);
console.log(5 === '5');
console.log(undefined === null);

4 > 3;        //true//
console.log(4>3)
4 >= 3;       //true
console.log(4>=3);
4 < 3;        //false
console.log(4<3);
4 <= 3;      //false
console.log(4 <= 3);
4 == 4;      //true
console.log(4 == 4);
4 === 4;      //true
console.log(4 === 4);
4 != 4;       //false
console.log(4 != 4);
4 !== 4;      //false
console.log(4 !== 4);
4 != '4';     //false
console.log(4 != '4');
4 == '4';      //true
console.log(4 == '4');
4 === '4';     //false
console.log(4 === '4');
console.log('Python'.length);
console.log('Jargon'.length);
console.log('Python'.length != 'Jargon'.length);
console.log('Jargon'.length > 'Python'.length);
console.log('Python'.length < 'Jargon'.length);

4 > 3 && 10 < 12;         //true && true -> true
console.log(4 > 3 && 10 < 12);
4 > 3 && 10 > 12;         //true && false -> false
console.log(4 > 3 && 10 > 12);
4 > 3 || 10 < 12;         //true || true -> true
console.log(4 > 3 || 10 < 12);
4 > 3 || 10 > 12;          //true || false -> true
console.log(4 > 3 || 10 > 12);
!(4 > 3);          //false
console.log(!(4 > 3));
!(4 < 3);          //true
console.log(!(4 < 3));
!(false);          //true
console.log(!(false));
!(4 > 3 && 10 < 12);          //false
console.log(!(4 > 3 && 10 < 12));
!(4 > 3 && 10 > 12);          //false
console.log(!(4 > 3 && 10 < 12));
!(4 === '4');          //true
console.log(!(4 === '4'));
// !('Jargon'.includes(on))
// console.log(!('Jargon'.includes()));