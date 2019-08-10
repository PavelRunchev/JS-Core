function bugTracker() {
    return (() => {
        let id = 0;
        let container = [];
        let selector = undefined;

        let report = function(author, description, reproducible, severity) {
            container[id] = { ID: id, author, description, reproducible, severity, status: 'Open'};
            id++;

            if(selector !== undefined)
                appendSelector();
        }

        let setStatus = function(id, newStatus) {
            container[id].status = newStatus;

            if(selector !== undefined)
            appendSelector();
        }

        let remove = function (id) {
            container = container.filter(el => el.ID !== id);

            if(selector !== undefined)
            appendSelector();
        }

        let sort = function (method) {
            console.log(container);
            container = container.sort((a, b) => {
                if(method === 'author')
                    return a[method].localeCompare(b[method]);

                return +a[method] - +b[method];
            });

            if(selector !== undefined)
            appendSelector();
        }

        let output = function(sel) { selector = sel; }
        
        let appendSelector = function() {
            let content = document.querySelector(selector);
            content.innerHTML = '';

            for(let el of container) {
                let divElement = document.createElement('div');
                divElement.className = 'report';
                divElement.id = `report_${el.ID}`;

                let divBodyElement = document.createElement('div');
                divBodyElement.className = 'body';
                divElement.appendChild(divBodyElement);
                let paragraph = document.createElement('p');
                paragraph.textContent = el.description;
                divBodyElement.appendChild(paragraph);

                let divTitle = document.createElement('div');
                divTitle.className = 'title';
                let spanAuthor = document.createElement('span');
                spanAuthor.className = 'author';
                spanAuthor.textContent = `Submitted by: ${el.author}`;
                let spanStatus = document.createElement('span');
                spanStatus.className = 'status';
                spanStatus.textContent = `${el.status} | ${el.severity}`;

                divTitle.appendChild(spanAuthor);
                divTitle.appendChild(spanStatus);
                divElement.appendChild(divTitle);
                
                content.appendChild(divElement);
            }
        }

        return { report, setStatus , remove, sort, output };
    })();
}

let tracker = bugTracker();
tracker.output('#content');
tracker.report('guy', 'report content', true, 6);
tracker.report('second guy', 'report content 2', true, 3);
tracker.report('abv', 'report content 3', true, 4);
tracker.sort('ID');