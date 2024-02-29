function getFormatDateForNews(originalDate) {
    const [datePart, timePart] = originalDate.split(" ");
    const [year, month, day] = datePart.split("-");

    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    const monthIndex = parseInt(month, 10) - 1;
    const monthName = monthNames[monthIndex];


    return `${day} ${monthName}, ${year}`;
}

export default getFormatDateForNews