import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class DatabaseService {
    constructor(private router: Router) {}

    users: Array<{name: string, phoneNumber: string, password: string, address: Address, card: CreditCard}> = [
        { name: "John Doe", phoneNumber: "+18888880000", password: "679drThree#",
            address: { street: "1100 South Marietta Pkwy SE", city: "Marietta", state: "GA", zipCode: 30060 },
            card: { cardType: "Visa", cardNumber: 4111111111111111 }
        }
    ];

    /**
     * This adds a new user to the users array.
     * @param name The name of the user.
     * @param phoneNumber The phone number of the user.
     * @param password The password for the new user.
     * @param address The address of where the user lives. Optional for sign up.
     * @param card The card information for the user. Optional for sign up.
     */
    addUser(name: string, phoneNumber: string, password: string, address: Address, card: CreditCard) {
        this.users.push({name, phoneNumber, password, address, card});
    }

    /**
     * This function finds a user from the users array given a phone number and password.
     * @param phoneNumber The user's phone number.
     * @param password The user's password.
     */
    findUser(phoneNumber: string = "", password: string = "") {
        const foundUser: number = this.users.findIndex(
            user => (user.phoneNumber === phoneNumber)
        );
        const samePassword: boolean = ((foundUser == -1) ?
            false : (this.users[foundUser].password === password)
        );

        if(foundUser == -1) {
            return "User was not found. Please Try Again.";
        } else if(!samePassword) {
            return "Password is Incorrect. Please Try Again.";
        } else {
            return this.users[foundUser];
        }
    }
}

interface Address {
    street: string,
    city: string,
    state: string,
    zipCode: number
}
interface CreditCard {
    cardType: string,
    cardNumber: number
}