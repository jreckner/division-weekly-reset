import { Guid } from "../services/guid-service";
import { md5 } from '../services/md5-service';

export class Weapon {

  jsonType: string = 'weapon';

  name: string;
  vendor: string;
  score: string;
  price: string;
  bonus: string;
  dmg: string;
  rpm: string;
  mag: string;
  talent1: string;
  talent2: string;
  talent3: string;

  uuid: string = Guid.newGuid();

  getHash(): string {
    return md5(this.name + this.vendor + this.score + this.price + this.bonus
      + this.dmg + this.rpm + this.mag + this.talent1 + this.talent2 + this.talent3);
  }

  copyInto(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = obj[prop];
      }
    }
  }

}
