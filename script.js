//Declaracion: numero1, numero2, tipo de la operacion, resultado de la operacion, historial de operaciones
let num1;
let num2;
let tipo;
let resultado;
let historial = [];


//Funcion principal de la calculadora, unicamente se ejecuta esta al iniciar el programa, dentro de esta se ejecutan todas las demas
function calculadora() {

    //Declaro una variable para controlar si se sigue haciendo operacion o si se para la ejecucion del programa
    let detener = true;

    do {

        //Pido por prompt un string con el tipo de la operacion, si no se introduce una opcion valida se vuelve a pedir un input
        do {
            tipo = prompt("Introduzca el tipo de operacion que desea realizar:\nSUMA: sum\nRESTA: res\nMULTIPLICACION: mult\nDIVISION: div\n RAIZ CUADRADA: raiz\n\n DETENER PROGRAMA: parar\n MOSTRAR HISTORIAL: historial");
        } while (!(tipo == "sum") && !(tipo == "res") && !(tipo == "mult") && !(tipo == "div") && !(tipo == "raiz") && !(tipo == "parar") && !(tipo == "historial"));


        //Si se va a realizar una raiz cuadrada solo pido un numero y ejecuto la funcion operacion()
        if (tipo == "raiz") {
        
            do {
                num1 = prompt("Introduzca el primer número");
            } while (isNaN(num1));

            operacion(num1,0,tipo);

            
        //Si se introduce "parar" cambio la variable de control para detener la ejecucion
        } else if (tipo == "parar") {
        
            detener = false;

        //Si se introduce "historial" se muestra el historial de operaciones con la funcion mostrarHistorial()
        } else if (tipo == "historial") {

            mostrarHistorial();

        //Si se introduce cualquier otra operacion pido dos numeros, valido el input con la funcion validarInput() y segun si es valida o no, ejecuto la funcion operacion() o muestro una alerta con un aviso
        } else {

            do {
                num1 = parseFloat(prompt("Introduzca el primer número"));
            } while (isNaN(num1));
        
            do {
                num2 = parseFloat(prompt("Introduzca el segundo número"));
            } while (isNaN(num2));

            //Si validarInput() es false, significa que se esta intentando hacer una division entre 0
            if (validarInput(tipo, num2) == false) {
                alert("NO SE PUEDE DIVIDIR ENTRE CERO, VUELVA A INTENTARLO");
            } else {
                operacion(num1,num2,tipo);
            }

        }

                
    } while (detener);
}

//La funcion operacion() llama a la funcion correspondiente segun el tipo de operacion introducida: sumar(), restar()...
function operacion(num1, num2, tipo) {

    switch (tipo) {
        case "sum":
            sumar(num1,num2);
            break;
    
        case "res":
            restar(num1,num2);
            break;

        case "mult":
            multiplicar(num1,num2);
            break;

        case "div":
            dividir(num1,num2);
            break;

        case "raiz":
            raiz(num1);
            break;

        default:

            console.log("Operacion no valida");

            break;
    }
}



//Las funciones del tipo de operacion, usan como argumentos los numeros introducidos y guardan en "resultado" el string de la operacion, lo guardan en el historial y lo muestran por consola 
function sumar(num1, num2) {
    resultado = `${num1} + ${num2} = ${num1 + num2}`;
    guardarEnHistorial(resultado);
    console.log(resultado);
}

function restar(num1, num2) {
    resultado = `${num1} - ${num2} = ${num1 - num2}`;
    guardarEnHistorial(resultado);
    console.log(resultado);
}

function multiplicar(num1, num2) {
    resultado = `${num1} * ${num2} = ${num1 * num2}`;
    guardarEnHistorial(resultado);
    console.log(resultado);
}

function dividir(num1, num2) {
    resultado = `${num1} / ${num2} = ${num1 / num2}`;
    guardarEnHistorial(resultado);
    console.log(resultado);
}

function raiz(num1) {
    resultado = `√${num1}  = ${Math.sqrt(num1)}`;
    guardarEnHistorial(resultado);
    console.log(resultado);
}



//Esta funcion es llamada dentro de cada tipo de operacion
function guardarEnHistorial(resultado) {
    historial.push(resultado);
}

//Esta funcion es llamada cuando el usuario introduce "historial" en el prompt, es un bucle que muestra todos los elementos del array "historial"
function mostrarHistorial() {
    
    for (const element of historial) {
        console.log(element);
    }
}


//Esta funcion devuelve false cuando se intenta dividir un numero entre 0 y true de lo contrario. Es llamada despues de que se hayan pedido los dos numeros, para verificar la operacion
function validarInput(tipo, num2) {
    if (tipo == "div" && num2 == 0) {
        return false;
    } else {
        return true;
    }
}


//Ejecuto la funcion principal
calculadora();