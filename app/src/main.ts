import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent, appConfig} from "@root";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
