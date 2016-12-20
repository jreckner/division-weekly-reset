import { Component } from '@angular/core';
import { DivisionItemsService } from './division-items.service';
import { Weapon } from "../../models/weapon.model";

@Component({
  selector: 'division-weapons',
  templateUrl: './division-weapons.component.html'
})
export class DivisionWeaponsComponent {

  title: string = 'Weapons';

  filteredKeyword: string = '';

  constructor(private itemsService: DivisionItemsService) {
  }

  getWeapons(): Weapon[] {
    return this.itemsService.weapons
  }

  getRarity(item): string {
    return 'project-warning';
  }

  isFiltered(item) {
    if (this.filteredKeyword != '') {
      if (item &&
        (item.bonus.toLowerCase().indexOf(this.filteredKeyword.toLowerCase()) < 0) &&
        (item.talent1.toLowerCase().indexOf(this.filteredKeyword.toLowerCase()) < 0) &&
        (item.talent2.toLowerCase().indexOf(this.filteredKeyword.toLowerCase()) < 0) &&
        (item.talent3.toLowerCase().indexOf(this.filteredKeyword.toLowerCase()) < 0) &&
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
