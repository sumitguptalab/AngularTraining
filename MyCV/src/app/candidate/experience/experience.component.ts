import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  workExperinces = [];
  constructor() { }

  ngOnInit() {
    this.workExperinces = [
      '1 year at ABC',
      '2 years at xyz'
    ];
  }

}
