document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawFieldElement = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawFieldElement.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawFieldElement.value = "";

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    
    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    if(newWithdrawAmount > previousBalanceTotal ){
        alert("There is Balance to withdraw") 
        return;
    }
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    
    const newBalanceTotal = previousBalanceTotal - currentWithdrawTotal;
    balanceTotalElement.innerText = newBalanceTotal;
})