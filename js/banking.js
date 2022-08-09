function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmount = parseFloat(inputText);
    //clearing input field
    inputField.value = '';
    return inputAmount;
}

function updateTotalField(totalFieldId,inputAmount){
    const displayElement = document.getElementById(totalFieldId);
    const displayText = displayElement.innerText;
    const displayAmount = parseFloat(displayText);
    const depositTotal = inputAmount + displayAmount;
    //showing the result in display
    displayElement.innerText = depositTotal;
}

function getCurrentBalance(){
    const balanceDisplay = document.getElementById('balance-display');
    const balanceDisplayText = balanceDisplay.innerText;
    const balanceDisplayAmount = parseFloat(balanceDisplayText);
    return balanceDisplayAmount;
}

function updateAccount(depositInputAmount, isAdd){
    const balanceDisplay = document.getElementById('balance-display');
    const balanceDisplayAmount = getCurrentBalance();
    if(isAdd == true){
        balanceDisplay.innerText = depositInputAmount + balanceDisplayAmount;
    }
    else(
        balanceDisplay.innerText = balanceDisplayAmount - depositInputAmount
    )
}
//Deposit
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInputAmount = getInputValue('deposit-input');
    if(depositInputAmount>0){
        updateTotalField('deposit-display',depositInputAmount);
        updateAccount(depositInputAmount, true);
    }
});

//withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInputAmount = getInputValue('withdraw-input');
    if(withdrawInputAmount>0 && withdrawInputAmount<getCurrentBalance()){
        updateTotalField('withdraw-display', withdrawInputAmount);
        updateAccount(withdrawInputAmount, false);
    }
});