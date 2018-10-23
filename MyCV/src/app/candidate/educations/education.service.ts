import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  getEducations(): string[] {
    return  [
      'PhD',
      'Master',
      'Bachalars'
    ];
  }
}
