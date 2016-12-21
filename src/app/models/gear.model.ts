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

  copyInto(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = obj[prop];
      }
    }
  }

}
