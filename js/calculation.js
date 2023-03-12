function updateProductInput(product,isIncreasing) {
    var productInput = document.getElementById( product +"Quantity");
    var productNumber = productInput.value;

    if(isIncreasing){
        productNumber = parseInt(productNumber) + 1;
    }
    else{
        productNumber = parseInt(productNumber) - 1;
    }
    
    productInput.value = productNumber;
    
    var watchTotalPrice = 500 * parseFloat(document.getElementById("watchQuantity").value);
    console.log(watchTotalPrice);
    var strapTotalPrice = 20 * parseFloat(document.getElementById("strapQuantity").value);
    var subTotal = watchTotalPrice+strapTotalPrice;
    var tax = subTotal / 10;
    var inTotal = subTotal+tax;
    document.getElementById("subTotal-amount").innerHTML=subTotal;
    document.getElementById("tax-amount").innerHTML = tax;
    document.getElementById("inTotal-amount").innerHTML = inTotal;
}


document.getElementById("watchPlusBtn").addEventListener("click", function(){
    updateProductInput("watch",true)
})

document.getElementById("watchMinusBtn").addEventListener("click", function () {
    updateProductInput("watch", false)
})

// Strap calculation

document.getElementById("strapPlusBtn").addEventListener("click", function () {
    updateProductInput("strap",true)
})

document.getElementById("strapMinusBtn").addEventListener("click", function () {
    updateProductInput("strap",false)    
})

document.getElementById("checkoutBtn").addEventListener("click",function(){
    window.location.href="checkout.html";
});