import { Component } from '@angular/core';
import { DivisionItemsService } from './division-items.service';
import { GearMod } from "../../models/gear-mod.model";

@Component({
  selector: 'division-gear-mods',
  templateUrl: './division-gear-mods.component.html'
})
export class DivisionGearModsComponent {

  title: string = 'Gear Mods';

  filteredKeyword: string = '';

  constructor(private itemsService: DivisionItemsService) {
  }

  getGearMods(): GearMod[] {
    return this.itemsService.gearMods
  }

  getRarity(item): string {
    return 'project-warning';
  }

  isFiltered(item) {
    if (this.filteredKeyword != '') {
      if (item &&
        (item.attribute.toLowerCase().indexOf(this.filteredKeyword.toLowerCase()) < 0) &&
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
