export class WeaponMod {

  jsonType: string = 'weapon-mod';

  name: string;
  vendor: string;
  price: string;
  attributes: string;

  copyInto(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = obj[prop];
      }
    }
  }

}
