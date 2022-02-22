// document.getElementById('generate-pin').addEventListener('click', function(){
    
// });

function generatePin(){
    const pinInput = document.getElementById('pin-input');
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4)
    {
        pinInput.value = pin;
        return pin;
    }
    else{
        return generatePin();
    }
}

// calculator 
document.getElementById('key-pad').addEventListener('click', function(event){
   const number = event.target.innerText; 
   const typedNumbers = document.getElementById('typed-numbers');
   if(isNaN(number)){
        if(number == 'C'){
            typedNumbers.value = '';
        }
   }
   else{
        const prevNumber = typedNumbers.value;
        const newNumber = prevNumber + number;
        typedNumbers.value = newNumber;
   }
   
});

function verifyPin(){
    const typedNumbers = document.getElementById('typed-numbers').value;
    const pinValue = document.getElementById('pin-input').value;
    const successMsg = document.getElementById('notify-success');
    const failedMsg = document.getElementById('notify-failed');
    const blankMsg = document.getElementById('notify-blank');
    if(pinValue == '' && typedNumbers == '')
    {   
        blankMsg.style.display = 'block';
        failedMsg.style.display = 'none';
        successMsg.style.display = 'none';
    }
    else if(pinValue == typedNumbers){
        successMsg.style.display = 'block';
        failedMsg.style.display = 'none';
        blankMsg.style.display = 'none';
    }
    else{
        failedMsg.style.display = 'block';
        successMsg.style.display = 'none';
        blankMsg.style.display = 'none';
    }
}