const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const addBtn = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses');
const totalExpenses = document.querySelector('#total_expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalEx = 0;

const clear=()=>{
    reasonInput.value='';
    amountInput.value=''
}

addBtn.addEventListener('click',()=>{
    const enterdReason = reasonInput.value;
    const  enterdAmount = amountInput.value;

    if(enterdReason.trim().length<=0 || enterdAmount<=0 || enterdAmount.trim().length<=0){
        // alert('invalid values');
        alertCtrl.create({message:'please enter a valid amount and reason!',header:'invalid inputs',
        buttons:['Ok']
    }).then(alertElement=>{
        alertElement.present();
    });
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enterdReason + ':$' + enterdAmount;
    expensesList.appendChild(newItem);
    totalEx+= +enterdAmount;
    totalExpenses.textContent = totalEx;
    clear();
})

cancelBtn.addEventListener('click',clear)
