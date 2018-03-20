function listBuilder(selector) {

    return {
        createNewList: function () {
            $(selector).empty();
            let ul = $('<ul></ul>');
            $(selector).append(ul);
        },

        addItem: function(text) {
            let li = $('<li>')
                .text(text)
                .append($('<button>Up</button>').click(this.moveUp))
                .append($('<button>Down</button>').on('click', this.moveDown));

            //$(selector).find('ul') is same! different syntax
            $(selector + ' ul').append(li);
        },

        moveUp: function() {
            let moveLiUp = $(this).parent();
            moveLiUp.insertBefore(moveLiUp.prev());
        },

        moveDown: function() {
            let moveLiDown = $(this).parent();
            moveLiDown.insertAfter(moveLiDown.next());
        }
    }
}



