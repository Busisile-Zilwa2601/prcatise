// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
var billTypeTextElem = document.querySelector('.billTypeText');
var callTotalOne = document.querySelector('.callTotalOne');
var smsTotalOne = document.querySelector('.smsTotalOne');
var totalOne = document.querySelector('.totalOne');
var red = document.querySelector('.red');
var totalBill = 0;
var callTotal = 0;
var smsTotal = 0;
function textBillTotal(){
  var billTypeEntered = (billTypeTextElem.value).trim();
  if(billTypeEntered === 'call'){
    callTotal += 2.75;
  }
  else if(billTypeEntered === 'sms'){
    smsTotal += 0.75;
  }
  totalBill = (callTotal+smsTotal).toFixed(2);
  callTotalOne.innerHTML = callTotal.toFixed(2);
  smsTotalOne.innerHTML = smsTotal.toFixed(2);
  if(totalBill >= 50){
    red.classList.add('danger');
    totalOne.innerHTML = totalBill;
  }
  else if(totalBill >= 30){
    red.classList.add('warning');
    totalOne.innerHTML = totalBill;
  }
  totalOne.innerHTML = totalBill;
}
var textBillAddBtn = document.querySelector(".addToBillBtn");
textBillAddBtn.addEventListener('click', textBillTotal);
