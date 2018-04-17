
//link the function to a click event on the calculate button
function totalPhoneBill(myStr){
const perCall = 2.75;
const perSMS = 0.75;
var countCalls = 0;
var countSMS = 0;
var totalBill = new Number(0.0);
var myCalls = [];
var mySMS = [];
console.log(myStr);
var myArr = myStr.split(',');
if(!myArr){
  var p = document.createElement('p');
  var node = document.createTextNode('incorrect string added. please use \", \" to sperate text');
  p.appendChild(node);
  var div = document.getElementById("test");
  var txtarea = document.querySelector('.billString');
  div.insertBefore(p,txtarea);
}
else{
  for(var i = 0; i<myArr.length;i++){
    var item = myArr[i].trim();
    if(item ==='call'){
      myCalls.push(item);
    }
    else if(item === 'sms')
        mySMS.push(item);
    else{
      var p = document.createElement('p');
      var node = document.createTextNode('Plese write call and sms only');
      p.appendChild(node);
      var div = document.getElementById("test");
      var txtarea = document.querySelector('.billString');
      div.insertBefore(p,txtarea);
    }
  }
  countCalls =(myCalls.length)*perCall;
  countSMS = (mySMS.length)*perSMS;
  totalBill = countCalls+countSMS;
  return (totalBill.toFixed(2));
  }
}

  var billStringElement = document.querySelector('.billString');
  var span = document.querySelector('.total');
  function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringElement.value;
    //round to two decimals
    var roundedBillTotal = totalPhoneBill(billString);
    var billTotalElement = document.querySelector('.billTotal');
    if(roundedBillTotal<20.00){
      billTotalElement.style.color = 'black';
      span.style.color = 'black';
    }
    if(roundedBillTotal > 20.00){
      billTotalElement.style.color = 'orange';
      span.style.color = 'orange';

    }
    if(roundedBillTotal > 30.00){
      billTotalElement.style.color = 'red';
      span.style.color = 'red';
    }
    billTotalElement.innerHTML = roundedBillTotal;
  }
    var calculateBtn = document.querySelector(".calculateBtn");
    calculateBtn.addEventListener('click', calculateBtnClicked);
