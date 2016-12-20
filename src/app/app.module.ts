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
import { AboutComponent } from './components/about.component';

import { DivisionBlueprintsComponent } from './components/division-blueprints/division-blueprints.component';
import { DivisionGearComponent } from './components/division-items/division-gear.component';
import { DivisionGearModsComponent } from "./components/division-items/division-gear-mods.component";
import { DivisionWeaponsComponent } from "./components/division-items/division-weapons.component";
import { DivisionWeaponModsComponent } from "./components/division-items/division-weapon-mods.component";

import { WeeklyResetDataService } from './services/weekly-reset-data.service';
import { DivisionItemsService } from './components/division-items/division-items.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    DivisionBlueprintsComponent,
    DivisionGearComponent,
    DivisionGearModsComponent,
    DivisionWeaponsComponent,
    DivisionWeaponModsComponent
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
    WeeklyResetDataService,
    DivisionItemsService
  ]
})
export class AppModule {}
