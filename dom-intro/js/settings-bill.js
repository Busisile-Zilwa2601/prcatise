var callAfterSetting = 0;
var smsAfterSetting = 0;
var warningLevelAfterSetting = 0;
var criticalLevelAfterSetting = 0;
var callAllTotal = 0;
var smsAllTotal = 0;
var totalAllBill = 0;
var stopper ;
//The Radio button part:

var totalBillAfterSetting;

//var lastTD = document.querySelector('td:last-child');
var callTotalSettings = document.querySelector('.callTotalSettings');
var smsTotalSettings = document.querySelector('.smsTotalSettings');
var totalSettings = document.querySelector('.totalSettings');

function radioBillBtnSetting(){
  var checkedRandioBtnSet = document.querySelector('input[class = "billItemTypeWithSettings"]:checked');
  if(checkedRandioBtnSet){
    var itemType = checkedRandioBtnSet.value;
    if(itemType === 'call'){
      callAllTotal += callAfterSetting;
      totalAllBill += callAfterSetting;
      //stopper =totalAllBill;
      }
    else if(itemType === 'sms'){
      smsAllTotal += smsAfterSetting;
      totalAllBill += smsAfterSetting;

      }
    }
  stopper = criticalLevelAfterSetting-totalAllBill;
  if(stopper <= 0){
      console.log('true');
      radioBillAddBtnSetting.removeEventListener('click', radioBillBtnSetting);
  }
  //totalAllBill = callAllTotal+smsAllTotal;
  callTotalSettings.innerHTML = callAllTotal.toFixed(2);
  smsTotalSettings.innerHTML = smsAllTotal.toFixed(2);
  totalSettings.innerHTML = totalAllBill.toFixed(2);
  if(totalAllBill<warningLevelAfterSetting){
    totalSettings.style.color = 'black';
  }
  else if(totalAllBill >= criticalLevelAfterSetting){
    console.log("true")
    totalSettings.style.color = 'red';
    //callAllTotal = 0;
    //smsAllTotal = 0;
  }
  else if(totalAllBill >= warningLevelAfterSetting){
    totalSettings.style.color = 'orange'
  }
  //totalSettings.innerHTML = totalAllBill.toFixed(2);
  //When an settings are updated, the value of stopper must be checked.
  //If the difference is more than zero, the radio button must be reactivated.
  var x = document.querySelector('.updateSettings');
  x.onclick =function(){
    stopper = criticalLevelAfterSetting;
    if(stopper - totalAllBill > 0){
      radioBillAddBtnSetting.addEventListener('click', radioBillBtnSetting);
    }
  }
}
var radioBillAddBtnSetting = document.getElementById("radioBillAddBtnSetting");
console.log(radioBillAddBtnSetting);
radioBillAddBtnSetting.addEventListener('click', radioBillBtnSetting);

//Updating the settings
function theUpDateSettings(){
    var newCall = document.querySelector(".callCostSetting").value;
    var newSms = document.querySelector('.smsCostSetting').value;
    var newWarning = document.querySelector('.warningLevelSetting').value;
    var newCritical = document.querySelector('.criticalLevelSetting').value;
    var newTotal = document.querySelector('.totalSettings').value;

    callAfterSetting = parseFloat(newCall);
    smsAfterSetting = parseFloat(newSms);
    warningLevelAfterSetting = parseFloat(newWarning);
    criticalLevelAfterSetting = parseFloat(newCritical);
    stopper = criticalLevelAfterSetting;
}
console.log(theUpDateSettings());
var upDateSetBtn = document.querySelector('.updateSettings');
console.log(upDateSetBtn);
upDateSetBtn.addEventListener('click', theUpDateSettings);
