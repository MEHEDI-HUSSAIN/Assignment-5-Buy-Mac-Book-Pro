// extra accessories costs

const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
//initial price
const macBookPrice = document.getElementById('best-cost');
// total price
const total = document.getElementById('total-price');
// promo input
const promoInput = document.getElementById('promo-input');
// final price after applying promo code
const finalPrice = document.getElementById('final-price');


//----------------------------------------------------------------------------------------------------------


// totalcost calculating function

function updateTotal() {
    const bestPrice = Number(macBookPrice.innerText);
    const extraMemoryCost = Number(memoryCost.innerText);
    const extraStorageCost = Number(storageCost.innerText);
    const extraDeliveryCost = Number(deliveryCost.innerText);
    const grandTotal = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;
    total.innerText = grandTotal;
    finalPrice.innerText = total.innerText;
}


//----------------------------------------------------------------------------------------------


// discount calculating function

function discount() {
    let discountPrice = Number(finalPrice.innerText);
    promoCode = promoInput.value;
    if (promoCode.toLowerCase() == 'stevekaku') {
        discountPrice = (total.innerText / 100) * 80;
        finalPrice.innerText = discountPrice.toFixed(2);

    }
    else {
        alert('Invalid Promo Code');
    }
    promoInput.value = '';
}


//-----------------------------------------------------------------------------------------------------------------


// EXTRA MEMORY COSTS

// memory-option-1 Click Event Handler
document.getElementById('memory-option-1').addEventListener('click', function () {
    memoryCost.innerText = '0';
    updateTotal();
});

// memory-option-2 Click Event Handler
document.getElementById('memory-option-2').addEventListener('click', function () {
    memoryCost.innerText = '180';
    updateTotal();
});


//=================================================================================================


// EXTRA STORAGE COSTS

// storage-option-1 Click Event Handler
document.getElementById('storage-option-1').addEventListener('click', function () {
    storageCost.innerText = '0';
    updateTotal();
});

// storage-option-2 Click Event Handler
document.getElementById('storage-option-2').addEventListener('click', function () {
    storageCost.innerText = '100';
    updateTotal();
});

// storage-option-3 Click Event Handler
document.getElementById('storage-option-3').addEventListener('click', function () {
    storageCost.innerText = '180';
    updateTotal();
});


//================================================================================================


// DELIVERY COSTS

// delivery-option-1 Click Event Handler
document.getElementById('delivery-option-1').addEventListener('click', function () {
    deliveryCost.innerText = '0';
    updateTotal();
});

// delivery-option-2 Click Event Handler
document.getElementById('delivery-option-2').addEventListener('click', function () {
    deliveryCost.innerText = '20';
    updateTotal();
});

//===================================================================================

// PROMO CODE DISCOUNT BUTTON Click Event Handler
document.getElementById('promo-btn').addEventListener('click', function () {
    discount();
});