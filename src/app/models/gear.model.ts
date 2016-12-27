import { Guid } from "../services/guid-service";
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

  uuid: string = Guid.newGuid();

  getHash(): string {
    return md5(this.name + this.vendor + this.rarity + this.price + this.score + this.armor
      + this.fire + this.stam + this.elec + this.major + this.minor);
  }

  copyInto(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = obj[prop];
      }
    }
  }

}
