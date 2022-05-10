
function comprobarDato(dato) {

    if (dato == "true" | dato == "false") {
        dato = dato + " Es booleano";
    } else if (!isNaN(dato)) {
        dato = dato + " Es un numero"
    } else {
        dato = dato + " Es una cadena"
    }
    return dato;
}

//------

function suma(v1, v2) {
    return v1 + v2;
}

//------
function mayor(v1, v2) {
    return v1 > v2 ? v1 : v2
}

//------
function parImpar(v1) {
    return v1 % 2 == 0 ? "par" : "impar"
}

//------
function menor(cantidad) {
    let Numeros = new Array(cantidad);

    for (let index = 0; index < Numeros.length; index++) {
        Numeros[index] = (parseInt(prompt("Introduce valor")))
    }
    let menor = Numeros[0]
    for (let index = 0; index < Numeros.length; index++) {
        let valor = Numeros[index]

        if (menor > valor) {
            menor = valor;
        }
    }
    return menor;
}


//------

function central(cantidad, mitad) {
    let Numeros = new Array(cantidad);

    for (let index = 0; index < Numeros.length; index++) {
        Numeros[index] = (parseInt(prompt("Introduce valor")))
    }
    let central = Numeros[mitad]

    return central;
}


    //------


    function ordenar(n){

    // opcion rapida con n.sort()

    for (let i = 0; i < n.length; i++) {
        for (let j = i + 1; j < n.length; j++) {
            if (n[i] > n[j]) {
                let auxiliar = n[i]
                n[i] = n[j]
                n[j] = auxiliar

            }

        }
    }
    return n;
}


 function media(n){
   let total = 0;
   for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i]
 }
    return (total/n.length)
}

function imc(estatura,peso){
let imc = peso/(estatura^2)
let resultado = "";

if (imc < 18.5){
    resultado = "Peso inferior al normal"
}else if (imc >= 18.5 && imc <= 24.9) {
    resultado = "normal"
}
else if (imc >= 25 && imc <= 29.9) {
    resultado = "Peso superior al normal"
}
else if (imc > 30) {
    resultado = "Obesidad"
}
return resultado;
}

function esBisiesto(año){
    let resultado = "";
    if ((año % 4 == 0) && ((año % 100 != 0) || (año % 400 == 0)))
	resultado = "Es bisiesto"
else
	resultado = "No es bisiesto"

    return resultado
}

function calculadora(x,operador,y){
    let resultado = 0;
    switch (operador) {
        case "*":
            resultado = x * y
            break;
        case "+":
            resultado = x + y
            break;   
        case "-":
            resultado = x - y
            break;
        case "/":
            resultado = x / y
            break; 
    }
    return resultado;

}

function triangulo(l1,l2,l3) {
    let resultado = "";
    if (l1 == l2 && l1 == l3 && l2==l3){
        resultado = "Triangulo equilatero"
    }
    if (l1 == l3 && l2!=l3 | l1 == l2 && l1 != l3 | l1 != l2 && l2 == l3){
        resultado = "Triangulo isosceles"
    }
    if (l1 != l2 && l1 !=l3 && l2 != l3){
        resultado = "Triangulo escaleno"
    }

    // SIN TERMINAR
    if (l1 == l2 && l1 == l3 && l2==l3){
        resultado = "Triangulo equilatero"
    }
    if (l1 == l2 && l1 == l3 && l2==l3){
        resultado = "Triangulo equilatero"
    }




    return resultado
}