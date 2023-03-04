// Write your code here

class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }

    #dessert;
}

const myBreakfast = new Breakfast('toast', 'coffee');
console.log(myBreakfast);

const myLunch = new Lunch('caesar', 'chicken noodle', 'iced tea');
console.log(myLunch);

const myDinner = new Dinner('garden', 'minestrone', 'steak', 'cake');
console.log(myDinner);
console.log(myDinner.dessert);