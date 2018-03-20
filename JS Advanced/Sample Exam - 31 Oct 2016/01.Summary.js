function genereteSummary(selector) {
    $(selector).on('click', function () {
        let summaryText = $('#content strong').text();

        let summary = $('<div>').attr('id', 'summary');
        let heading = $('<h2>').text('Summary');
        summary.append(heading);
        let paragraph = $('<p>').text(summaryText);
        summary.append(paragraph);

        let parent = $('#content').parent();
        parent.append(summary);
    });
}