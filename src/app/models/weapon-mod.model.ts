export class WeaponMod {

  jsonType: string = 'weapon-mod';

  name: string;
  vendor: string;
  price: string;
  attributes: string;

  copyInto(obj) {
    for (var prop in obj) this[prop] = obj[prop];
  }

}
