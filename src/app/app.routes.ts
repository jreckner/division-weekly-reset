/**
 * angular2 imports
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisionBlueprintsComponent } from './components/division-blueprints/division-blueprints.component';
import { DivisionGearComponent } from './components/division-items/division-gear.component';
import { DivisionGearModsComponent } from './components/division-items/division-gear-mods.component';
import { DivisionWeaponsComponent } from './components/division-items/division-weapons.component';
import { DivisionWeaponModsComponent } from './components/division-items/division-weapon-mods.component';
import { AboutComponent } from './components/about.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/gear', pathMatch: 'full' },
  { path: 'blueprints', component: DivisionBlueprintsComponent },
  { path: 'gear', component: DivisionGearComponent },
  { path: 'gear/:uuid', component: DivisionGearComponent },
  { path: 'gearmods', component: DivisionGearModsComponent },
  { path: 'gearmods/:uuid', component: DivisionGearModsComponent },
  { path: 'weapons', component: DivisionWeaponsComponent },
  { path: 'weapons/:uuid', component: DivisionWeaponsComponent },
  { path: 'weaponmods', component: DivisionWeaponModsComponent },
  { path: 'weaponmods/:uuid', component: DivisionWeaponModsComponent },
  { path: 'about', component: AboutComponent }
];

export const APP_ROUTER: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
