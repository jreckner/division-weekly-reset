import { Component } from '@angular/core';
import { DivisionItemsService } from './division-items.service';
import { GearMod } from '../../models/gear-mod.model';

@Component({
  selector: 'division-gear-mods',
  templateUrl: './division-gear-mods.component.html'
})
export class DivisionGearModsComponent {

  title: string = 'Gear Mods';

  filteredKeyword: string = '';
  isFilteredElec = false;
  isFilteredStam = false;
  isFilteredFire = false;
  isFilteredPerf = false;

  constructor(private itemsService: DivisionItemsService) {
  }

  getGearMods(): GearMod[] {
    return this.itemsService.getGearModsSortedByName();
  }

  getRarity(item): string {
    return 'project-warning';
  }

  isFiltered(item) {
    if (this.filteredKeyword !== '') {
      if (item &&
        (item.attribute.toLowerCase().indexOf(this.filteredKeyword.toLowerCase()) < 0) &&
        (item && (item.name.toLowerCase().indexOf(this.filteredKeyword.toLowerCase()) < 0))) {
        return false;
      }
    }

    let lowerName = item.name.toLowerCase();
    if (item && (lowerName.indexOf('electronic') >= 0)) {
      if (this.isFilteredElec) {
        return false;
      }
      return true;
    } else if (item && (lowerName.indexOf('stamina') >= 0)) {
      if (this.isFilteredStam) {
        return false;
      }
      return true;
    } else if (item && (lowerName.indexOf('firearm') >= 0)) {
      if (this.isFilteredFire) {
        return false;
      }
      return true;
    } else if (item && (lowerName.indexOf('performance') >= 0)) {
      if (this.isFilteredPerf) {
        return false;
      }
    }

    return true;
  }

  filterElec() {
    this.isFilteredElec = !this.isFilteredElec;
  }

  filterStam() {
    this.isFilteredStam = !this.isFilteredStam;
  }

  filterFire() {
    this.isFilteredFire = !this.isFilteredFire;
  }

  filterPerf() {
    this.isFilteredPerf= !this.isFilteredPerf;
  }

  filterKeyword(keyword: string): void {
    this.filteredKeyword = keyword;
  }

  clearFilter() {
    this.filteredKeyword = '';
  }

};
