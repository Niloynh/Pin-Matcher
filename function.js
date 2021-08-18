function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event){
    const number = event.target.innerText;
    const typeNumber = document.getElementById('typed-number');
if(isNaN(number)){
    if(number == 'C'){
        typeNumber.value = '';
    }
}
else{
    const preNumber = typeNumber.value;
    const newNumber = preNumber + number;
    typeNumber.value = newNumber;
}

});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-number').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');
    if(pin == typedNumbers){
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
    }
    else{
        notifySuccess.style.display = 'none';
        notifyFail.style.display = 'block';
    }
}