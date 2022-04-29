/***********************************************
 * Type ------------------ Homework assignment *
 * ID -------------------- 18                  *
 * Student --------------- Lilit Khalatyan     *
 * Date ------------------ 28-04-2022          *
/**********************************************/

//                               ** * **

console.log("====== 01. Patterns and flags ======");
// replace
console.log("We will, we will".replace(/we/gi, "[]")); // [] will, [] will
console.log("We will, we will".replace(/we/i, "[]")); // [] will, we will
console.log("We will, we will".replace(/we/g, "[]")); // We will, [] will

//                               ** * **
//                              [N E X T]

console.log("====== 02. Character classes ======");

const num = "+7(903)-123-45-67";

console.log(num.match(/\d/)); // 7
console.log(num.match(/\d/g)); // ['7', '9', '0', '3', '1', '2', '3', '4', '5', '6', '7']
console.log(num.match(/\d/g).join("")); // 79031234567
console.log(num.match(/123/)); // 123

//                               ** * **
//                              [N E X T]

console.log("====== 03. Unicode: flag u and class p{...} ======");

const re = /x\p{Hex_Digit}\p{Hex_Digit}/u;
console.log("number: xAF".match(re)); // xAF

const currency = `Prices: $2, €1, ¥9`;
console.log(currency.match(/\p{Sc}\d/gu)); // ['$2', '€1', '¥9']

//                               ** * **
//                              [N E X T]

console.log("====== 04. Anchors: string start ^ and end $ ======");

//      *** Task 04.1 ***
//
// Which string matches the pattern ^$?
//

const string1 = "12:34";
const string2 = "abcd $";
const string3 = "";

const regexp = /^$/;
console.log(regexp.test(string1)); // false
console.log(regexp.test(string2)); // false
console.log(regexp.test(string3)); // true

// The empty string ==> Both anchors together ^...$ are often used
// to test whether or not a string fully matches the pattern.

//                               ** * **
//                              [N E X T]

console.log("====== 05. Multiline mode of anchors ^ $, flag m ======");
const str1 = `1st place: Winnie, num = a3
2nd place: Piglet, num = b4
3rd place: Eeyore, num = c5`;

console.log(str1.match(/^\d/gm)); // ['1', '2', '3']
console.log(str1.match(/^\d/g)); // ['1']
console.log(str1.match(/\d$/gm)); // ['3', '4', '5']
console.log(str1.match(/\d\n/g)); // ['3\n', '4\n']

//                               ** * **
//                              [N E X T]

console.log("====== 06. Word boundary: \b ======");

console.log("Hello, Java!".match(/\bHello\b/)); // Hello
console.log("Hello, Java!".match(/\bJava\b/)); // Java
console.log("Hello, Java!".match(/\bHell\b/)); // null
console.log("Hello, Java!".match(/\bJava!\b/)); // null
console.log("1 23 456 78".match(/\b\d\d\b/g)); // ['23', '78']
console.log("12,34,56".match(/\b\d\d\b/g)); // ['12', '34', '56']

//                                  *
// *** Task 06.1 ***
//
// Find the time
//

const stringWithTime = "Breakfast at 09:00 in the room 123:456.";
console.log(stringWithTime.match(/\b\d\d:\d\d\b/g)); // ['09:00']

//                               ** * **
//                              [N E X T]

console.log("====== 07. Escaping, special characters ======");

console.log("Finding dot in sentence 55.1".match(/\d\.\d/)); // 5.1
console.log("Finding dot in sentence 511".match(/\d\.\d/)); // null

//                               ** * **
//                              [N E X T]

console.log("====== 08. Sets and ranges [...] ======");

console.log("Mop top".match(/[tm]op/gi)); // ['Mop', 'top']

//                                  *
// *** Task 07.1 ***
//
// We have a regexp /Java[^script]/.
// Does it match anything in the string Java? In the string JavaScript?
//

console.log("JavaScript".match(/Java[^script]/)); // "JavaS"
console.log("Java".match(/Java[^script]/)); // null
console.log("JavaScript".match(/Java[^t]/)); // "JavaS"

//                                  *
// *** Task 07.2 ***
//
// Find the time as hh:mm or hh-mm
//

console.log("Breakfast at 09:00. Dinner at 21-30".match(/\d\d[-:]\d\d/g)); //  ['09:00', '21-30']

//                               ** * **
//                              [N E X T]

console.log("====== 09. Quantifiers +, *, ? and {n} ======");

console.log("I'm not 12, but 1234 years old".match(/\d{3,5}/)); // "1234"
console.log("12, 256, 4488, 345678 years old".match(/\d{3,}/)); // 256
console.log("12, 256, 4488, 345678 years old".match(/\d{3,}/g)); // ['256', '4488', '345678']

console.log("+7(903)-123-45-67".match(/\d+/g)); // ['7', '903', '123', '45', '67']
console.log("+7(903)-123-45-67".match(/\d{1,}/g)); // ['7', '903', '123', '45', '67']
// ? === “zero or one” ===  {0,1}
console.log("color vs colour".match(/colou?r/g)); // color, colour
// * === “zero or more” ===  {0,}
console.log("100 10 1".match(/\d0*/g)); // 100, 10, 1

//                                  *
// *** Task 09.1 ***
//
// Create a regexp to find ellipsis: 3 (or more?) dots in a row.
//

console.log(". .. ....... Hello!... How goes?.....".match(/\.{3,}/g)); //['.......', '...', '.....']

//                                  *
// *** Task 09.2 ***
//
// Create a regexp to search HTML-colors written as
// #ABCDEF: first # and then 6 hexadecimal characters.
//

const color =
  "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

console.log(color.match(/#[a-f0-9]{6}\b/gi)); // ['#121212', '#AA00ef']
console.log(color.match(/#[a-f0-9]{6}/gi)); //  ['#121212', '#AA00ef', '#123456']

//                               ** * **
//                              [N E X T]

console.log("====== 10. Greedy and lazy quantifiers ======");

//                                  *
// *** Task 10.1 ***
//
// alert( "123 456".match(/\d+? \d+?/g) ); // ?
//

console.log("123 456".match(/\d+? \d+?/g)); // ['123 4']
console.log("123 456".match(/\d+? \d+?\d/g)); // ['123 45']

//                                  *
// *** Task 10.2 ***
//
// Find all HTML comments in the text:
//

const htmlComments = `... <!-- My -- comment
 test --> ..  <!----> ..
`;

console.log(htmlComments.match(/<!--.*?-->/gs));
// ['\x3C!-- My -- comment\n test -->', '\x3C!---->']
// 0: "<!-- My -- comment\n test -->"
// 1: "<!---->"

//                                  *
// *** Task 10.3 ***
//
// find  HTML tags with their attributes.
//

const htmlTags = '<> <a href="/"> <input type="radio" checked> <b>';
console.log(htmlTags.match(/<.*?>/gs)); // ['<>', '<a href="/">', '<input type="radio" checked>', '<b>']

//                               ** * **
//                              [N E X T]

console.log("====== 11. Capturing groups ======");

//                                  *
// *** Task 11.1 ***
//
// Write a regexp that checks whether a string is MAC-address.
//

const reMacAddress = /^[0-9a-f]{2}(:[0-9a-f]{2}){5}$/i;

console.log(reMacAddress.test("01:32:54:67:89:AB")); // true
console.log(reMacAddress.test("0132546789AB")); // false
console.log(reMacAddress.test("01:32:54:67:89")); // false
console.log(reMacAddress.test("01:32:54:67:89:ZZ")); // false

//                                  *
// *** Task 11.2 ***
//
// Find color in the format #abc or #abcdef
//

const findColorStr = "color: #3f3; background-color: #AA00ef; and: #abcd";

console.log(findColorStr.match(/#([a-f0-9]{3}){1,2}\b/gi)); // ["#3f3", "#AA00ef"];

//                                  *
// *** Task 11.3 ***
//
// Find all numbers
//

const allNumbers = "-1.5 0 2 -123.4.";

console.log(allNumbers.match(/-?\d+(\.\d+)?/g)); //  ['-1.5', '0', '2', '-123.4']

//                                  *
// *** Task 11.4 ***
//
// Parse an expression
// The operator is one of: "+", "-", "*" or "/".
// Create a function parse(expr) that takes an expression and returns an array of 3 items:
//

function parse(str) {
  return str.match(/(-?\d+(\.\d+)?)|[-+/*]/g);
}

console.log(parse("1.2 * 3.4")); // ['1.2', '*', '3.4']

let [a, op, b] = parse("1.2 * 3.4");
console.log(a); // 1.2
console.log(op); // *
console.log(b); // 3.4

console.log(parse("-2.5 / 0.5")); // ['-2.5', '/', '0.5']
console.log(parse("1.5 + 15")); // ['1.5', '+', '15']
console.log(parse("225.9 - 0.09")); // ['225.9', '-', '0.09']
console.log(parse("225.9 11 0.09")); // ['225.9', '11', '0.09'] [???] dont know how to fix

//                               ** * **
//                              [N E X T]

console.log("====== 12. Backreferences in pattern: N and k<name> ======");

//                               ** * **
//                              [N E X T]

console.log("====== 13. Alternation (OR) | ======");

let testStr = "First HTML appeared, then CSS, then JavaScript";
console.log(testStr.match(/html|php|css|java(script)?/gi)); // ['HTML', 'CSS', 'JavaScript']

console.log("00:00 10:10 23:59 25:99 1:2".match(/([01]\d|2[0-3]):[0-5]\d/g)); // 00:00,10:10,23:59"

//                                  *
// *** Task 13.1 ***
//
// Find programming languages
//

const devLang = "Java JavaScript PHP C++ C";

console.log(devLang.match(/Java(Script)?|C(\+\+)?|PHP/g)); // ['Java', 'JavaScript', 'PHP', 'C++', 'C']

//                                  *
// *** Task 13.2 ***
//
//Find bbtag pairs
//

let bbtagStr1 = "..[url]http://google.com[/url]..";
let bbtagStr2 = "..[url][b]http://google.com[/b][/url]..";

console.log(bbtagStr1.match(/\[(b|url|quote)].*?\[\/\1]/gs)); // ['[url]http://google.com[/url]']
console.log(bbtagStr2.match(/\[(b|url|quote)].*?\[\/\1]/gs)); // ['[url][b]http://google.com[/b][/url]']


//                                  *
// *** Task 13.3 *** 

//                                  *
// *** Task 13.4 ***

//                               ** * **
//                              [N E X T]

console.log("====== 14. Lookahead and lookbehind ======");

//                                  *
// *** Task 14.1 ***
//
//Find non-negative integers
//

const intStr = "0 12 -5 123 -18";

console.log( intStr.match(/(?<!-)\d+/g) ); // 0, 12, 123, 8

//                                  *
// *** Task 14.2 ***
//
// Insert After Head

let replaceStr = '...<body style="...">...';
console.log(replaceStr.replace(/<body.*?>/, '$&<h1>Hello</h1>')); //...<body style="..."><h1>Hello</h1>...



//                               ** * **
//                              [N E X T]

console.log("====== 15. Catastrophic backtracking ======");

//                               ** * **
//                              [N E X T]

console.log("====== 16. Sticky flag y, searching at position ======");

//                               ** * **
//                              [N E X T]

console.log("====== 17. Methods of RegExp and String ======");

//                               ** * **
//                               [E N D]
