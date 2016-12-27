import { md5 } from '../services/md5-service';

export class WeaponMod {

  jsonType: string = 'weapon-mod';

  name: string;
  vendor: string;
  price: string;
  attributes: string;

  getHash(): string {
    let self = '';
    for (let i in this) {
      if (this.hasOwnProperty(i)) {
        self += this[i];
      }
    }
    return md5(self);
  }

  copyInto(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = obj[prop];
      }
    }
  }

}
