// Step-1: add event handler on Deposite Button
document.getElementById('btn-deposite').addEventListener('click', function () {
    // Step-2: Catch Input field of New Deposite amount
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    depositeField.value = '';
    
    // Step-3: Catch innertext Field of Total Deposite Field
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString)

    // Step-4: Set/Add New Deposite amount with Previous Diposited amount
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;
    depositeTotalElement.innerText = currentDepositeTotal;

    // Step-5: Set Curretn Balance
    const balanceTotalElement = document.getElementById('balance-total');
    const currentBalanceTotalString = balanceTotalElement.innerText;
    const currentBalanceTotal = parseFloat(currentBalanceTotalString);
    
    // Set Balance Total
    balanceTotalElement.innerText = currentBalanceTotal + currentDepositeTotal;


})