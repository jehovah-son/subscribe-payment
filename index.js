const check = document.getElementById("check");
const visaButton = document.getElementById("visaButton");
const masterCardButton = document.getElementById("masterCardButton");
const payPAlButton = document.getElementById("payPAlButton");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const Submit = document.getElementById("Submit");


Submit.onclick = function(){
    if(check.checked){
        subResult.textContent = 'you are subscribe'
        console.log(subResult)
    } else {
        subResult.textContent = 'you are not subscribe'
        console.log(subResult)
    }

    // payment
    if(visaButton.checked){
        paymentResult.textContent = 'you paying with your Visa card'
        console.log(paymentResult)
    }else if(masterCardButton.checked){
        paymentResult.textContent = 'you paying with your Master card'
        console.log(paymentResult)
    }else if (payPAlButton.checked){
        paymentResult.textContent = 'you paying with your Paypal'
        console.log(paymentResult)
    }else{
        paymentResult.textContent = 'select a payment method'
        console.log(paymentResult)
    }
}