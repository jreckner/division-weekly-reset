/**
 * angular2 imports
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisionBlueprintsComponent } from "./components/division-blueprints/division-blueprints.component";
import { DivisionGearComponent } from "./components/division-items/division-gear.component";
import { DivisionGearModsComponent } from "./components/division-items/division-gear-mods.component";
import { DivisionWeaponsComponent } from "./components/division-items/division-weapons.component";
import { DivisionWeaponModsComponent } from "./components/division-items/division-weapon-mods.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/gear',
    pathMatch: 'full'
  },
  {
    path: 'blueprints',
    component: DivisionBlueprintsComponent
  },
  {
    path: 'gear',
    component: DivisionGearComponent
  },
  {
    path: 'gearmods',
    component: DivisionGearModsComponent
  },
  {
    path: 'weapons',
    component: DivisionWeaponsComponent
  },
  {
    path: 'weaponmods',
    component: DivisionWeaponModsComponent
  }
];

export const APP_ROUTER: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
