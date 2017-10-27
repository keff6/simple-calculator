(function (doc) {
  
  //Constants
  const UI_displayCurrent = doc.getElementById('display-current'),
        UI_displaySubtotal = doc.getElementById('display-subtotal'),
        UI_numbersGrid = doc.querySelector('.numbers-grid'),
        UI_operandsGrid = doc.querySelector('.operands-grid'),
        UI_btnReset = doc.getElementById("btn-reset");
  
  let result = 0;  
  
  // Numbers
  function appendNumber(e) {
    UI_displaySubtotal.value += e.target.value;
  }  
  
  // Operands
  function appendOperand(e){
    let operand = e.target.value;    
    
    if(operand === "="){
      getResult();
    }else{ 
      if(Number(UI_displayCurrent.value) !== 0){
        UI_displaySubtotal.value = UI_displayCurrent.value;
      }
      UI_displaySubtotal.value += operand;        
    }   
  }  
  
  // Functionality  
  function getResult(){
    try{
      UI_displayCurrent.value = math.eval(UI_displaySubtotal.value);
    }catch(error){      
      console.log("ERR " + error);
    }    
  }  
  
  function updateDisplay(){
    UI_displaySubtotal.value = operationString;
    UI_displayCurrent.value = result;
  }
  
  function cleanDisplayValues(){
    result =0;
    UI_displaySubtotal.value = result;
    UI_displayCurrent.value = 0;
  }  
  
  //Event Listeners
  UI_numbersGrid.addEventListener('click', appendNumber, false);
  UI_operandsGrid.addEventListener('click', appendOperand, false);
  UI_btnReset.addEventListener('click', cleanDisplayValues, false);

})(document);
