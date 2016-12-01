// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// libraries
import { Ng2BootstrapModule } from 'ng2-bootstrap';

// root component
import { AppComponent } from './app.component';
import { ENV_PROVIDERS } from './environment';

// internal Routes
import { APP_ROUTER } from './app.routes';

// internal components
import { FooterComponent } from './components/footer.component';
import { HeaderComponent } from './components/header.component';
import { DivisionBlueprintsComponent } from './components/division-blueprints.component';
import { DivisionItemsComponent } from './components/division-items.component';

import { WeeklyResetDataService } from './components/weekly-reset-data.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DivisionBlueprintsComponent,
    DivisionItemsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2BootstrapModule,
    APP_ROUTER
  ],
  providers: [
    ENV_PROVIDERS,
    WeeklyResetDataService
  ]
})
export class AppModule {}
