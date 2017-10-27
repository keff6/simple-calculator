(function (doc) {
  
  //Constants
  const UI_displayCurrent = doc.getElementById('display-result'),
        UI_displaySubtotal = doc.getElementById('display-subtotal'),
        UI_numbersGrid = doc.querySelector('.numbers-grid'),
        UI_operandsGrid = doc.querySelector('.operands-grid'),
        UI_btnReset = doc.getElementById("btn-reset");  
  
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
    
  function cleanDisplayValues(){    
    UI_displaySubtotal.value = "";
    UI_displayCurrent.value = "";
  }  
  
  //Event Listeners
  UI_numbersGrid.addEventListener('click', appendNumber, false);
  UI_operandsGrid.addEventListener('click', appendOperand, false);
  UI_btnReset.addEventListener('click', cleanDisplayValues, false);

})(document);
