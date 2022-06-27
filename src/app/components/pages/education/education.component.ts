import { GetUserEducation } from './../../../models/getUserData';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  dataLoadded=false;
  education:Education[]
  educations = GetUserEducation
  constructor(private activatedRoute: ActivatedRoute,private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (param) => {
      if (param['userName']) {
      this.education=await this.firebaseService.getEducation2(param['userName']);
      } else {
        this.education=await this.firebaseService.getEducation2('justsedaunal');
      }
      this.dataLoadded=true;
    });
  }
}
