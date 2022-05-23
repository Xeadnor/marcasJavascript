function comparar(a,b) {
    return a - b
}

function comparar2(a,b) {
   return a.localeCompare(b)
}

function funcion1(array) {

    let posicion = parseInt(prompt("Introduzca la posicion que se eliminara"))
    let dias = array.splice(posicion,1)
    return dias
}

function rellenar(array) {

    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() *(25 -14)+14)
        
    }
    return array;   
}

function repetidos(array1,array2) {
    let valoresEliminados = 0
    let arrayTotal = []
    for (let i = 0; i < array1.length; i++) {
        array1[i] = Math.floor(Math.random() *11)
        array2[i] = Math.floor(Math.random() *11)
        
    }
    arrayTotal = array1.concat(array2);

    for (let i = 0; i < arrayTotal.length; i++) {

        for (let j = i+1; j < arrayTotal.length; j++) {
           
            if(arrayTotal[i] == arrayTotal[j]){
            arrayTotal.splice(j,1)
            valoresEliminados++
            }
            
        }
        
    }
    console.log("valores eliminados = " + valoresEliminados)
    return arrayTotal
}


function ordenacion() {
    let array = []
    let vocales = 0;
    let vocal = ""
    for (let i = 0; i < 5; i++) {
        vocal = prompt("Introduzca un nombre")
        array.push(vocal.toUpperCase())

        if(vocal.charAt(1) === "A" ||vocal.charAt(1) === "E" ||vocal.charAt(1) === "I" ||vocal.charAt(1) === "O" || vocal.charAt(1) === "U"){
            vocales++
        }
    }

    array.sort(comparar2)
    

    console.log(vocales)
    return array
    
}