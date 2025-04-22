import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>',
    styleUrls: ['./styles/material.component.css']
})

export class AppComponent {
    constructor() { document.title = 'Group Five\'s Pizza Shop'; }
    title = 'Group Five\'s Pizza Shop!';
}