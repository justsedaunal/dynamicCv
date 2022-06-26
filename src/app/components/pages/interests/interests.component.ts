import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Interest } from 'src/app/models/interest';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  interest: Interest
  dataLoadded=false

  constructor(private activatedRoute: ActivatedRoute,private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (param) => {
      if (param['userName']) {
      this.interest=await this.firebaseService.getInterests(param['userName']);
      } else {
        this.interest=await this.firebaseService.getInterests('justsedaunal');
      }
      this.dataLoadded=true;
    });
  }

}
