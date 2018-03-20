class TitleBar{
    constructor(title){
        this.title = title;
        this.links = [];
    }

    addLink(href, name){
        let link = $('<a>')
            .addClass('menu-link')
            .attr('href', href)
            .text(name);
        this.links.push(link);
    }

    appendTo(selector){
        let header = $('<header>').addClass('header');
        let headerRow = $('<div>').addClass('header-row');
        let button = $('<a>')
            .addClass('button')
            .html('&#9776;')
            .click(() => $('div.drawer').toggle());
        let span = $('<span>').addClass('title').text(this.title);
        let drawer = $('<div>').addClass('drawer');
        let menu = $('<nav>').addClass('menu');

        //appending elements
        this.links.forEach(link => menu.append(link));
        headerRow.append(button);
        headerRow.append(span);
        drawer.append(menu);
        header.append(headerRow);
        header.append(drawer);
        $(selector).append(header);
    }
}