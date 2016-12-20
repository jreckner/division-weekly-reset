import { Component } from '@angular/core';
import { DivisionItemsService } from './division-items.service';
import { WeaponMod } from "../../models/weapon-mod.model";

@Component({
  selector: 'division-weapon-mods',
  templateUrl: './division-weapon-mods.component.html'
})
export class DivisionWeaponModsComponent {

  title: string = 'Weapon Mods';

  filteredKeyword: string = '';

  constructor(private itemsService: DivisionItemsService) {
  }

  getWeaponMods(): WeaponMod[] {
    return this.itemsService.weaponMods
  }

  getRarity(item): string {
    return 'project-warning';
  }

  isFiltered(item) {
    if (this.filteredKeyword != '') {
      if (item &&
        (item.attributes.toLowerCase().indexOf(this.filteredKeyword.toLowerCase()) < 0) &&
        (item && (item.name.toLowerCase().indexOf(this.filteredKeyword.toLowerCase()) < 0))) {
        return false;
      }
    }
    return true;
  }

  filterKeyword(keyword: string): void {
    this.filteredKeyword = keyword
  }

};
