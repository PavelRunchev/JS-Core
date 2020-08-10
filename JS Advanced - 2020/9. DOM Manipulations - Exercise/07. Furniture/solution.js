function solve() {
    const buttons = document.querySelectorAll('#exercise button');
    buttons[0].addEventListener('click', generate);
    buttons[1].addEventListener('click', buy);
    let [furnitureList, boughtList] = document.querySelectorAll('#exercise textarea');

    function generate(e) {
        let furnituresArray = JSON.parse(furnitureList.value);
        for (let obj of furnituresArray) {
            document.querySelector('.table tbody').appendChild(createTr(obj.img, obj.name, Number(obj.price), Number(obj.decFactor)));
        }
    }

    function buy(e) {
        let table = document.querySelectorAll('.table tbody tr');
        let furnitureNameArray = [];
        let totalPrice = 0;
        let averageDecFactorArray = [];
        for (let tr of table) {
            let [img, name, price, decFactor, checkBox] = tr.querySelectorAll('td');
            let isCheck = checkBox.querySelector('input').checked;
            if(isCheck) {
                furnitureNameArray.push(name.querySelector('p').textContent);
                totalPrice += Number(price.querySelector('p').textContent);
                averageDecFactorArray.push(Number(decFactor.querySelector('p').textContent));
            }
        }

        const avgDecFactor = averageDecFactorArray.reduce((acc, curr) => acc + curr,0) / averageDecFactorArray.length;
        boughtList.value = `Bought furniture: ${furnitureNameArray.join(', ')}\n`;
        boughtList.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        boughtList.value += `Average decoration factor: ${avgDecFactor}`;
    }

    function createTr(img, name, price, decFactor) {
        let tr = document.createElement('tr');
        tr.appendChild(createTd('img', img));
        tr.appendChild(createTd('p', name));
        tr.appendChild(createTd('p', price));
        tr.appendChild(createTd('p', decFactor));
        tr.appendChild(createTd('input', ''));
        return tr;
    }

    function createTd(innerElement, content) {
        let td = document.createElement('td');
        let element = document.createElement(`${innerElement}`);
        if(innerElement === 'img')
            element.src = content;
        else if(innerElement === 'input')
            element.type = 'checkbox';
        else element.textContent = content;
        td.appendChild(element);

        return td;
    }
 
}