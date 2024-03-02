let lifes=6;
let palabra="CHINA";
let diccionario=["APPLE"];
palabra=diccionario[2];
let max=diccionario.length -1;
let indice=Math.floor(Math.random() *max + 1);

palabra = diccionario[indice];

const API = "https://random-word-api.herokuapp.com/word?length=5&lang=es";

fetch(API).then((response) => {
  response.json().then((body)=>{
  palabra = body[0].toUpperCase();  
  console.log("La palabra oculta es: ",palabra);
  console.log("by:TKACZUK,PABLO SEBASTIÁN")
});
});


function palabraAleatoria(diccionario) {
   let max = diccionario.length - 1;
   let indice = Math.floor(Math.random() * max + 1);
   palabra=indice;
   
   return diccionario[indice];
}

const button = document.getElementById("guess-button").addEventListener("click",intentar);
const boton= document.getElementById("guess-button");
const input=document.getElementById("guess-input");
const valor= input.value;


function intentar(){
    const INTENTO=leerIntento();
    if (INTENTO===palabra){
        terminar("<h1>GANASTE!😎</h1>")
        return 
    }
    
    const row=document.createElement("div");
    row.className="row"
    const GRID=document.getElementById("grid");


    for (let i in palabra){
        const SPAN=document.createElement("span");
        SPAN.className="letter";
        if (INTENTO[i]===palabra[i]){
            SPAN.innerHTML=INTENTO[i];
            SPAN.style.backgroundColor="#79b851"
        }else if(palabra.includes(INTENTO[i])){
            SPAN.innerHTML=INTENTO[i];
            SPAN.style.backgroundColor="#f3c237"
        }else {SPAN.innerHTML=INTENTO[i];
            
            SPAN.style.backgroundColor="#a4aec4"
    }
    row.appendChild(SPAN)
    }
    GRID.appendChild(row)
    lifes--
    if(!lifes){
        terminar("<h1>PERDISTE AMIGO 😔!</h1>");
    }
}


function leerIntento(){
    let intento= document.getElementById("guess-input");
    intento= intento.value;
    intento= intento.toUpperCase();
    return intento
}

function terminar(mensaje){
    const INPUT=document.getElementById("guess-input");
    INPUT.disabled=true;
    boton.disabled=true;
    let contenedor=document.getElementById("guesses");
    contenedor.innerHTML=mensaje;
}





