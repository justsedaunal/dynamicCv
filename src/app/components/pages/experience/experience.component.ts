import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experience } from 'src/app/models/experience';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  dataLoadded=false
  experience:Experience

  constructor(private firebaseService:FirebaseService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (param) => {
      if (param['userName']) {
      this.experience=await this.firebaseService.getExperience(param['userName']);
      } else {
        this.experience=await this.firebaseService.getExperience('justsedaunal');
      }
      this.dataLoadded=true;
    });
  }

}
