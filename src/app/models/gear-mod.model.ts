export class GearMod {

  jsonType: string = 'gear-mod';

  name: string;
  vendor: string;
  stat: string;
  price: string;
  attribute: string;

  copyInto(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        this[prop] = obj[prop];
      }
    }
  }

}
