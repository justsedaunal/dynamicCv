import { GetUserEducation } from './../../../models/getUserData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations = GetUserEducation
  constructor() { }

  ngOnInit(): void {
  }

}
