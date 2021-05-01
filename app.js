const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const addBtn = document.querySelector('#btn-add');

addBtn.addEventListener('click',()=>{
    const enterdReason = reasonInput.value;
    const  enterdAmount = amountInput.value;

    if(enterdReason.trim().length<=0 || enterdAmount<=0 || enterdAmount.trim().length<=0){
        return;
    }
    console.log(enterdReason,enterdAmount);
})
