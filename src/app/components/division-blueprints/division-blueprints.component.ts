import { Component } from '@angular/core';
import { WeeklyResetDataService } from '../../services/weekly-reset-data.service';

@Component({
  selector: 'division-blueprints',
  templateUrl: 'division-blueprints.component.html'
})
export class DivisionBlueprintsComponent {


  title: string = 'Blueprints';

  blueprints;

  constructor(private dataService: WeeklyResetDataService) {
    this.blueprints = dataService.getBlueprints();
  }

};
