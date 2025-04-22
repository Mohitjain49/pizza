import { Component } from '@angular/core';
import { UserService } from '@/services/user.service';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar.component';

@Component({
    selector: 'app-pizza-logout',
    standalone: true,
    imports: [NavigationBar],
    templateUrl: './pizza-logout.component.html'
})

export class PizzaLogout {
    constructor(private userService: UserService){
        userService.logoutUser();
    }
}
