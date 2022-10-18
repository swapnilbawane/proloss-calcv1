let initialPrice = document.querySelector("#initial-price");
let quantityStocks = document.querySelector("#quantity"); 
let currentPrice = document.querySelector("#current-price");

let btnCalculate = document.querySelector("#btn-calc");
let outputMessage = document.querySelector("#output-message"); 


function showError() {
    outputMessage.style.display = "block";
    outputMessage.innerText = "Hey you did not enter the input correctly. Please enter and then submit."; 
    console.log("here.");
} 


function calcStocks () {
 if( initialPrice.value && quantityStocks.value && currentPrice.value ) 
 { 

    if ( initialPrice.value > 0 && quantityStocks.value > 0) 
      { 


        if(initialPrice.value < currentPrice.value)
            { 
                var profit = currentPrice.value*quantityStocks.value - initialPrice.value*quantityStocks.value;
 
                var profitperc =  profit / ( initialPrice.value*quantityStocks.value)  * 100;
                var profitpercFixed = profitperc.toFixed(2); 
   
                outputMessage.style.display = "block";
                outputMessage.innerText = `Oh great. The profit is of Rs ${profit} and the your profit percentage is ${profitpercFixed}%`; 
    
            }

    else if(initialPrice.value > currentPrice.value)
    {
            var loss = initialPrice.value*quantityStocks.value - currentPrice.value*quantityStocks.value;

            var lossperc = ( loss / (initialPrice.value*quantityStocks.value)) * 100; 
            var losspercFixed = lossperc.toFixed(2);

            outputMessage.style.display = "block";
            outputMessage.innerText = `Oh no. The loss is of Rs ${loss} and your loss percentage is ${losspercFixed}%`; 
            outputMessage.style.background = "red";

    } 

    else 
    { 
            outputMessage.style.display = "block";
            outputMessage.innerText = "Uh oh. The stock price is the same. There is no profit or loss for you."
    }   
 
     } 

    else 
    {
       outputMessage.style.display = "block";
       outputMessage.innerText = "Oh no. You have entered either initial price or stock quantity as zero or less than zero. Please enter correctly to get your results.";  
    }
 }

 else 
 showError();

}

btnCalculate.addEventListener("click",calcStocks);