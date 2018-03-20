function bugTracker() {
    return (() => {
        "use strict";
        let id = 0;
        let container = [];
        let selector = undefined;

        let report = function (author, description, reproducible, severity) {
            container[id] = {
                ID: id,
                author: author,
                description: description,
                reproducible: reproducible,
                severity: severity,
                status: "Open"
            };
            id++;

            if(selector !== undefined){
                appendSelector();
            }
        };
        
        let setStatus = function (id, newStatus) {
            container[id].status = newStatus;

            if(selector !== undefined){
                appendSelector();
            }
        };
        
        let remove = function (id) {
            container = container.filter(elem => elem.ID !== id);

            if(selector !== undefined){
                appendSelector();
            }
        };
        
        let sort = function (method) {
            switch (method){
                case "ID": container = container.sort((a, b) => a.ID - b.ID); break;
                case "severity": container = container.sort((a, b) => a.severity - b.severity); break;
                case "author": container = container.sort((a,b) => a.author.localeCompare(b.author)); break;
            }

            if(selector !== undefined){
                appendSelector();
            }
        };

        let output = function (sel) {
            selector = sel;
        };

        let appendSelector = function () {
            $(selector).html("");
            for(let el of container){
                let divElement = ($('<div>')
                    .attr('id', `report_${el.ID}`)
                    .addClass('report')
                    .append($('<div>')
                        .addClass('body')
                        .append($('<p>')
                            .text(`${el.description}`)))
                        .append($('<div>')
                            .addClass('title')
                            .append($('<span>')
                                .addClass('author')
                                .text(`Submitted by: ${el.author}`))
                            .append($('<span>')
                                .addClass('status')
                                .text(`${el.status} | ${el.severity}`))));
                $(selector).append(divElement);
            }
        };

        return {report, setStatus, remove, sort, output};
    })();
}

//input
let tracker = bugTracker();
tracker.output('#content');
tracker.report('guy', 'report content', true, 6);
tracker.report('second guy', 'report content 2', true, 3);
tracker.report('abv', 'report content 3', true, 4);
tracker.sort('severity');