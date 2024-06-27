function countAllFromTown(regNumbers, townCode) {
    // Split the input string into an array of registration numbers
    var regNumbersArray = regNumbers.split(',');

    // Initialize a counter for registration numbers from the specified town
    var count = 0;

    // Iterate through each registration number in the array
    for (var i = 0; i < regNumbersArray.length; i++) {
        var regNumber = regNumbersArray[i].trim(); // Trim any extra whitespace
        if (regNumber.startsWith(townCode)) {
            count++; // Increment the counter if the registration number starts with the specified town code
        }
    }

    return count;
}
