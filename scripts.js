// alert("ya estoy cargado")

/*

lineas comentadas
lineas comentadas

*/

let edad = 10
var saludo = "hola"
let esActivo = true

const DATABASE = "mi-base-de-datos"
const PASSWORD_BD = "DSFDG"

// Operadores
// + , -, /, *, %, ==, ===, ||, &&, !, !=, !==   

//Estructuras de control
a = 1
b = 1
c = 3

if(a == b){

    if(a > c)
    {

    }
}
else{

}

let valorDado = 5


//verificar si el valor del dado es menos a 3, menor a 5 o si es mayor a 4
switch (valorDado) {
    case 1:
        console.log("es menor a 3")
        break
    case 2 :
        console.log("es menor a 5")
        break
    case 3 :
        console.log("es mayor a 4")
        break
    default:
        break
}

let i = 0

//crea array cualquiera de equipos de futbol ingleses
let equipos = ["Manchester City", "Manchester United", "Arsenal", "Chelsea", "Liverpool"]


while ( i <= equipos.length)  {
    console.log("equipo: " + equipos[i])

  i++
}

//for (let index = 0; index < array.length; index++) {
    //const element = array[index];
    
//}

let nombre = "mario"

function saludar(name){
    console.log("hola soy "+name)
}



let frutas = ["manzana", "pera"]
//array asociativo
let frutasAsociativas = {
    "nombre1": "manzana",
    "nombre2": "pera",
    "nombre3": "naranja"
}
//.push() //agrega un elemento al final del array
// .pop() elimina el ultijmo
// .shift agrega elemento al inicio
// .unshift elimina el primer elemento
// .slice() devuelve una copia de una parte del array
// .splice() cambia el contenido de un array eliminando o reemplazando elementos existentes y/o agregando nuevos elementos en su lugar
// .indexOf() devuelve el primer índice en el que se encuentra un elemento dado en el array, o -1 si no está presente


//objeto

let persona = {
    nombre: "Juan",
    edad: 30,
    sexo: "M",
    estaInscrito: true
}

//crear un objeto persona con nombre, edad y sexo, y una funcion que imprima en consola si la persona es mayor de edad o no
//si es hombre, debe agregarlo a un array de hombres, si es mujer a un array de mujeres
//crear otra función que reciba M o F e itere sobre el array correspondiente y muestre un texto con console.log "nombre xxxxxx"