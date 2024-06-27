function isWeekday(day) {
    // Define an array of weekend days
    var weekendDays = ['Saturday', 'Sunday'];

    // Check if the provided day is not in the weekendDays array
    return !weekendDays.includes(day);
}
