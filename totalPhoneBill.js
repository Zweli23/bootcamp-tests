function totalPhoneBill(billItems) {
    var billItemsArray = billItems.split(','); // Split the input string into an array of bill items
    var totalCost = 0;

    for (var i = 0; i < billItemsArray.length; i++) {
        var item = billItemsArray[i].trim(); // Trim any extra whitespace
        if (item === 'call') {
            totalCost += 2.75; // Cost for each call
        } else if (item === 'sms') {
            totalCost += 0.65; // Cost for each SMS
        }
    }

    // Format the total cost as 'R' + totalCost.toFixed(2)
    return 'R' + totalCost.toFixed(2);
}
