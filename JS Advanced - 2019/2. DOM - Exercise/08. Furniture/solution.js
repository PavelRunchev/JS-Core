function solve() {
  let table = document.querySelector('.table tbody');
  let output = document.querySelectorAll('#exercise textarea')[1];
  // Input is added to furniture list!
  document.querySelector('#exercise button').addEventListener('click', generate);
  // Output is show to bought furniture!
  document.querySelectorAll('#exercise button')[1].addEventListener('click', buy);

  function generate() {
    let input = document.querySelector('#exercise textarea');
    if(input.value === '') return;

    const furniture = Array.from(JSON.parse(input.value));
    for (let obj of furniture) {
      addFurniture(obj['name'], obj['img'], obj['price'], obj['decFactor']);
    }

    undisabledFurniture();
  }

  function undisabledFurniture() {
    for (const f of table.querySelectorAll('tr')) {
      let checkbox = f.querySelector('tr td input');
      if(checkbox.disabled) { checkbox.disabled = false; }
    }
  }

  function addFurniture(name, image, price, decFactor) {
    let tr = document.createElement('tr');

    //image
    let tdImg = createTd();
    let img = document.createElement('img');
    img.src = image;
    appendElement(tr, tdImg, img);

    //name
    let tdName = createTd();
    let nameP = createP();
    nameP.textContent = name;
    appendElement(tr, tdName, nameP);
    
    //price
    let tdPrice = createTd();
    let priceP = createP();
    priceP.textContent = price;
    appendElement(tr, tdPrice, priceP);

    //decFactor
    let tdFactor = createTd();
    let factor = createP();
    factor.textContent = decFactor;
    appendElement(tr, tdFactor, factor);

    //checkbox
    let tdCheckbox = createTd();
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    appendElement(tr, tdCheckbox, checkbox);

    table.appendChild(tr);

    function appendElement(par, td, chi) {
      par.appendChild(td);
      td.appendChild(chi);
    }

    function createTd() {
      return document.createElement('td');
    }

    function createP() {
      return document.createElement('p');
    }
  }

  function buy() {
    output.textContent = '';

    let boughtFurnitureName = [];
    let totalPrice = 0;
    let totalDecorationFactor = 0;
    let countChecked = 0;

    let allFurniture = table.querySelectorAll('tr');
    for (let f of allFurniture) {
      let checkbox = f.querySelector('td input');

      if(checkbox.checked) {
        let name = f.querySelectorAll('td p')[0].textContent;
        let price = Number(f.querySelectorAll('td p')[1].textContent);
        let decFac = Number(f.querySelectorAll('td p')[2].textContent);
        boughtFurnitureName.push(name);
        totalPrice += price;
        totalDecorationFactor += decFac;
        countChecked++;
      }
    }

    if(boughtFurnitureName.length > 0) {
      output.textContent += `Bought furniture: ${boughtFurnitureName.join(', ')}\n`;
      output.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
      output.textContent += `Average decoration factor: ${totalDecorationFactor / countChecked}`;
    }
  }
}