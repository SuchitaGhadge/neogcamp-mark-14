var buyPrice = document.querySelector("#buy-price");
var sellPrice = document.querySelector("#sell-price");
var stockQuantity = document.querySelector("#stock-quantity");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box")

submitBtn.addEventListener('click', function calculateProfitLoss(initial, final, quantity){
    initial = Number(buyPrice.value) ;
    final = Number(sellPrice.value);
    quantity = Number(stockQuantity.value);
    
    if(initial>0 && final>0 && quantity>0){
        if(initial>final){
            lossCalculation(initial, final, quantity)
        }else if(initial<final){
            profitCalculation(initial, final, quantity)
        }else{
            outputBox.innerText = "NO PROFIT NO LOSS"
        }
    }else{
        outputBox.innerText = "Please enter all valid values"
    }
})
// loss calculation
function lossCalculation(initial, final, quantity){
    var loss = (initial - final)*quantity;
    var percentLoss = ((loss/(initial*quantity))*100).toFixed(2);
    outputBox.innerText = `Opps.. your total loss is ${loss} and your percent loss is ${percentLoss}%. Trade responsibly🥺`
    outputBox.style.color = "red"
}

// profit calculation
// function profitCalculation(initial, final, quantity){
//     var profit = (final-initial)*quantity;
//     var percentProfit = ((profit/(initial*quantity))*100).toFixed(2);
//     outputBox.innerText = `Yay! Your total profit is ${profit} and your percent gain is ${percentProfit}% 🤑 Keep it up👏`
//     outputBox.style.color = "green"
// }

const profitCalculation = (initial, final, quantity) => {
    const profit  = (final - initial)*quantity;
    const percentProfit = ((profit/(initial*quantity))*100).toFixed(2);
    outputBox.innerText = `Yay! Your total profit is ${profit} and your percent gain is ${percentProfit}% 🤑 Keep it up👏`
    outputBox.style.color = "green"
}