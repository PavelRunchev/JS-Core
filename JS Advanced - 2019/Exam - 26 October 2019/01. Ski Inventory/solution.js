function solve() {
   let products = document.querySelector('#products > ul');
   let myProducts = document.querySelector('#myProducts > ul');
   let totalPrice = document.querySelectorAll('h1')[1];

   document.querySelector('#add-new > button').addEventListener('click', addProduct);
   document.querySelector('.filter > button').addEventListener('click', filterProducts);
   document.querySelector('#myProducts > button').addEventListener('click', buyProducts);
   
   function addProduct(e) {
      e.preventDefault();
      let [name, quantity, price] = document.querySelectorAll('#add-new > input');
      if(name.value === '' || quantity.value === '' || price.value === '') return;

      const newProduct = createProduct(name.value, Number(quantity.value), Number(price.value));
      products.appendChild(newProduct);
   }


   function createProduct(name, quantity, price) {
      let li = createElement('li', '');
      li.appendChild(createElement('span', `${name}`));
      li.appendChild(createElement('strong', `Available: ${quantity}`));

      let div = createElement('div', '');
      div.appendChild(createElement('strong', `${price.toFixed(2)}`));

      let btnAddClient = createElement('button', `Add to Client's List`);
      btnAddClient.addEventListener('click', addToClientList);
      div.appendChild(btnAddClient);

      li.appendChild(div);
      return li;
   }

   function filterProducts(e) {
      e.preventDefault();
      let inputFilter = document.querySelector('#filter').value.toLowerCase();

      [...products.querySelectorAll('li')].forEach(p => {
         const productName = p.children[0].textContent.toLowerCase();
         productName.includes(inputFilter) 
            ? p.style.display = '' 
            : p.style.display = 'none';
      });
   }

   function addToClientList(e) {
      e.preventDefault();
      const parent = this.parentNode.parentNode;
      const productName = parent.firstChild.textContent;
      let quantity = Number(parent.children[1].textContent.split(': ')[1]);
      const price = Number(parent.lastChild.firstChild.textContent);
      const oldPrice = Number(totalPrice.textContent.split(': ')[1]);
      
      myProducts.appendChild(createMyProduct(productName, price));
      totalPrice.textContent = `Total Price: ${(oldPrice + price).toFixed(2)}`;
      quantity -= 1;

      quantity === 0 
         ? parent.remove() 
         : parent.children[1].textContent = `Available: ${quantity}`;
   }

   function createElement(type, text) {
      let element = document.createElement(`${type}`);
      element.textContent = text;
      return element;
   }

   function createMyProduct(name, price) {
      let li =  createElement('li', `${name}`);
      li.appendChild(createElement('strong', `${price.toFixed(2)}`));
      return li;
   }

   function buyProducts(e) {
      e.preventDefault();
      myProducts.innerHTML = '';
      totalPrice.textContent = 'Total Price: 0.00';
   }
}