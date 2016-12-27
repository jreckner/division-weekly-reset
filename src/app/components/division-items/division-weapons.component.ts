import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DivisionItemsService } from './division-items.service';
import { Weapon } from '../../models/weapon.model';

import { Subscription } from 'rxjs';

@Component({
  selector: 'division-weapons',
  templateUrl: './division-weapons.component.html'
})
export class DivisionWeaponsComponent {

  title: string = 'Weapons';

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

  getWeapons(): Weapon[] {
    return this.itemsService.getWeaponsSortedByName();
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
    this.filteredKeyword = keyword;
  }

  clearFilter() {
    this.filteredKeyword = '';
  }

};
