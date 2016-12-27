// http://stackoverflow.com/questions/26501688/a-typescript-guid-class

import { Injectable } from '@angular/core';

@Injectable()
export class Guid {
  constructor() {
  }

  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }

}
