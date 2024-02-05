import {ApplicationConfig} from '@angular/core';
import {routes} from './app.routes';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {HttpInterceptor} from "../shared/api";
import {DatePipe} from "@angular/common";
export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(
      withInterceptors([HttpInterceptor])
    ),
    DatePipe
  ]
};

