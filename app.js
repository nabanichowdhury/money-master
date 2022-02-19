
document.getElementById("calculate-expenses").addEventListener("click",function(){
    const TotalmonthlyIncome =document.getElementById("monthly-income").value;
    // const foodError=document.getElementById("error-food");
    // const foodValid=document.getElementById("valid-food");
    const foodCost=document.getElementById("food-cost").value;
    const rentCost=document.getElementById("rent-cost").value;
    const clothesCost=document.getElementById("clothes-cost").value;
    if(foodCost<0||clothesCost<0||rentCost<0){
        alert('Enter positive number');
        return
    }
    if(isNaN(foodCost)||isNaN(rentCost)||isNaN(clothesCost)){
        alert('Please enter avalid number')
        return
    }
    
    const sum=parseFloat(foodCost)+parseFloat(rentCost)+parseFloat(clothesCost);
    const totalExpenses=document.getElementById("total-expenses")
   
    const balance=document.getElementById("total-balance");
    if(TotalmonthlyIncome<sum){
        alert("monthly income is less then expenses")
    }
   
    
    if(foodCost>0||clothesCost>0||rentCost>0){
        totalExpenses.innerText=sum;
        balance.innerText=parseFloat(TotalmonthlyIncome)-sum;
        return
    }
    
  
    document.getElementById("rent-cost").value="";
    document.getElementById("clothes-cost").value="";
    document.getElementById("food-cost").value="";
    document.getElementById("monthly-income").value="";
    
})
document.getElementById("save-button").addEventListener("click",function(){
    const saveValue=document.getElementById("save").value;
    const saveValueFloat=parseFloat(saveValue);
    const savings=document.getElementById("savings");
    const remainingBalance=document.getElementById("remaining-balance");
    const balance=document.getElementById("total-balance");
    savings.innerText=parseFloat(balance.innerText)*(saveValueFloat/100);
    remainingBalance.innerText=parseFloat(balance.innerText)-savings.innerText


})


