//import { HolyLight } from '../skilltree-test.js'

console.log("--1--")
//var level = document.currentScript.getAttribute('lvl'); 

$localStorage.$sync()
var lvl = $localStorage.getItem('HolyLight');
console.log(lvl)


if(lvl == 1) {
    document.write(`
    <p>lvl1</p>
    `);
}
if(lvl == 2) {
    document.write(`
    <p>lvl2</p>
    `);
}
if(lvl == 3) {
    document.write(`
    <p>lvl3</p>
    `);
}
if(lvl == 4) {
    document.write(`
    <p>lvl4</p>
    `);
}
if(lvl == 5) {
    document.write(`
    <p>lvl5</p>
    `);
} 