class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = {};
    }

    loadProducts(products) {
        let id = 0;
        products.forEach(p => {
            const [productName, productQuantity, productPrice] = p.split(' ');

            if(Number(productPrice) > this.budget) {
                this.actionsHistory[id++] = `There was not enough money to load ${productQuantity} ${productName}`;
            } else {
                if(this.productsInStock.hasOwnProperty(productName))
                    this.productsInStock[productName] += Number(productQuantity);
                else
                    this.productsInStock[productName] = Number(productQuantity);

                this.budget -= Number(productPrice);
                this.actionsHistory[id++] = `Successfully loaded ${productQuantity} ${productName}`;
            }
        });

        return Object.values(this.actionsHistory).join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        const currentMeal = this.menu[meal];
        if(currentMeal) {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        //test 6 property products!
        this.menu[meal] = { meal: meal, products: neededProducts, price: Number(price) };
        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        //test 8
        if(Object.keys(this.menu).length === 0) return 'Our menu is not ready yet, please come later...';

        //test 9
        return Object.values(this.menu)
            .map(m => `${m.meal} - $ ${m.price}`)
            .join('\n') + '\n';
    }

    makeTheOrder(meal) {
        const currentMeal = this.menu[meal];
        if(!currentMeal) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let needProducts = this.menu[meal].products;
        //array from products
        for(let p of needProducts) {
            const [productName, productQuantity] = p.split(' ');
            if(this.productsInStock[productName]
            && this.productsInStock[productName] >= Number(productQuantity)) {
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        for(let p of needProducts) {
            const [productName, productQuantity] = p.split(' ');
            this.productsInStock[productName] -= Number(productQuantity);
        }
        this.budget += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}

//test 7 do not access!!!

let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 10 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.loadProducts(['Strawberries 10 30']));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('frozenYogurt'));
