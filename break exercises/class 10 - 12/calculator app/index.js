const display = document.getElementById('display');

function toDisplay(clickedKeys) {
    display.value += clickedKeys;
}


function clearDisplay () {
    display.value = " "
}

function deleteDisplay() {
    display.value = display.value.slice (0 , -1)
}


function calculate() {
          try{
        display.value = eval(display.value)
         }

         catch(error) {
         display.value = "error"
         }
}