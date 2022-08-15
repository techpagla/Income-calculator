//Income calculator
const calculateBtn= document.getElementById('calculate-btn');
const savingBtn= document.getElementById('saving-btn');
const income= document.getElementById('income');
const food= document.getElementById('food');
const expenses= document.getElementById('expenses');
const rent= document.getElementById('rent');
const clothes= document.getElementById('clothes');
const totallExpenses= document.getElementById('totall-expenses');
const balance= document.getElementById('balance');
const saveInput= document.getElementById('save-input');
const SavingAmount= document.getElementById('saving-amount');
const span =document.createElement('span');
span.setAttribute('id', 'not-valid')
const parent = document.getElementById('expensesConatiner');
//event linstener on calculate button 
calculateBtn.addEventListener('click', function(){
   const incomeNum = parseFloat(income.value); 
   const foodNum = parseFloat(food.value); 
   const rentNum = parseFloat(rent.value); 
   const clothesNum = parseFloat(clothes.value); 
   let sumOfExpenses;
   if(!isNaN(foodNum && rentNum && clothesNum) == true){
    if(foodNum>0 && rentNum>0 && clothesNum) {
        sumOfExpenses = foodNum + rentNum + clothesNum;
    }
    }
     
  

   //sum of expenses
   if(!isNaN(sumOfExpenses)==true && sumOfExpenses>0 && sumOfExpenses< incomeNum) {
    totallExpenses.innerText = sumOfExpenses.toFixed(2);
    
        let remainingBalance = incomeNum - sumOfExpenses;
        balance.innerText = remainingBalance.toFixed(2);
        document.getElementById('not-valid').innerText = '';
  
    

    //   document.getElementsByTagName('span').style.color ='red';
   }
   else {
    console.log('Not a number');
      parent.appendChild(span).innerText='pls eneter coreect information';
      totallExpenses.innerText = '0';
      balance.innerText = incomeNum;

   }
  
});
var saving;
function savingCal(){
    
    saving = (parseFloat(balance.innerText) * parseFloat(saveInput.value)) / 100;
    // saving = parseFloat(balance.innerText) - saving;
    if(saving > (parseFloat(balance.innerText)) ){
        console.log('Not enough balance for saving');
    }
    else {
        SavingAmount.innerText = saving.toFixed(2);
    }

   

}

//calculation of saving 
savingBtn.addEventListener('click', function(){
    savingCal();
})





//calculte function

//input function
// document.getElementById('income').addEventListener('keyup', function(event){
//     var input = parseFloat(event.target.value);
//     if(isNaN(input)){
//       var p =document.createElement('p');
//       var parent = document.getElementById('incomeBalanceContainer');
//       parent.appendChild(p).innerText='pls eneter a number';
      
     
      
//     }
//     else{
//         console.log(event.target.value);
//         parent.removeChild(p);
//     }
// })