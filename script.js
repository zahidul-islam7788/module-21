// the 1st method of making shopping cart

// phone cart 
var phonePlusBtn = document.getElementById("phone-plusBtn");
phonePlusBtn.addEventListener('click',function(){

    const phoneQuantity = document.getElementById("phone-quantity").value;
    const phoneQuantityNumber = parseInt(phoneQuantity);
    const phoneNewQuantity  = phoneQuantityNumber + 1;
    document.getElementById("phone-quantity").value = phoneNewQuantity;

    const phoneCost = 1219;
    const phonePrice = document.getElementById("phone-price").innerText;
    const phonePriceNumber = parseInt(phonePrice);
    const totalPhonePrice = phoneNewQuantity * phoneCost;
    document.getElementById("phone-price").innerText = totalPhonePrice;

    const subtotalPrice = document.getElementById("subtotal-price").innerText;
    const subtotalNumber = parseInt(subtotalPrice);
    const subtotalCost = subtotalNumber + phoneCost;
    document.getElementById("subtotal-price").innerText = subtotalCost;

    const totalPrice = document.getElementById("total-price").innerText;
    const totalNumber = parseInt(totalPrice);
    const totalCost = totalNumber + phoneCost;
    document.getElementById("total-price").innerText = totalCost;
})


var phoneminusBtn = document.getElementById("phone-minusBtn");
phoneminusBtn.addEventListener('click',function(){

    const phoneQuantity = document.getElementById("phone-quantity").value;
    const phoneQuantityNumber = parseInt(phoneQuantity);
    const phoneNewQuantity  = phoneQuantityNumber - 1;
    document.getElementById("phone-quantity").value = phoneNewQuantity;

    const phoneCost = 1219;
    const phonePrice = document.getElementById("phone-price").innerText;
    const phonePriceNumber = parseInt(phonePrice);
    const totalPhonePrice = phoneNewQuantity * phoneCost;
    document.getElementById("phone-price").innerText = totalPhonePrice;

    const subtotalPrice = document.getElementById("subtotal-price").innerText;
    const subtotalNumber = parseInt(subtotalPrice);
    const subtotalCost = subtotalNumber - phoneCost;
    document.getElementById("subtotal-price").innerText = subtotalCost;

    const totalPrice = document.getElementById("total-price").innerText;
    const totalNumber = parseInt(totalPrice);
    const totalCost = totalNumber - phoneCost;
    document.getElementById("total-price").innerText = totalCost;
})



// case cart 

var casePlusBtn = document.getElementById("case-plusBtn");
casePlusBtn.addEventListener('click',function(){

    const caseQuantity = document.getElementById("case-quantity").value;
    const caseQuantityNumber = parseInt(caseQuantity);
    const caseNewQuantity  = caseQuantityNumber + 1;
    document.getElementById("case-quantity").value = caseNewQuantity;

    const caseCost = 59;
    const casePrice = document.getElementById("case-price").innerText;
    const casePriceNumber = parseInt(casePrice);
    const totalcasePrice = caseNewQuantity * caseCost;
    document.getElementById("case-price").innerText = totalcasePrice;

    const subtotalPrice = document.getElementById("subtotal-price").innerText;
    const subtotalNumber = parseInt(subtotalPrice);
    const subtotalCost = subtotalNumber + caseCost;
    document.getElementById("subtotal-price").innerText = subtotalCost;

    const totalPrice = document.getElementById("total-price").innerText;
    const totalNumber = parseInt(totalPrice);
    const totalCost = totalNumber + caseCost;
    document.getElementById("total-price").innerText = totalCost;
})

var caseminusBtn = document.getElementById("case-minusBtn");
caseminusBtn.addEventListener('click',function(){

    const caseQuantity = document.getElementById("case-quantity").value;
    const caseQuantityNumber = parseInt(caseQuantity);
    const caseNewQuantity  = caseQuantityNumber - 1;
    document.getElementById("case-quantity").value = caseNewQuantity;

    const caseCost = 59;
    const casePrice = document.getElementById("case-price").innerText;
    const casePriceNumber = parseInt(casePrice);
    const totalcasePrice = caseNewQuantity * caseCost;
    document.getElementById("case-price").innerText = totalcasePrice;

    const subtotalPrice = document.getElementById("subtotal-price").innerText;
    const subtotalNumber = parseInt(subtotalPrice);
    const subtotalCost = subtotalNumber - caseCost;
    document.getElementById("subtotal-price").innerText = subtotalCost;

    const totalPrice = document.getElementById("total-price").innerText;
    const totalNumber = parseInt(totalPrice);
    const totalCost = totalNumber - caseCost;
    document.getElementById("total-price").innerText = totalCost;
})