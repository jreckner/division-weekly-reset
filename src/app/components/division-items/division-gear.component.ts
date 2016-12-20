import { Component } from '@angular/core';
import { WeeklyResetDataService } from '../../services/weekly-reset-data.service';
import { GearMod } from '../../models/gear-mod.model';
import { WeaponMod } from "../../models/weapon-mod.model";
import { Weapon } from "../../models/weapon.model";
import { Gear } from "../../models/gear.model";

@Component({
  selector: 'division-gear',
  templateUrl: './division-gear.component.html'
})
export class DivisionGearComponent {

  title:string = 'Gear';

  gearMods: GearMod[] = [];
  weaponMods: WeaponMod[] = [];
  weapons: Weapon[] = [];
  gear: Gear[] = [];

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

  constructor(private dataService: WeeklyResetDataService) {
    this.loadBoo();
    this.loadSpecialEquipment();
    this.loadLzEast();
    this.loadLzWest();
    this.loadDz();
    this.loadDzEast();
    this.loadDzWest();
  }

  loadBoo() {
    this.dataService.getBoo().subscribe( json => {
      for(var i = 0; i < json.length; i++) {
        var obj = json[i];
        if (obj.type === 'gear-mod') {
          let item = new GearMod();
          item.copyInto(obj);
          this.gearMods.push(item);
        } else if (obj.type === 'weapon-mod') {
          let item = new WeaponMod();
          item.copyInto(obj);
          this.weaponMods.push(item);
        } else if (obj.type === 'weapon') {
          let item = new Weapon();
          item.copyInto(obj);
          this.weapons.push(item);
        } else if (obj.type === 'gear') {
          let item = new Gear();
          item.copyInto(obj);
          this.gear.push(item);
        }
      }
    });
  }

  loadSpecialEquipment() {
    this.dataService.getSpecialEquipment().subscribe( json => {
      for(var i = 0; i < json.length; i++) {
        var obj = json[i];
        if (obj.type === 'gear-mod') {
          let item = new GearMod();
          item.copyInto(obj);
          this.gearMods.push(item);
        } else if (obj.type === 'weapon-mod') {
          let item = new WeaponMod();
          item.copyInto(obj);
          this.weaponMods.push(item);
        } else if (obj.type === 'weapon') {
          let item = new Weapon();
          item.copyInto(obj);
          this.weapons.push(item);
        } else if (obj.type === 'gear') {
          let item = new Gear();
          item.copyInto(obj);
          this.gear.push(item);
        }
      }
    });
  }

  loadLzEast() {
    this.dataService.getLzEast().subscribe( json => {
      for(var i = 0; i < json.length; i++) {
        var obj = json[i];
        if (obj.type === 'gear-mod') {
          let item = new GearMod();
          item.copyInto(obj);
          this.gearMods.push(item);
        } else if (obj.type === 'weapon-mod') {
          let item = new WeaponMod();
          item.copyInto(obj);
          this.weaponMods.push(item);
        } else if (obj.type === 'weapon') {
          let item = new Weapon();
          item.copyInto(obj);
          this.weapons.push(item);
        } else if (obj.type === 'gear') {
          let item = new Gear();
          item.copyInto(obj);
          this.gear.push(item);
        }
      }
    });
  }

  loadLzWest() {
    this.dataService.getLzWest().subscribe( json => {
      for(var i = 0; i < json.length; i++) {
        var obj = json[i];
        if (obj.type === 'gear-mod') {
          let item = new GearMod();
          item.copyInto(obj);
          this.gearMods.push(item);
        } else if (obj.type === 'weapon-mod') {
          let item = new WeaponMod();
          item.copyInto(obj);
          this.weaponMods.push(item);
        } else if (obj.type === 'weapon') {
          let item = new Weapon();
          item.copyInto(obj);
          this.weapons.push(item);
        } else if (obj.type === 'gear') {
          let item = new Gear();
          item.copyInto(obj);
          this.gear.push(item);
        }
      }
    });
  }

  loadDz() {
    this.dataService.getDz().subscribe( json => {
      for(var i = 0; i < json.length; i++) {
        var obj = json[i];
        if (obj.type === 'gear-mod') {
          let item = new GearMod();
          item.copyInto(obj);
          this.gearMods.push(item);
        } else if (obj.type === 'weapon-mod') {
          let item = new WeaponMod();
          item.copyInto(obj);
          this.weaponMods.push(item);
        } else if (obj.type === 'weapon') {
          let item = new Weapon();
          item.copyInto(obj);
          this.weapons.push(item);
        } else if (obj.type === 'gear') {
          let item = new Gear();
          item.copyInto(obj);
          this.gear.push(item);
        }
      }
    });
  }

  loadDzEast() {
    this.dataService.getDzEast().subscribe( json => {
      for(var i = 0; i < json.length; i++) {
        var obj = json[i];
        if (obj.type === 'gear-mod') {
          let item = new GearMod();
          item.copyInto(obj);
          this.gearMods.push(item);
        } else if (obj.type === 'weapon-mod') {
          let item = new WeaponMod();
          item.copyInto(obj);
          this.weaponMods.push(item);
        } else if (obj.type === 'weapon') {
          let item = new Weapon();
          item.copyInto(obj);
          this.weapons.push(item);
        } else if (obj.type === 'gear') {
          let item = new Gear();
          item.copyInto(obj);
          this.gear.push(item);
        }
      }
    });
  }

  loadDzWest() {
    this.dataService.getDzWest().subscribe( json => {
      for(var i = 0; i < json.length; i++) {
        var obj = json[i];
        if (obj.type === 'gear-mod') {
          let item = new GearMod();
          item.copyInto(obj);
          this.gearMods.push(item);
        } else if (obj.type === 'weapon-mod') {
          let item = new WeaponMod();
          item.copyInto(obj);
          this.weaponMods.push(item);
        } else if (obj.type === 'weapon') {
          let item = new Weapon();
          item.copyInto(obj);
          this.weapons.push(item);
        } else if (obj.type === 'gear') {
          let item = new Gear();
          item.copyInto(obj);
          this.gear.push(item);
        }
      }
    });
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
    // console.log(item);
    if (item && item.rarity === 'header-he') {
      if (this.isFilteredHE) {
        return false;
      }
    }

    if (this.filteredKeyword != '') {
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
    this.filteredKeyword = keyword
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

};
