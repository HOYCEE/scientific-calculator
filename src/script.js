document.addEventListener('DOMContentLoaded', function () {
    // Your JavaScript code goes here
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = "";
  
  
  function evaluateResult() {
    const result = eval(currentValue);
   currentValue = result.toString();
   display.value = currentValue;
}

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {

            if (value == "AC") {
               currentValue= "";
               display.value=currentValue
             } else if (value == "=") {
                evaluateResult();
             }else {
                currentValue += Value
                display.value = currentValue
             }
            })
    }

});
