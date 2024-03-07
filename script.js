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

// Open the Margin Calculator tab by default
document.getElementById("defaultOpen").click();
