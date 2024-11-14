#Calculadora en JavaScript

Este proyecto es una calculadora interactiva en JavaScript que permite realizar operaciones aritméticas básicas, incluyendo suma, resta, multiplicación, división y cálculo de raíz cuadrada. También tiene una función de historial para registrar y mostrar las operaciones realizadas durante la ejecución.


##Características

###Operaciones soportadas:
  - Suma (sum)
  - Resta (res)
  - Multiplicación (mult)
  - División (div)
  - Raíz cuadrada (raiz)


  Control de errores: Verifica que los números ingresados sean válidos y evita divisiones por cero.
  
  Historial de operaciones: Guarda todas las operaciones realizadas durante la ejecución y permite al usuario visualizar el historial.

  
##Requisitos
  Este programa está escrito en JavaScript y utiliza prompt() para recibir entradas, por lo que se puede ejecutar en un navegador que soporte JavaScript. No requiere dependencias adicionales.

##Uso

  Ejecutar el programa: Al iniciar, la función principal calculadora() se ejecuta automáticamente.
  
  Seleccionar una operación: El usuario debe ingresar el tipo de operación que desea realizar:
    sum para suma
    res para resta
    mult para multiplicación
    div para división
    raiz para raíz cuadrada
    historial para mostrar el historial de operaciones
    parar para detener la ejecución del programa
    
  Ingresar los números: Dependiendo de la operación seleccionada, el usuario ingresará uno o dos números.
  Ver resultados: Los resultados se muestran en la consola del navegador. Si se selecciona historial, se muestra el historial de todas las operaciones realizadas.

  
##Funciones principales
  - calculadora(): Función principal que controla el flujo de la aplicación.
  - operacion(num1, num2, tipo): Llama a la función correspondiente para realizar la operación seleccionada.
  - sumar(num1, num2), restar(num1, num2), multiplicar(num1, num2), dividir(num1, num2), raiz(num1): Realizan la operación aritmética especificada.
  - guardarEnHistorial(resultado): Guarda el resultado de una operación en el historial.
  - mostrarHistorial(): Muestra todas las operaciones almacenadas en el historial.
  - validarInput(tipo, num2): Verifica si una división es válida (evita divisiones entre cero).


##Flujo del programa

  1. Se inicia la ejecución de la función calculadora(), que solicita al usuario una operación.
  
  2. Según el tipo de operación:
  - Si es sum, res, mult o div, se solicitan dos números.
  - Si es raiz, solo se solicita un número.
  
  3. La función operacion() llama a la función correspondiente para ejecutar la operación y registrar el resultado en el historial.
  4. El usuario puede ver el historial introduciendo historial o detener el programa con parar.
