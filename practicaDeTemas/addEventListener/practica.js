
        const input = document.getElementById('myInput');
        const output = document.getElementById('output');

        input.onkeydown = function (event){
            output.textContent = `precionaste la letra: ${event.key}`
        };


        // Get the button element
  const button = document.getElementById('myButton');
  // Add event listener for 'click' event
  button.addEventListener('click', handleButtonClick);
  // Function to handle button click
  function handleButtonClick() {
    console.log('Button clicked!');
  }

  document.getElementById('clickButton').addEventListener('click', function() {
    alert('Button clicked!');
  });

 const moveArea = document.getElementById('moveArea');
  moveArea.addEventListener('mousemove', function(event) {
    console.log(`Mouse coordinates - X: ${event.clientX}, Y: ${event.clientY}`);
  });


  const keyInput = document.getElementById('keyInput');
  keyInput.addEventListener('keydown', function() {
    console.log('Key pressed down!');
  });
  keyInput.addEventListener('keyup', function() {
    console.log('Key released!');
  });

  keyInput.addEventListener('keypress', function(){
    console.log('key pressed!')
  });




  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log('Form submitted!');
  });



  const textInput = document.getElementById('textInput');
  textInput.addEventListener('focus', function() {
    console.log('Input focused');
  });
  textInput.addEventListener('blur', function() {
    console.log('Input blurred');
  });



  /*cuaando un documento l algo pendiente ha terminado de cargar  */
    window.addEventListener('load', function() {
    console.log('Page and all resources loaded');
  });


  /*Comienza cuando el tamaño de la ventana del navegador cambia */
   window.addEventListener('resize', function() {
    console.log('Window resized');
  });


  window.addEventListener('scroll', function() {
    console.log('Document scrolled');
  });