import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './routes';

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideAnimationsAsync(),
        { provide: LocationStrategy, useClass: PathLocationStrategy }
    ]
};

bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));