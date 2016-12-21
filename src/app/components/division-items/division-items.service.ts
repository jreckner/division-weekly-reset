import { Injectable } from '@angular/core';
import { WeeklyResetDataService } from '../../services/weekly-reset-data.service';
import { GearMod } from '../../models/gear-mod.model';
import { WeaponMod } from "../../models/weapon-mod.model";
import { Weapon } from "../../models/weapon.model";
import { Gear } from "../../models/gear.model";

@Injectable()
export class DivisionItemsService {

  public gear: Gear[] = [];
  public gearMods: GearMod[] = [];

  public weapons: Weapon[] = [];
  public weaponMods: WeaponMod[] = [];

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
    this.dataService.getBoo().subscribe(json => {
      for (var i = 0; i < json.length; i++) {
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
    this.dataService.getSpecialEquipment().subscribe(json => {
      for (var i = 0; i < json.length; i++) {
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
    this.dataService.getLzEast().subscribe(json => {
      for (var i = 0; i < json.length; i++) {
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
    this.dataService.getLzWest().subscribe(json => {
      for (var i = 0; i < json.length; i++) {
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
    this.dataService.getDz().subscribe(json => {
      for (var i = 0; i < json.length; i++) {
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
    this.dataService.getDzEast().subscribe(json => {
      for (var i = 0; i < json.length; i++) {
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
    this.dataService.getDzWest().subscribe(json => {
      for (var i = 0; i < json.length; i++) {
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

  dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a,b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

  getGearSortedByName() {
    return this.gear.sort(this.dynamicSort('name'));
  }

  getGearModsSortedByName() {
    return this.gearMods.sort(this.dynamicSort('name'));
  }

  getWeaponsSortedByName() {
    return this.weapons.sort(this.dynamicSort('name'));
  }

  getWeaponModsSortedByName() {
    return this.weaponMods.sort(this.dynamicSort('name'));
  }

}
