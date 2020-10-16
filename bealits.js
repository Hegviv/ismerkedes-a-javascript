"use strict";

// function valtoztat() {
//     let hatter = document.getElementById("hatter").value;
//     if (hatter =="kék") {
//     document.body.style.backgroundColor = "blue";
//     }
//     else if (hatter =="piros") {
//     document.body.style.backgroundColor = "red";
//     }
//     else if (hatter =="zöld") {
//     document.body.style.backgroundColor = "green";
//     }
// }

function valtoztat(){
    let piros = +document.getElementById("piros").value;
    let zold =  +document.getElementById("zold").value;
    let kek =  +document.getElementById("kek").value;

    let kever =(
        (0 <= piros && piros <= 255) &&
        (0 <= zold && zold <= 255) &&
        (0 <= kek && kek <= 255)
    );
    if (kever) {
        document.body.style.backgroundColor = `rgb(${piros}, ${zold}, ${kek})`;
    }
    else{
    window.alert("ilyen szín nem létezik!");
    }
}