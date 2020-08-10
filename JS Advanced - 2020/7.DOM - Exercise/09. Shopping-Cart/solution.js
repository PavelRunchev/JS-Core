function solve() {
   let btnCheckout = document.querySelector('.checkout');
   btnCheckout.addEventListener('click', checkout);
   let textArea = document.querySelector('.shopping-cart textarea');
   let products = document.querySelectorAll('.shopping-cart .product .add-product');
   addEventAndDisableClick(products, false);

   function addProduct(e) {
      e.preventDefault();
      const productName = this.parentNode.parentNode.querySelector('.product-title').textContent;
      const price = this.parentNode.parentNode.querySelector('.product-line-price').textContent;
      textArea.textContent += `Added ${productName} for ${price} to the cart.\n`;
   }
   
   function checkout(e) {
      e.preventDefault();
      let totalPrice = 0;
      let productsNameArray = [];
      const allAddedProducts = textArea.textContent.split('\n').filter(p => p !== '');
      allAddedProducts.forEach(p => {
         totalPrice += Number(p.split(' ')[3]);
         productsNameArray.push(p.split(' ')[1]);
      });

      textArea.textContent += `You bought ${[...new Set(productsNameArray)].join(', ')} for ${totalPrice.toFixed(2)}.`;
      //locked all buttons!
      addEventAndDisableClick(products, true);
   }

   function addEventAndDisableClick(products, isDisabled) {
      for (let p of products) {
         if(isDisabled) p.disabled = true;
         else p.addEventListener('click', addProduct);
      }

      if(isDisabled) btnCheckout.disabled = true;
   }
}