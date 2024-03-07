function calculateMargin() {
    var marginAmount = document.getElementById('marginAmount').value;
    var daysHeld = document.getElementById('daysHeld').value;
    var interestRate = document.getElementById('interestRate').value;

    var dailyInterestRate = interestRate / 365 / 100; // Convert annual rate to daily
    var cost = marginAmount * dailyInterestRate * daysHeld;
    cost = cost.toFixed(2); // Round to two decimal places

    document.getElementById('result').innerHTML = `Total Margin Cost: $${cost}`;
}
