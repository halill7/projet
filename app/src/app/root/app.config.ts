import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {routes} from './app.routes';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(HttpClientModule)
  ]
};
