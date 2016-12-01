export class GearMod {

  jsonType: string = 'gear-mod';

  name: string;
  vendor: string;
  stat: string;
  price: string;
  attribute: string;

  copyInto(obj) {
    for (var prop in obj) this[prop] = obj[prop];
  }

}
