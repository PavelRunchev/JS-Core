function bugTracker() {
    let id = 0;
    let allReports = new Map();
    let element = null;

    let module = {

        report: (author, description, isReproducible, severity) => {
            "use strict";
            allReports.set(id++, {
                author,
                description,
                isReproducible,
                severity,
                status: "Open"
            });
            module.output(element);
        },

        setStatus: (id, newStats) => {
            "use strict";
            allReports.get(id).status = newStats;
            module.output(element);
        },

        remove: (id) => {
            "use strict";
            allReports.delete(id);
            module.output(element);
        },

        sort: (criteria) => {
            "use strict";
            allReports = [...allReports].sort((a, b) => {
                if(criteria === 'ID'){
                    return a[0] - b[0];
                }else if(criteria === 'severity'){
                    return a[1].severity - b[1].severity;
                }else if(criteria === 'author'){
                    return a[1][criteria].localeCompare(b[1][criteria]);
                }
            });
            module.output(element);
        },

        output: (selector) => {
            "use strict";
            element = $(selector);
            $(selector).empty();
            for(let [id, report] of allReports){
                let reportDiv = ($('<div>')
                    .attr('id', `report_${id}`)
                    .addClass('report')
                    .append($('<div>')
                        .addClass('body')
                        .append($(`<p>${report.description}</p>`)))
                    .append($('<div>')
                        .addClass('title')
                        .append($('<span>')
                            .addClass('author')
                            .text(`Submitted by: ${report.author}`))
                        .append($(`<span>`)
                            .addClass('status')
                            .text(`${report.status} | ${report.severity}`))));
                $(selector).append(reportDiv);

            }

        }
    };

    return module;
}