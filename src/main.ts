import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';


// if (environment.production) {
//   enableProdMode();
// }
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
