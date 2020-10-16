"use strict";

/*
let szam = 125;
// hiba kereső felület
console.log(szam);
// dom (document Object model) segitsegevel
document.getElementById("pelda").innerText = szam;
// BOM (Browser Object model) segitsegevel
// modulális ablakban (modal window) jelenik meg
window.alert(szam);
*/
//  window.confirm modulális függvény, boolean fügvénnyel tér vissza
/*let beenged = window.confirm("elmultál már 18 éves?");

if (!beenged ){
    document.getElementById("pelda").innerText = "Nem mehet be, mert kicsi vagy";

}
else{
document.getElementById("pelda").innerText = "Eleg nagy vagy, bemehetsz";

}
*/
//  window.prompt modulális függvény, szöveg értékkel tér vissza
//  let beenged = window.prompt("hány éves vagy?, 18");
// let kor = Number (!beenged);

// let kor = parseInt(beenged);
// let kor = + beenged;

// if (kor < 18) {
//     document.getElementById("pelda").innerText = "Nem mehet be, mert kicsi vagy";
    
// }
// else {
//     document.getElementById("pelda").innerText = "Eleg nagy vagy, bemehetsz";
// 

let maiNap = window.prompt("hét hanyadik napja van?", 1);
let nap = +maiNap;
if (nap == 1){
    document.getElementById("pelda").innerText = "a mai nap hétfő";
}
else if (nap == 2){
    document.getElementById("pelda").innerText = "a mai nap kedd";
}
else if (nap == 3){
    document.getElementById("pelda").innerText = "a mai nap szerda";
}
else if (nap == 4){
    document.getElementById("pelda").innerText = "a mai nap csütörtök";
}
else if (nap == 5){
    document.getElementById("pelda").innerText = "a mai nap péntek";
}
else if (nap == 6){
    document.getElementById("pelda").innerText = "a mai nap szombat";
}
else if (nap == 7){
    document.getElementById("pelda").innerText = "a mai nap vasarnap";
}
else {
    document.getElementById("pelda").innerText = "nincs ilyen nap a héten";
}
