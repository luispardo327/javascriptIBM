let currentValue ;
let result;
function performOperation(){
    //Obtener la entrada del usuario desde los campos de entrada
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Verificar si las entradas son números válidos
    if (!isNaN(num1) && !isNaN(num2)){
       //Realiza la operación

       switch (currentValue) {
  case ('addition'):
    result = addition(num1, num2);
    break;
  case ('subtraction'):
    result = subtraction(num1, num2);
    break;
   case ('split'):
    if (num2 ===0){
        result = 'error no se puede dividir por cero';
    }else{
        result = split(num1, num2);
    }
    break;
    case ('multiply'):
    result = multiply(num1, num2);
    break;
  default:
    displayResult('por favor ingrese una operacion');
}      //mostrar el resultado
       displayResult(result);
    }else{
        displayResult('por favor ingrese un numero valido');
    }
    return;
}

function multiply(a, b){
  // Introduzca una declaración de depuración para pausar la ejecución
  
  debugger;

  //multiplicar los numeros
  return a * b;
}

function displayResult(result){
    // Mostrar el resultado en el elemento de párrafo
    const resultElement = document.getElementById('result');
    resultElement.textContent = `El Resultado es: ${result}`;
}

function addition (a,b){
    debugger;

    return a +b;
}

function  subtraction(a,b){
    debugger;

    return a - b;
}

function split (a,b){
    debugger;

    return a / b;
}