import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DivisionItemsService } from './division-items.service';
import { WeaponMod } from '../../models/weapon-mod.model';

import { Subscription } from 'rxjs';

@Component({
  selector: 'division-weapon-mods',
  templateUrl: './division-weapon-mods.component.html'
})
export class DivisionWeaponModsComponent {

  title: string = 'Weapon Mods';

  uuid: string = '';
  filteredKeyword: string = '';

  private subscription: Subscription;

  constructor(private itemsService: DivisionItemsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // subscribe to router event
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.uuid = param['uuid'];
      });
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

  getWeaponMods(): WeaponMod[] {
    return this.itemsService.getWeaponModsSortedByName();
  }

  getRarity(item): string {
    return 'project-warning';
  }

  isFiltered(item) {
    if (this.uuid && this.uuid !== '') {
      if (item.getHash() == this.uuid) {
        return true;
      }
      return false;
    }

    if (this.filteredKeyword !== '') {
      if (item &&
        (item.attributes.toLowerCase().indexOf(this.filteredKeyword.toLowerCase()) < 0) &&
        (item && (item.name.toLowerCase().indexOf(this.filteredKeyword.toLowerCase()) < 0))) {
        return false;
      }
    }
    return true;
  }

  filterKeyword(keyword: string): void {
    this.filteredKeyword = keyword;
  }

  clearFilter() {
    this.filteredKeyword = '';
  }

};
