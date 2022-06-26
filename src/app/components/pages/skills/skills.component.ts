import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:Skill={
    imgUrl:""
  }

  constructor(private activatedRoute: ActivatedRoute,private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (param) => {
      if (param['userName']) {
      this.skills=await this.firebaseService.getSkills(param['userName']);
      } else {
        this.skills=await this.firebaseService.getSkills('justsedaunal');
      }
  })
}
}


