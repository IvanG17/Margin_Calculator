function openCalculator(evt, calculatorName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(calculatorName).style.display = "block";
    evt.currentTarget.className += " active";
}

function calculateMargin() {
    var marginAmount = document.getElementById('marginAmount').value;
    var daysHeld = document.getElementById('daysHeld').value;
    var interestRate = document.getElementById('interestRate').value;
    var dailyInterestRate = interestRate / 365 / 100; // Convert annual rate to daily
    var cost = marginAmount * dailyInterestRate * daysHeld;
    document.getElementById('result').innerHTML = `Total Margin Cost: $${cost.toFixed(2)}`;
}

function calculateCoveredCall() {
    var priceBoughtAt = document.getElementById('priceBoughtAt').value;
    var strikePrice = document.getElementById('strikePrice').value;
    var premium = document.getElementById('premium').value;
    var maxProfit = (parseFloat(strikePrice) - parseFloat(priceBoughtAt) + parseFloat(premium)).toFixed(2);
    var priceReducedTo = (parseFloat(priceBoughtAt) - parseFloat(premium)).toFixed(2);
    document.getElementById('coveredCallResult').innerHTML = `Max Profit: $${maxProfit*100}<br>Price Reduced To (if below strike): $${priceReducedTo}`;
}

function calculatePoorMansCoveredCall() {
    var longCallCost = document.getElementById('longCallCost').value; // Cost of the long-term ITM call option
    var strikePrice = document.getElementById('strikePrice').value; // Strike price of the short-term OTM call option sold
    var premium = document.getElementById('premium').value; // Premium received for selling the short-term call option
    var currentPrice = document.getElementById('currentPrice').value; // Current price of the underlying stock

    // Calculate the net cost of entering the PMCC position
    var netCost = parseFloat(longCallCost) - parseFloat(premium);
    document.getElementById('pmccCost').innerHTML = `Net Cost of Position: $${netCost.toFixed(2)}`;

    // Calculate maximum profit scenario (if the stock price is at or above the strike price at expiration)
    var maxProfit;
    if (parseFloat(currentPrice) > parseFloat(strikePrice)) {
        maxProfit = (parseFloat(strikePrice) - parseFloat(longCallCost) + parseFloat(premium)).toFixed(2);
    } else {
        // If the current price is below the strike, max profit is just the premium received minus the cost difference
        maxProfit = parseFloat(premium) - (parseFloat(longCallCost) - parseFloat(currentPrice)).toFixed(2);
    }

    var breakeven = (parseFloat(longCallCost) - parseFloat(premium)).toFixed(2);

    // Update the page with the PMCC results
    document.getElementById('pmccResult').innerHTML = `Net Cost of Position: $${netCost}<br>Maximum Profit: $${maxProfit*100}<br>Breakeven Price: $${breakeven}`;
}

// Open the Margin Calculator tab by default
document.getElementById("defaultOpen").click();
