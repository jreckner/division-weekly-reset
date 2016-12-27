import { Guid } from "../services/guid-service";
import { md5 } from '../services/md5-service';

export class WeaponMod {

  jsonType: string = 'weapon-mod';

  name: string;
  vendor: string;
  price: string;
  attributes: string;

  uuid: string = Guid.newGuid();

  getHash(): string {
    return md5(this.name + this.vendor + this.price + this.attributes);
  }

  copyInto(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = obj[prop];
      }
    }
  }

}
