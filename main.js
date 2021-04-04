// tady je místo pro náš program

let zprava = document.getElementById("zprava");
let kostka = document.getElementById("kostka");


let cislo = Math.floor(Math.random() * 6) + 1;

function GenerujCislo (){
let cislo = Math.floor(Math.random() * 6) + 1;
    
    console.log(cislo);
 
    if (cislo ===6) {
    zprava.innerHTML = "Hodil/a jsi " + cislo + ". Výhra!";
    }
    else 
    zprava.innerHTML = "Smůla. Hodil/a jsi " + cislo + ". Házej znovu";

    kostka.src = "obrazky/" + cislo + ".png";
    }


