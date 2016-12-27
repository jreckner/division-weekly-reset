import { Guid } from "../services/guid-service";
import { md5 } from '../services/md5-service';

export class GearMod {

  jsonType: string = 'gear-mod';

  name: string;
  vendor: string;
  stat: string;
  price: string;
  attribute: string;
  uuid: string = Guid.newGuid();

  getHash(): string {
    return md5(this.name + this.vendor + this.stat + this.price + this.attribute);
  }

  copyInto(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = obj[prop];
      }
    }
  }

}
