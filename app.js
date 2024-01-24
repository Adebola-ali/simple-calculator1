   const display = document.getElementById("display"); // target the display element


   function appendToDisplay(input) {
    display.value += input;    

   }


   function clearDisplay() {
    display.value = "";

   }
   function calculate(){
    try{
      display.value = eval(display.value);
    }
    catch(error){
      display.value = 'Error';
    }
   }

