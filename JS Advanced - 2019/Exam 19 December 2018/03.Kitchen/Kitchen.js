
class Kitchen {
    constructor(budget) {
        this.budget = Number(budget);
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        let messageLogs = [];

        for(let item of products) {
            let product = item.split(' ');
            let productPrice = Number(product.pop());
            let productQuantity = Number(product.pop());
            let productName = product.join(' ');

            if(this.budget - productPrice >= 0) {
                if(this.productsInStock[productName]) this.productsInStock[productName] += productQuantity;
                else this.productsInStock[productName] = productQuantity;                

                messageLogs.push(`Successfully loaded ${productQuantity} ${productName}`);              
                this.budget -= productPrice;
            }
            else
                messageLogs.push(`There was not enough money to load ${productQuantity} ${productName}`);
        }

        this.actionsHistory = [...this.actionsHistory, ...messageLogs];
        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, products, price) {
        if(this.menu[meal]) return `The ${meal} is already in our menu, try something different.`;

        this.menu[meal] = { price, products };
        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        if(Object.keys(this.menu).length === 0) return 'Our menu is not ready yet, please come later...';

        let showMenu = '';
        for (let key in this.menu) {
            showMenu += `${key} - $ ${this.menu[key]['price']}\n`;
        }

        //No add trim method - test 9!
        return showMenu;
    }

    makeTheOrder(meal) {
        if(!this.menu[meal]) return `There is not ${meal} yet in our menu, do you want to order something else?`;

        //check for products!
        let currentMeal = this.menu[meal];
        for (let ingredient of currentMeal['products']) {
            let arg = ingredient.split(' ');
            let ingredQuantity = Number(arg.pop());
            let ingredName = arg.join(' ');
            if(this.productsInStock[ingredName] < ingredQuantity || !this.productsInStock[ingredName])
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        currentMeal['products'].forEach(p => {
            let arg = p.split(' ');
            let quantity = Number(arg.pop());
            let product = arg.join(' ');
            this.productsInStock[product] -= quantity;
        });

        let obj = {};
        for (let key in this.productsInStock) {
           if(this.productsInStock[key] > 0) obj[key] = this.productsInStock[key];
        }

        this.productsInStock = obj;
        console.log(this.productsInStock);
        this.budget += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${currentMeal.price}.`;
    }
}

let kitchen = new Kitchen (1000);
console.log(kitchen.loadProducts(['Flour 0.5 1.20', 'Oil 0.2 3.00', 'Yeast 0.5 1.50', 'Salt 0.1 0.20', 'Sugar 0.1 0.50', 'Tomato sauce 0.5 0.90', 'Pepperoni 1 2.00', 'Cheese 1.5 3.50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.makeTheOrder('Pizza'));
console.log(kitchen.budget);
console.log(kitchen.showTheMenu());