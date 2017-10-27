


function pushNumber(e){
  console.log(e.target.value);  
  var val = getCurrentValue();
  val = val += e.target.value;
  document.getElementById('display-current').value = val;
}

var papa = document.querySelector('.buttons-grid');
papa.addEventListener('click',pushNumber, false);

function getCurrentValue(){
  return document.getElementById('display-current').value;  
}

