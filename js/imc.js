let sexo = prompt("Indique su sexo, use H para hombre y M para mujer.")
let altura = parseInt(prompt("Indique su altura en CM:", "")) / 100;
let peso = Number(prompt("Indique su peso:", "")); 
let imc = peso / (altura * altura);

switch (sexo) {
        case "m":
        if (imc < 20 ) {
            alert("Su IMC es de" +Math.round(imc)+ ". Su peso es inferior al normal.");
        }
        else if (imc >= 20 && imc < 24 ) {
            alert("Su IMC es "+Math.round(imc)+". Su peso es normal.");    
        }
        else if (imc >= 24 && imc < 29) {
            alert("Su IMC es " +Math.round(imc)+ ". Su peso es superior al normal.");
        } 
        else {
            alert("Su IMC es " +Math.round(imc)+ ". Su peso es excesivo" );
        }
break 
case "M":
    if (imc < 20 ) {
        alert("Su IMC es de" +Math.round(imc)+ ". Su peso es inferior al normal.");
    }
    else if (imc >= 20 && imc < 24 ) {
        alert("Su IMC es "+Math.round(imc)+". Su peso es normal.");    
    }
    else if (imc >= 24 && imc < 29) {
        alert("Su IMC es " +Math.round(imc)+ ". Su peso es superior al normal.");
    } 
    else {
        alert("Su IMC es " +Math.round(imc)+ ". Su peso es excesivo" );
    }
break
case "h":
    if (imc < 21 ) {
        alert("Su IMC es de" +Math.round(imc)+ ". Su peso es inferior al normal.");
    }
    else if (imc >= 21 && imc < 25 ) {
        alert("Su IMC es "+Math.round(imc)+". Su peso es normal.");    
    }
    else if (imc >= 25 && imc < 30) {
        alert("Su IMC es " +Math.round(imc)+ ". Su peso es superior al normal.");
    } 
    else {
        alert("Su IMC es " +Math.round(imc)+ ". Su peso es excesivo" );
    }
break
case "H":
    if (imc < 21 ) {
        alert("Su IMC es de" +Math.round(imc)+ ". Su peso es inferior al normal.");
    }
    else if (imc >= 21 && imc < 25 ) {
        alert("Su IMC es " +Math.round(imc)+ ". Su peso es normal.");    
    }
    else if (imc >= 25 && imc < 30) {
        alert("Su IMC es " +Math.round(imc)+ ". Su peso es superior al normal.");
    } 
    else {
        alert("Su IMC es " +Math.round(imc)+ ". Su peso es excesivo" );
    }
break
default:
    alert("No hemos podidos calcular su IMC, favor de verificar los datos ingresados");

}

