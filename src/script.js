document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code goes here
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = "";
  function evaluateResult() {
   console.log('currentValue;',currentValue)
   const convertedValue = currentValue
   .replace("×","*")
   .replace("÷","/")
   .replace("%","*0.01")
   .replace("sin","math.sin")
   .replace("cos","math.cos")
   .replace('ln', 'math.ln')
   .replace('π',"math.PI");
   replace('log',"math.log")
   .replace('e',"math.e")
   .replace('tan','math.tan')
   .replace("√'",'math.sqrt')
}
  
  function evaluateResult() {
    const result = eval(currentValue);
   currentValue = result.toString();
   display.value = currentValue;

}

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {

        try{
         
         if ('value' == "AC") {
            currentValue= "";
            display.value=currentValue
          } else if ('value' == "=") {
             evaluateResult();
          }else {
             currentValue = value
             display.value = currentValue 
          }
        }catch (error) {
console.error(error);
currentValue= "ERROR"
display.value = currentValue
        }

            
      })
    }

});
