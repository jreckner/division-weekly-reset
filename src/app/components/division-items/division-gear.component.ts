import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gear } from '../../models/gear.model';
import { DivisionItemsService } from './division-items.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'division-gear',
  templateUrl: './division-gear.component.html'
})
export class DivisionGearComponent {

  title: string = 'Gear';

  uuid: string = '';
  filteredKeyword = '';
  isFilteredHE = false;
  isFilteredAlpha = false;
  isFilteredBanshee = false;
  isFilteredDead = false;
  isFilteredFinal = false;
  isFilteredFire = false;
  isFilteredFront = false;
  isFilteredHunter = false;
  isFilteredLone = false;
  isFilteredNomad = false;
  isFilteredPred = false;
  isFilteredReclaim = false;
  isFilteredSentry = false;
  isFilteredStriker = false;
  isFilteredTact = false;

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

  getGear() {
    return this.itemsService.getGearSortedByName();
  }

  getRarity(item) {
    if (item && item.rarity === 'header-he') {
      return 'project-warning';
    }
    if (item && item.rarity === 'header-gs') {
      return 'project-success';
    }
    return 'project-default';
  }

  isFiltered(item) {
    if (this.uuid && this.uuid !== '') {
      if (item.getHash() == this.uuid) {
        return true;
      }
      return false;
    }

    if (item && item.rarity === 'header-he') {
      if (this.isFilteredHE) {
        return false;
      }
    }

    if (this.filteredKeyword !== '') {
      if (item &&
        (item.major.toLowerCase().indexOf(this.filteredKeyword.toLowerCase()) < 0) &&
        (item.minor.toLowerCase().indexOf(this.filteredKeyword.toLowerCase()) < 0) &&
        (item && (item.name.toLowerCase().indexOf(this.filteredKeyword.toLowerCase()) < 0))) {
        return false;
      }
    }

    let lowerName = item.name.toLowerCase();
    if (item && (lowerName.indexOf('alpha') >= 0)) {
      if (this.isFilteredAlpha) {
        return false;
      }
      return true;
    } else if (item && (lowerName.indexOf('banshee') >= 0)) {
      if (this.isFilteredBanshee) {
        return false;
      }
      return true;
    } else if (item && (lowerName.indexOf('deadeye') >= 0)) {
      if (this.isFilteredDead) {
        return false;
      }
      return true;
    } else if (item && (lowerName.indexOf('measure') >= 0)) {
      if (this.isFilteredFinal) {
        return false;
      }
      return true;
    } else if (item && (lowerName.indexOf('firecrest') >= 0)) {
      if (this.isFilteredFire) {
        return false;
      }
      return true;
    } else if (item && (lowerName.indexOf('d3-') >= 0)) {
      if (this.isFilteredFront) {
        return false;
      }
      return true;
    } else if (item && (lowerName.indexOf('faith') >= 0)) {
      if (this.isFilteredHunter) {
        return false;
      }
      return true;
    } else if (item && (lowerName.indexOf('star') >= 0)) {
      if (this.isFilteredLone) {
        return false;
      }
      return true;
    } else if (item && (lowerName.indexOf('nomad') >= 0)) {
      if (this.isFilteredNomad) {
        return false;
      }
      return true;
    } else if (item && (lowerName.indexOf('predator') >= 0)) {
      if (this.isFilteredPred) {
        return false;
      }
      return true;
    } else if (item && (lowerName.indexOf('reclaimer') >= 0)) {
      if (this.isFilteredReclaim) {
        return false;
      }
      return true;
    } else if (item && (lowerName.indexOf('sentry') >= 0)) {
      if (this.isFilteredSentry) {
        return false;
      }
      return true;
    } else if (item && (lowerName.indexOf('striker') >= 0)) {
      if (this.isFilteredStriker) {
        return false;
      }
      return true;
    } else if (item && (lowerName.indexOf('tactician') >= 0)) {
      if (this.isFilteredTact) {
        return false;
      }
      return true;
    }

    return true;
  }

  filterHE() {
    this.isFilteredHE = !this.isFilteredHE;
  }

  filterKeyword(keyword) {
    this.filteredKeyword = keyword;
  }

  filterSet(set) {
    if (set === 'alpha') {
      this.isFilteredAlpha = !this.isFilteredAlpha;
    } else if (set === 'banshee') {
      this.isFilteredBanshee = !this.isFilteredBanshee;
    } else if (set === 'dead') {
      this.isFilteredDead = !this.isFilteredDead;
    } else if (set === 'final') {
      this.isFilteredFinal = !this.isFilteredFinal;
    } else if (set === 'fire') {
      this.isFilteredFire = !this.isFilteredFire;
    } else if (set === 'front') {
      this.isFilteredFront = !this.isFilteredFront;
    } else if (set === 'hunter') {
      this.isFilteredHunter = !this.isFilteredHunter;
    } else if (set === 'lone') {
      this.isFilteredLone = !this.isFilteredLone;
    } else if (set === 'nomad') {
      this.isFilteredNomad = !this.isFilteredNomad;
    } else if (set === 'pred') {
      this.isFilteredPred = !this.isFilteredPred;
    } else if (set === 'reclaimer') {
      this.isFilteredReclaim = !this.isFilteredReclaim;
    } else if (set === 'sentry') {
      this.isFilteredSentry = !this.isFilteredSentry;
    } else if (set === 'striker') {
      this.isFilteredStriker = !this.isFilteredStriker;
    } else if (set === 'tact') {
      this.isFilteredTact = !this.isFilteredTact;
    } else {
      console.log('Unknown Set: {}', set);
    }

  }

  clearFilter() {
    this.filteredKeyword = '';
  }

};
