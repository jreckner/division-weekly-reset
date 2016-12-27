import { md5 } from '../services/md5-service';

export class GearMod {

  jsonType: string = 'gear-mod';

  name: string;
  vendor: string;
  stat: string;
  price: string;
  attribute: string;

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
