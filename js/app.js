console.log("Script added");
let totalCost=0;

// elements declaration 
const memoryField = document.getElementById('memory-cost');
const storageField = document.getElementById('storage-cost');
const deliveryField = document.getElementById('delivery-cost');
const bestPriceField = document.getElementById('best-price');
const totalField = document.getElementById('total');
const promoInputField = document.getElementById('code');
const finalCostField = document.getElementById('final-cost');
let iKnowPromo = false;

// Calculation after promo code application
function promo(){
    const inputCode = promoInputField.value;
    if(inputCode == 'stevekaku'){
        iKnowPromo = true;
        const discountedPrice = ((parseInt(totalField.innerText) * 20)/100);
        finalCostField.innerText = parseInt(totalField.innerText) - discountedPrice;
        promoInputField.value = '';
    }
    else{
        iKnowPromo = false;
        alert('Wrong Promo Code');
        promoInputField.value = '';
    }
}
// Calculate Total Function
function calculateTotal(){
    totalCost = parseInt(bestPriceField.innerText) + parseInt(memoryField.innerText) + parseInt(storageField.innerText) + parseInt(deliveryField.innerText);
    console.log(totalCost);
    totalField.innerText = totalCost;
    if(iKnowPromo == true){
        const discountedPrice = ((parseInt(totalField.innerText) * 20)/100);
        finalCostField.innerText = parseInt(totalField.innerText) - discountedPrice;
    }
    else{
        finalCostField.innerText = totalCost;
    }
}
//memory selection
document.getElementById('memory-button').addEventListener('click', function (event) {
    const number = event.target.innerText;
    if(event.target.innerText == '16GB unified memory'){
        memoryField.innerHTML = 180;
    }
    else{
        memoryField.innerHTML = 0;
    }

    calculateTotal();
});

//storage selection 
document.getElementById('storage-button').addEventListener('click', function (event) {
    const number2 = event.target.innerText;
    console.log(number2);
    if(event.target.innerText == '512GB SSD storage'){
        storageField.innerHTML = 100;
    }
    else if (event.target.innerText == '1TB SSD storage'){
        storageField.innerHTML = 180;
    }
    else{
        storageField.innerHTML = 0;
    }
    calculateTotal();
  
});
//delivery selection
document.getElementById('delivery-button').addEventListener('click', function (event) {
    const number3 = event.target.innerText;
    console.log(number3);

    if(event.target.innerText == 'Friday, August 21 Delivery $20'){
        deliveryField.innerHTML = 20;
    }
    else{
        deliveryField.innerHTML = 0;
    }
   calculateTotal();
});

