import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import {routes} from "./app.routes";
import {DashboardGuard} from "@dashboard";
import {securityRoutes} from "../security/security.routes";
import {dashboardRoutes} from "../dashboard/dashboard.routes";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
