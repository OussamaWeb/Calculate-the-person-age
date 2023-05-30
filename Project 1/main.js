let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function calculateDate() {
    let date = new Date();
    let inputValue = new Date(document.querySelector('.date').value);
    let birthMonths, birthDate, birthYear;
    let birthDetails = {
        date: inputValue.getDate(),
        month: inputValue.getMonth() + 1,
        year: inputValue.getFullYear(),
    };
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1;
    let currentDate = date.getDate();
    checkYear(currentYear);
    if ( birthDetails.year > currentYear || (birthDetails.month > currentMonth && birthDetails.year == currentYear)
    || (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear) ) {
        alert("Not Born Yet")
    };

    birthYear = currentYear - birthDetails.year;
    if (currentMonth >= birthDetails.month) {
        birthMonths = currentMonth - birthDetails.month;
    } else {
        birthYear--;
        birthMonths = 12 + currentMonth - birthDetails.month;
    }
    if (currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date
    } else {
        birthMonths--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if (birthMonths < 0) {
            birthMonths = 11;
            birthYear--;
        }
    }
    document.querySelector('.years p').textContent = birthYear;
    document.querySelector('.months p').textContent = birthMonths;
    document.querySelector('.days p').textContent = birthDate;
}

function checkYear(year) {
    if (year % 4 == 0  || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    } else {
        months[1] = 28;
    }
};
