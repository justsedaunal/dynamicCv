import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
routeUrl:string;
createVisible: boolean=false;
  constructor(private firebaseService: FirebaseService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param['userName']) {
        this.firebaseService.getUser(param['userName']);
      } else {
        this.firebaseService.getUser('justsedaunal');
      }
    });
  }

}
