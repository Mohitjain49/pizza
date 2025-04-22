import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class OrderService {
    constructor() {
        Object.freeze(this.COBB_SALES_TAX);
        Object.freeze(this.MAX_TOPPINGS);
    }

    createScreenIndex: number = 2;
    laptopScreen: boolean = true;

    pizzaCreation: Pizza = {
        size: "12 Inch",
        crust: "Thick",
        quantity: 1,
        toppings: new Array(0),
        price: 11.5,
        priceStr: "$11.50"
    }
    drinkCreation: Drink = {
        beverage: "CocaCola",
        size: "Medium",
        quantity: 1,
        price: 4.5,
        priceStr: "$4.50"
    }

    private drinksSubject = new BehaviorSubject<Drink[]>([]);
    private pizzasSubject = new BehaviorSubject<Pizza[]>([]);
    
    drink$ = this.drinksSubject.asObservable();
    pizza$ = this.pizzasSubject.asObservable();

    orderDrinks: Array<Drink> = [];
    orderPizzas: Array<Pizza> = [];

    COBB_SALES_TAX: number = 0.06;
    totalPrice = { num: 0, str: "$0.00" }

    MAX_TOPPINGS: number = 4;
    pizzaToppings: Array<{ option: string, selected: boolean }> = [
        { option: "Pepperoni (+$1.00)", selected: false },
        { option: "Onions", selected: false },
        { option: "Ham (+$1.25)", selected: false },
        { option: "Spinach", selected: false },
        { option: "Bacon (+$1.25)", selected: false },
        { option: "Black Olives", selected: false },
        { option: "Sausage (+$1.25)", selected: false },
        { option: "Peppers", selected: false },
        { option: "Extra Cheese (+$0.75)", selected: false },
        { option: "Mushrooms", selected: false },
    ];

    /**
     * This sets the create screen based on its index.
     * @param index The index of the screen to use.
     */
    setCreateScreenIndex(index: number = 2) {
        this.createScreenIndex = ((this.laptopScreen && index == 2) ? 0 : index);
    }

    /**
     * This converts a number into a dollar amount.
     * @param amount the amount of money.
     */
    createMoneyString(amount: number = 0) {
        return `$${amount.toFixed(2)}`;
    }

    /**
     * This functions updates the total price of all items the customer ordered.
     */
    updateTotalPrice() {
        var price = 0;
        for(let i = 0; i < this.orderDrinks.length; i++) {
            price += this.orderDrinks[i].price;
        }
        for(let j = 0; j < this.orderPizzas.length; j++) {
            price += this.orderPizzas[j].price;
        }

        price = (Math.round((price * (1 + this.COBB_SALES_TAX)) * 100) / 100);
        this.totalPrice = { num: price, str: this.createMoneyString(price) }
        this.setCreateScreenIndex();
    }

    /**
     * This adds an specific order item to a specific array based on a parameter.
     * @param item The type of item.
     */
    addOrderItem(item: string = "") {
        if(item === "Drink") {
            this.orderDrinks.push(this.drinkCreation);
            this.drinksSubject.next(this.orderDrinks);
            this.updateTotalPrice();
            this.resetDrink();
        } else if(item === "Pizza") {
            this.orderPizzas.push(this.pizzaCreation);
            this.pizzasSubject.next(this.orderPizzas);
            this.updateTotalPrice();
            this.resetPizza();
        }
    }

    /**
     * This returns a boolean based on if the user has created an order yet.
     */
    ordersCreated() {
        return (this.orderDrinks.length != 0 || this.orderPizzas.length != 0);
    }

    /**
     * This function runs wheenver the screen size changes on the main page.
     */
    createPageResizeEL() {
        this.laptopScreen = (window.innerWidth > 1050);
        this.setCreateScreenIndex(this.createScreenIndex);
    }

    /**
     * -----------------------------------------------------------------------------
     * These functions are specifically for creating a pizza and altering its price.
     * -----------------------------------------------------------------------------
     */

    /**
     * This function updates the pizza price based on the "pizzaCreation" object.
     */
    updatePizzaPrice() {
        var price = 11.5;
        const pizzaSize = this.pizzaCreation.size;

        if(pizzaSize === "10 Inch") {
            price = 10;
        } else if(pizzaSize === "14 Inch") {
            price = 14.5;
        } else if(pizzaSize === "16 Inch") {
            price = 17;
        }

        if(this.pizzaCreation.crust === "Cheesy") { price += 0.5; }
        if(this.pizzaToppings[0].selected) { price += 1; }
        if(this.pizzaToppings[8].selected) { price += 0.75; }

        for(let i = 2; i < 7; i += 2) {
            if(this.pizzaToppings[i].selected) { price += 1.25; }
        }

        price *= this.pizzaCreation.quantity;
        this.pizzaCreation.price = price;
        this.pizzaCreation.priceStr = this.createMoneyString(price);
    }

    /**
     * This increments the quantity of pizzas to order by one.
     * @param increase If true, increases the number of pizzas, else it decreases it.
     */
    incrementPizzasQuantity(increase: boolean = true) {
        if(increase && this.pizzaCreation.quantity < 10) {
            this.pizzaCreation.quantity++;
            this.updatePizzaPrice();
        } else if(!increase && this.pizzaCreation.quantity > 1) {
            this.pizzaCreation.quantity--;
            this.updatePizzaPrice();
        }
    }

    /**
     * This function reacts to any change to the pizza toppings.
     * @param index The index of the topping changed.
     */
    onToppingsChange(index: number = 0) {
        if(this.maxToppingsSelected() && !this.pizzaToppings[index].selected) { return; }

        this.pizzaToppings[index].selected = !this.pizzaToppings[index].selected;
        this.updatePizzaPrice();
        this.pizzaCreation.toppings = [];

        for(let i = 0; i < this.pizzaToppings.length; i++) {
            const topping = this.pizzaToppings[i];
            const option = topping.option.substring(0, topping.option.indexOf('(')).trim();
            if(topping.selected) { this.pizzaCreation.toppings.push((option === "") ? topping.option : option); }
        }
    }

    /**
     * This returns whether the max amount of toppings are selected or not.
     */
    maxToppingsSelected() {
        return !(this.pizzaToppings.filter(cb => cb.selected).length < this.MAX_TOPPINGS);
    }

    /**
     * This function resets the pizza creation and pizza toppings to their original state.
     */
    resetPizza() {
        this.pizzaCreation = { size: "12 Inch", crust: "Thick", quantity: 1, toppings: new Array(0), price: 11.5, priceStr: "$11.50" }
        this.pizzaToppings.forEach((option) => { option.selected = false; })
    }

    /**
     * -----------------------------------------------------------------------------
     * These functions are specifically for creating a drink and altering its price.
     * -----------------------------------------------------------------------------
     */

    /**
     * This function updates the drink price based on the "drinkCreation" object.
     */
    updateDrinkPrice() {
        var price: number = 4.5;
        const drinkSize = this.drinkCreation.size;

        if(drinkSize === "Small") {
            price = 3.5;
        } else if(drinkSize === "Large") {
            price = 6;
        } else if(drinkSize === "Party Sized") {
            price = 10;
        }

        price *= this.drinkCreation.quantity;
        this.drinkCreation.price = price;
        this.drinkCreation.priceStr = this.createMoneyString(price);
    }

    /**
     * This increments the quantity of drinks to order by one.
     * @param increase If true, increases the number of drinks, else it decreases it.
     */
    incrementDrinkQuantity(increase: boolean = true) {
        if(increase && this.drinkCreation.quantity < 10) {
            this.drinkCreation.quantity++;
            this.updateDrinkPrice();
        } else if(!increase && this.drinkCreation.quantity > 1) {
            this.drinkCreation.quantity--;
            this.updateDrinkPrice();
        }
    }

    /**
     * This resets the drink creation to its default state.
     */
    resetDrink() {
        this.drinkCreation = { beverage: "CocaCola", size: "Medium", quantity: 1, price: 4.5, priceStr: "$4.50" }
    }
}

export interface Pizza {
    size: string,
    crust: string,
    toppings: string[],
    quantity: number,
    price: number,
    priceStr: string
}

export interface Drink {
    beverage: string,
    size: string,
    quantity: number,
    price: number,
    priceStr: string
}