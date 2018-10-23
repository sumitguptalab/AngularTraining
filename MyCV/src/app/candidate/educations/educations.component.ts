import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {
educations = [];
  constructor() { }

  ngOnInit() {
    this.educations = [
      'PhD',
      'Master',
      'Bachalars'
    ];
  }

}
