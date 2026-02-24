function performOperation(){
    //Obtener la entrada del usuario desde los campos de entrada
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Verificar si las entradas son números válidos
    if (!isNaN(num1) && !isNaN(num2)){
       //Realiza la operación
       let result = multiply(num1, num2);
       
       //mostrar el resultado
       displayResult(result);
    }else{
        displayResult('por favor ingrese un numero valido');
    }
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