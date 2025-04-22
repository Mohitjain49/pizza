import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from './order.service';
import { DatabaseService } from './database.service';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private router: Router, private databaseService: DatabaseService, private orderService: OrderService) {}

    userInfo = {
        active: false,
        name: "",
        phoneNumber: "",
    }
    address = {
        street: "",
        city: "Kennesaw",
        state: "Georgia (GA)",
        zipCode: 30060 
    }
    chargeAcc = {
        cardType: "",
        cardNumber: 1111111111111111
    }

    authError: string = "";
    menuExpanded: boolean = false;
    pickupPizzas: boolean = true;

    /**
     * This gets the Total Price of the customer's order.
     */
    getTotalPrice() {
        return this.orderService.totalPrice;
    }

    /**
     * This navigates to a specific page on the app.
     * @param path The path of the page.
     */
    navigateToPage(path: string = "/") {
        this.router.navigateByUrl(path);
    }

    /**
     * If the user is not logged on to the app, then this function redirects them to the login page.
     */
    promptLogin() {
        if(this.userInfo.active) { return; }
        this.setAuthError("You must log in before making an order.");
        this.navigateToPage("/login");
    }

    /**
     * If the user is logged into the app, this function navigates them to the home page.
     */
    promptHome() {
        if(this.userInfo.active) { this.navigateToPage("/") }
    }

    /**
     * This toggles the status of the expanded pizza menu.
     */
    togglePizzaMenu() {
        this.menuExpanded = !this.menuExpanded;
    }

    /**
     * This sets the value of "pickupPizzas".
     * @param value True if pizzas should be delivered, false otherwise.
     */
    setPickupPizzas(value: boolean = true) {
        this.pickupPizzas = value;
    }

    /**
     * ---------------------------------------------------------------------
     * These functions set values related to the user authentication system.
     * ---------------------------------------------------------------------
     */

    /**
     * This sets a new card type that the user is using.
     * @param newType The new type. Default is an empty string.
     */
    setCardType(newType: string = "") {
        this.chargeAcc.cardType = ((newType === this.chargeAcc.cardType) ? "" : newType);
    }

    /**
     * This function sets which authentication error has occurred.
     * @param error The error for the user.
     */
    setAuthError(error: string = "") {
        this.authError = error;
    }

    /**
     * This logs in a user should the phone number and password be valid.
     * @param phoneNumber The phone number of the user.
     * @param password The password of the user.
     */
    loginUser(phoneNumber: string = "", password: string = "") {
        const user = this.databaseService.findUser(phoneNumber, password);
        if(typeof user === "string") {
            this.setAuthError(user);
        } else {
            this.userInfo = { active: true, name: user.name, phoneNumber: user.phoneNumber }
            this.address = user.address;
            this.chargeAcc = user.card;
            this.navigateToPage();
        }
    }

    /**
     * This function logs out the user account from the app.
     */
    logoutUser() {
        if(!this.userInfo.active) {
            this.navigateToPage();
            return;
        }
        this.userInfo = { active: false, name: "", phoneNumber: "" }
        this.address = { street: "", city: "Kennesaw", state: "Georgia (GA)", zipCode: 30060 }
        this.chargeAcc = { cardType: "", cardNumber: 1111111111111111 }
        this.navigateToPage("/login");
    }

    /**
     * This signs up a new user.
     * @param name The name of the new user.
     * @param phoneNumber The phone number of the new user.
     * @param password The password for the new user.
     */
    signUpUser(name: string = "", phoneNumber: string = "", password: string = "") {
        this.databaseService.addUser(name, phoneNumber, password, this.address, this.chargeAcc);
    }
}
