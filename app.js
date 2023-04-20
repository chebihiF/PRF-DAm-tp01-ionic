const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector("#expenses-list");

confirmBtn.addEventListener('click', () => {
    const entredReason = reasonInput.value;
    const entredAmount = amountInput.value;
    if(
        entredReason.trim().length <= 0 ||
        entredAmount <= 0 ||
        entredAmount.trim().length <= 0
    ){
        return ;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = entredReason + ': $' + entredAmount;
    expensesList.appendChild(newItem);
})
