
const prompt = require('prompt-sync')();
let gradosCelsius ;

do {
    let grados = prompt(" Ingresa la temperatura en grados Celsius ")
     gradosCelsius = parseFloat(grados);
    
    if(gradosCelsius || gradosCelsius === 0) {
    let  k = 273.15;
    let Kelvin = gradosCelsius +  k ;
    let  Fahrenheit = (gradosCelsius * 1.8) + 32 ;
    console.log("=========== Datos convertidos:==========")
    console.log(" Grados Kelvin:" + Kelvin);
    console.log(" Grados Fahrenheit:" + Fahrenheit);
    console.log("========================================")
    break; 
    } 
        console.log("Ingresa un valor válido");
    
}while(true)