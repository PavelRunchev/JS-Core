class Kitchen {
    constructor(budget) {
        this.budget = Number(budget);
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        let logs = [];
        products.forEach(p => {
            const [productName, productQuantity, productPrice] = p.split(' ');
            if(Number(productPrice) > this.budget)
                logs.push(`There was not enough money to load ${Number(productQuantity)} ${productName}`);
            else {
                if(this.productsInStock.hasOwnProperty(productName)) 
                    this.productsInStock[productName] += Number(productQuantity);
                else
                    this.productsInStock[productName] = Number(productQuantity);
                this.budget -= Number(productPrice);
                logs.push(`Successfully loaded ${Number(productQuantity)} ${productName}`);
            }
        });

        this.actionsHistory = this.actionsHistory.concat(logs);
        return logs.join('\n');
    }

    addToMenu(meal, products, price) {
        if(this.menu.hasOwnProperty(meal))
            return `The ${meal} is already in our menu, try something different.`;
        
        this.menu[meal] = { products, price };
        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        if(Object.keys(this.menu).length === 0)
            return 'Our menu is not ready yet, please come later...';

        //test 9 the end added new line!
        return Object.entries(this.menu)
            .map(m => m = `${m[0]} - $ ${m[1].price}`)
            .join('\n') + '\n';
    }

    makeTheOrder(meal) {
        if(!this.menu.hasOwnProperty(meal))
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
       
        if(this.checkNeededProducts(this.menu[meal].products, false)) {
            this.budget += this.menu[meal].price;
            this.checkNeededProducts(this.menu[meal].products, true);
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal]['price']}.`;
        } else
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
    }

    checkNeededProducts(mealProducts, isRemoveProducts) {
        for (let p of mealProducts) {
            const [name, neededQuantity] = p.split(' ');
            let quantityInStock = this.productsInStock[name];
            if(isRemoveProducts)
                this.productsInStock[name] -= Number(neededQuantity);
            else {
                if(Number(neededQuantity) > quantityInStock || !quantityInStock) 
                    return false;
            }   
        }

        if(!isRemoveProducts) return true;
    }
}

let kitchen = new Kitchen (1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());

console.log(kitchen.makeTheOrder('frozenYogurt'));

console.log(kitchen.productsInStock);
