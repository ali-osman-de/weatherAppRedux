function getFormatDate(dateString, language) {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = date.toLocaleDateString(language, options);
    return formattedDate;
}

export default getFormatDate