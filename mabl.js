// Return a random date of birth for someone between the ages of 30 and 65 in the format MM/DD/YYYY

function getRandomDateOfBirth() {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 65;
    const endYear = currentYear - 30;

    // Generate random year between startYear and endYear
    const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;

    // Generate random month between 1 and 12
    const month = Math.floor(Math.random() * 12) + 1;

    // Generate random day based on the month
    const day = Math.floor(Math.random() * new Date(year, month, 0).getDate()) + 1;

    // Format month and day to MM/DD/YYYY
    const formattedMonth = month.toString().padStart(2, '0');
    const formattedDay = day.toString().padStart(2, '0');

    return `${formattedMonth}/${formattedDay}/${year}`;
}

console.log(getRandomDateOfBirth());