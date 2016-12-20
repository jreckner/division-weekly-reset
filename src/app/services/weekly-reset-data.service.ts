import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeeklyResetDataService {
  constructor(private http:Http) {
  }

  getBlueprints() {
    return this.http.get('./division/blueprints.json').map(res => res.json());
  }

  getBoo() {
    return this.http.get('./division/boo.json').map(res => res.json());
  }

  getSpecialEquipment() {
    return this.http.get('./division/special-equipment.json').map(res => res.json());
  }

  getLzEast() {
    return this.http.get('./division/lz-east.json').map(res => res.json());
  }

  getLzWest() {
    return this.http.get('./division/lz-west.json').map(res => res.json());
  }

  getDz() {
    return this.http.get('./division/dz.json').map(res => res.json());
  }

  getDzEast() {
    return this.http.get('./division/dz-east.json').map(res => res.json());
  }

  getDzWest() {
    return this.http.get('./division/dz-west.json').map(res => res.json());
  }
}
