import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  name = 'Sumit Gupta';
  address = '11450 Grooms Rd, Blue Ash, Ohio, 45241';
  contactInfos = ['513-387-8965', 'test@test.com'];

  educations = [];
  constructor() { }

  ngOnInit() {
  }

}
