function bugTracker() {
    let store = [];
    let id = 0;
    let selector = undefined;

    function report(author, description, reproducible, severity) {
        store.push({
            ID: id++,
            author,
            description,
            reproducible,
            severity,
            status: 'Open'
        });

        if(selector !== undefined) appendSelector();
    }

    function setStatus(id, newStatus) {
        store[id].status = newStatus;
        if(selector !== undefined) appendSelector();
    }

    function remove(id) {
        store = store.filter(r => r.ID !== id);
        if(selector !== undefined) appendSelector();
    }

    function sort(method) {
        store = store.sort((a, b) => {
            if(method === 'author')
                return a.author.localeCompare(b.author);
            return Number(a[method]) - Number(b[method]);
        });

        if(selector !== undefined) appendSelector();
    }

    function output(sel) {
        selector = sel;
    }

    function appendSelector() {
        let content = document.querySelector(selector);
        content.innerHTML = '';
        store.forEach(r => {
            let divReport = createElement('div', '', 'report');
            divReport.id = `report_${r.ID}`;

            let divBody = createElement('div', '', 'body');
            divBody.appendChild(createElement('p', r.description));
            divReport.appendChild(divBody);

            let divTitle = createElement('div', '', 'title');
            divTitle.appendChild(createElement('span', `Submited by: ${r.author}`, 'author'));
            divTitle.appendChild(createElement('div', `${r.status} | ${r.severity}`, 'status'));
            divReport.appendChild(divTitle);

            content.appendChild(divReport);
        });
    }

    function createElement(type, content, className) {
        let typeElement = document.createElement(`${type}`);
        typeElement.textContent = content;
        typeElement.className = className;
        return typeElement;
    }

    return { 
        report, 
        setStatus,
        remove,
        sort,
        output
    };
}