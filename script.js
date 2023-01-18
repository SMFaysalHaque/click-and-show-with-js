// 1. using function:
function buttonHandler(){
    const updateTextArea = document.getElementById('update-text-area');
    updateTextArea.innerText = "Set by using Function!!!"
}

// 2. direct way: [anonymous function]
document.getElementById('handle-click-event').addEventListener('click', function(){
    const updateTextArea = document.getElementById('update-text-area');
    updateTextArea.innerText = "Set by using addEventListener directly!!!"
})

// 3. direct way: update input-text.
document.getElementById('update-text-button').addEventListener('click', function(){
    const textField = document.getElementById('text-field');
    const updateTextArea = document.getElementById('update-text-area');
    updateTextArea.innerText = textField.value; //input এর ভিতরের লিখা দেখাতে হলে, input এর ভিতরের ভ্যালুটাকে নিতে হবে। যেমনঃ textField.value;
    textField.value = ''; //এটার জন্য ইনপুটের ভিতরের কোনো VALUE থাকবে না। 
})