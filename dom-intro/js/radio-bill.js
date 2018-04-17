// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var smsTotal = 0;
var callTotal= 0;
var totalBill = 0;

var callTotalTwo = document.querySelector('.callTotalTwo');
var smsTotalTwo = document.querySelector('.smsTotalTwo');
var totalTwo = document.querySelector('.totalTwo');
var orange = document.querySelector('.orange');
function radioBillBtn(){
  var checkedRandioBtn = document.querySelector('input[name = "billItemType"]:checked');
  if(checkedRandioBtn){
    var billItemType = checkedRandioBtn.value;
    if(billItemType === 'call'){
      callTotal += 2.75;
    }
    else if(billItemType === 'sms'){
      smsTotal += 0.75;
    }
  }
  totalBill = callTotal+smsTotal;
  callTotalTwo.innerHTML = callTotal.toFixed(2);
  smsTotalTwo.innerHTML = smsTotal.toFixed(2);
  if(totalBill >= 50){
    orange.classList.add('danger');
    totalTwo.innerHTML = totalBill.toFixed(2);
  }
  else if(totalBill >= 30){
    orange.classList.add('warning');
    totalTwo.innerHTML = totalBill.toFixed(2);
  }
  totalTwo.innerHTML = totalBill.toFixed(2);
}
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
radioBillAddBtn.addEventListener('click', radioBillBtn);
