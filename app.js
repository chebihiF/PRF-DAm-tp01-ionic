const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");
const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses =  0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

confirmBtn.addEventListener('click', () => {
    const entredReason = reasonInput.value;
    const entredAmount = amountInput.value;
    if(
        entredReason.trim().length <= 0 ||
        entredAmount <= 0 ||
        entredAmount.trim().length <= 0
    ){
        alertCtrl.create({
            message: 'Please enter a valid reason and amount !',
            header: 'Invalid inputs',
            buttons: ['Okay']
        }).then(alertElement => {alertElement.present();});
        return ;
    }
    const newItem = document.createElement('ion-item');
    
    const deleteBtn = document.createElement('ion-button');
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute('slot','end');
    deleteBtn.setAttribute('color','danger')

    newItem.textContent = entredReason + ': $' + entredAmount;
    newItem.appendChild(deleteBtn);
    expensesList.appendChild(newItem);

    deleteBtn.addEventListener('click', () => {
        expensesList.removeChild(newItem);
    })

    totalExpenses+= +entredAmount ;
    totalExpensesOutput.textContent = totalExpenses
    clear();
})

cancelBtn.addEventListener('click', clear)