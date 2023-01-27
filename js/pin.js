function getPin() {
    const pin = genaratePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

function genaratePin() {
    const randomNumber = Math.round(Math.random() * 10000);
    return randomNumber;

}

function setElementById(elementId, value) {
    const element = document.getElementById(elementId);
    element.value = value;
}

document.getElementById('generate').addEventListener('click', function () {
    const pin = getPin();

    setElementById('display-pin', pin);

})

document.getElementById('calculator').addEventListener('click', function (event) {
    const numbers = event.target.innerText;
    const displayTypedNumber = document.getElementById('typed-number');
    const previousTypedNumber = displayTypedNumber.value;
    if (isNaN(numbers)) {
        if (numbers === 'C') {
            displayTypedNumber.value = '';
        } else if (numbers === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remaining = digits.join('');
            displayTypedNumber.value = remaining;


        }
    } else {
        const newTypedNumber = previousTypedNumber + numbers;
        displayTypedNumber.value = newTypedNumber;
    }

})

document.getElementById('verify').addEventListener('click', function () {

    const displayPin = document.getElementById('display-pin');
    const currenPin = displayPin.value;

    const displayTypedNumber = document.getElementById('typed-number');
    const typedNumber = displayTypedNumber.value;



    const correctPin = document.getElementById('correct-pin');
    const wrongPin = document.getElementById('wrong-pin');

    if (currenPin === typedNumber) {
        correctPin.style.display = 'block';
        wrongPin.style.display = 'none';


    } else {
        wrongPin.style.display = 'block';
        correctPin.style.display = 'none';
    }
})