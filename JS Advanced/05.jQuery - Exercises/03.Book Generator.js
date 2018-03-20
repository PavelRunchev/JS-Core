function createBook(selector, title, author, isbn) {
    let bookGenerator = (function () {
        let id = 1;
        return function (selector, title, author, isbn) {
            let container = $(selector);
            let bookContainer = $('<div>');
            bookContainer.attr("id", `book${id}`);
            bookContainer.css("border", 'none');
            $(`<p class="title">${title}</p>`).appendTo(bookContainer);
            $(`<p class="author">${author}</p>`).appendTo(bookContainer);
            $(`<p class="isbn">${isbn}</p>`).appendTo(bookContainer);
            let selectBtn = $('<button>Select</button>');
            let deselectBtn = $('<button>Deselect</button>');
            selectBtn.on("click", () => bookContainer.css("border", "2px solid blue"));
            deselectBtn.on("click", () => bookContainer.css("border", "none"));
            selectBtn.appendTo(bookContainer);
            deselectBtn.appendTo(bookContainer);
            bookContainer.appendTo(container);

            id++;
        }
    }());

    bookGenerator(selector, title, author, isbn);
}
