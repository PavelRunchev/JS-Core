function extractText() {
    let items = $("#items")
        .find('li')
        .toArray()
        .map(li => li.textContent)
        .join(", ");
    $('#result').text(items);
}