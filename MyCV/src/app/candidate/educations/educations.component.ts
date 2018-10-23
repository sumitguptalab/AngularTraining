import { Component, OnInit } from '@angular/core';
import { EducationService } from './education.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {
educations: string[];
  constructor(private education: EducationService) { }

  ngOnInit() {
    this.educations = this.education.getEducations();
  }
}
