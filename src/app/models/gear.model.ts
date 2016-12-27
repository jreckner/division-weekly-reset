import { md5 } from '../services/md5-service';

export class Gear {

  jsonType: string = 'gear';

  rarity: string;
  vendor: string;
  name: string;
  score: string;
  armor: string;
  price: string;
  fire: string;
  stam: string;
  elec: string;
  major: string;
  minor: string;

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
