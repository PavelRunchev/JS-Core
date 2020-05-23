function solve() { 
   let products = document.querySelector('#products ul');
   let filterButton = document.querySelector('.filter button');
   let totalPrice = document.querySelectorAll('h1')[1];
   let myProducts = document.querySelector('#myProducts ul');
   let buy = document.querySelector('#myProducts button');
   const [name, quantity, price] = document.querySelectorAll('#add-new input');

   let addProductButton = document.querySelector('#add-new button');
   addProductButton.addEventListener('click', function(e) {
      e.preventDefault();
      if(name.value === '' || Number(quantity.value < 1) || Number(price.value) < 1) {
         return;
      }

      let newItem = addProduct(name.value, Number(quantity.value), Number(price.value));
      products.appendChild(newItem);

      name.value = '';
      quantity.value = '';
      price.value = '';
   });

   buy.addEventListener('click', clearMyProducts);
   filterButton.addEventListener('click', filterProducts);

   function filterProducts(e) {
      e.preventDefault();
      // HTML Collection to Array
      let allAvailableProducts = Array.from(products.getElementsByTagName('li'));
      let searchName = document.querySelector('#filter').value;

      allAvailableProducts.map(p => {
         let span = p.getElementsByTagName('span')[0];
         if(span.textContent.toLowerCase().includes(searchName.toLowerCase())) {
            p.style.display = "block";
         } else {
            p.style.display = "none";
         }
      });
   }

   function addProduct(inputName, inputQuantity, inputPrice) {
      let li = document.createElement('li');
      let span = document.createElement('span');
      span.textContent = inputName;
      let strong = document.createElement('strong');
      strong.textContent = `Available: ${inputQuantity}`;
      li.appendChild(span);
      li.appendChild(strong);

      let div = document.createElement('div');
      let strongPrice = document.createElement('strong');
      strongPrice.textContent = `${inputPrice.toFixed(2)}`;

      let buttonAddClientList = document.createElement('button');
      buttonAddClientList.textContent = `Add to Client's List`;

      buttonAddClientList.addEventListener('click', function(e) {
         e.preventDefault();
         let getGlobalTotalPrice = Number(totalPrice.textContent.split(' ')[2]);
         totalPrice.textContent = `Total Price: ${(getGlobalTotalPrice + inputPrice).toFixed(2)}`;

         let myProductsLi = createMyProductsLi(inputName, inputPrice);
         myProducts.appendChild(myProductsLi);

         let currentQuantity = Number(strong.textContent.split(' ')[1]);
         if(currentQuantity === 1) {
             li.remove();
         } else {
            strong.textContent = `Available: ${currentQuantity - 1}`;
         }
      });
      div.appendChild(strongPrice);
      div.appendChild(buttonAddClientList);

      li.appendChild(div);
      return li;
   }

   function createMyProductsLi(n, p) {
      let li = document.createElement('li');
      li.textContent = n;
      let strong = document.createElement('strong');
      strong.textContent = `${p.toFixed(2)}`;
      li.appendChild(strong);
      return li;
   }

   function clearMyProducts(e) {
      e.preventDefault();
      totalPrice.textContent = 'Total Price: 0.00';
      myProducts.innerHTML = '';
   }
}