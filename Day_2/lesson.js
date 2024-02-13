// Exercise: Level 1
let challenge = '30 Days of Javascript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(2,21));
console.log(challenge.substr(0,2));
console.log(challenge.includes('script'));
console.log(challenge.split());
console.log(challenge.split(''));

let socials = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(socials.split(','));
console.log(challenge.replace('Javascript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let secondChallenge = 'You cannot end a sentence with because because because is a conjuction';
console.log(secondChallenge.indexOf('because'));
console.log(secondChallenge.lastIndexOf('because'));
console.log(secondChallenge.search('because'));
console.log(challenge.trim(''));
console.log(challenge.startsWith('30 Days of'));
console.log(challenge.endsWith('Javascript'));

let pattern = /a/gi;
console.log(challenge.match(pattern));

let string = '30 Days of ';
console.log(string.concat("Javascript"));
console.log(challenge.repeat(3));

// Exercise: Level 2

let quote = 'There is no exercise better for the heart than reaching down and lifting people up';
console.log(quote);
let motherTeresaQuote = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same-- with charity, you give love, so don't just give money but reach out your hand instead.";
console.log(motherTeresaQuote);

let number = '10';
console.log(typeof number);
console.log(typeof number == 10);
let num = parseInt(number);
console.log(num);

let parsefloat = '9.8';
console.log(parsefloat);
let parse = parseFloat('9.8');
console.log(parse)
console.log(Math.round(parse));

let secondString = 'Jargon';
console.log(secondString.includes('on'));
let otherString = 'Python';
console.log(otherString.includes('on'));

let statement = 'I hope this course is not full of jargon';
console.log(statement.includes('jargon'));

let randomNum = Math.random(); 
let numBtwnZeroandHundred = randomNum * 100;
console.log(numBtwnZeroandHundred);


let randomNum_ = Math.random(); 
let numBtwnFiftyandHundred = randomNum * 50 + 50;
console.log(numBtwnFiftyandHundred);


let $randomNum = Math.random(); 
let numBtwnZeroand255 = $randomNum * 255;
console.log(numBtwnZeroand255);

let String = 'Javascript';
let firstLetter = String[0];
console.log(firstLetter);
let secondLetter = String[1];
console.log(secondLetter);
let thirdLetter = String[8];
console.log(thirdLetter);

let Pattern = '1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 2 7\n4 1 4 1 6 4\n5 1 5 25 125';
console.log(Pattern);

// console.log(secondChallenge.indexOf("because"))
// console.log(secondChallenge.lastIndexOf("because"))
// console.log(secondChallenge.substr(31,23))

// Exercise: Level 3
let Quote = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let love = /love/gi;
console.log(Quote.match(love));

let because = /because/gi;
console.log(secondChallenge.match(because));

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@aching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ing peo@ple. ; I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the resu@lt of &love& of tea&ching'
let inequities = /[%@&$#;]/gi
console.log(sentence.replace(inequities, ""));

let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month';
let income = /\d+/gi;
console.log(text.match(income));
let a = text.match(income);
let b = Number(a[0] * 12);
let c = Number (a[1]);
let d = Number(a[2] * 12);
console.log(b + c + d);
console.log(+(a[0] * 12) + +(a[1]) + +(a[2] * 12));
