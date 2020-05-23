function solve() {
   document.querySelector('.checkout').addEventListener('click', checkout);
   let textarea = document.querySelector('.shopping-cart textarea');
   let products = document.querySelectorAll('.product');

   for (let p of products) {
      p.querySelector('.add-product').addEventListener('click', addProduct);
   }

   function addProduct() {
      let parent = this.parentNode.parentNode;
      let title = parent.querySelector('.product-title').textContent;
      let price = Number(parent.querySelector('.product-line-price').textContent);
      let format = `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
      textarea.textContent += format;
   }

   function checkout() {
      let totalPrice = 0;
      let productsName =  [];
      let addedProducts = textarea.textContent.split('\n').filter(a => a !== ' ' && a !== '');
      for (let p of addedProducts) {
         let productData = p.split(' ');
         productsName.push(productData[1]);
         totalPrice += Number(productData[3]);
      }

      productsName = distinctProducts(productsName);
      textarea.textContent += `You bought ${productsName.join(', ')} for ${totalPrice.toFixed(2)}.`;
      disableAddButtons();
   }

   function distinctProducts(products) {
      let arr = [];
      for(let i = 0; i < products.length; i++) {
         if(!arr.includes(products[i])) { arr.push(products[i]); }
     }

      return arr;
   }

   function disableAddButtons() {
      for (let p of products) {
         p.querySelector('.add-product').disabled = true;
      }

      document.querySelector('.checkout').disabled =  true;
   }
}