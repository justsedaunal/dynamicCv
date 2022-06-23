import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  constructor(private firebaseService: FirebaseService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      if (param["userName"]) {
        this.firebaseService.getUser(param["userName"])
      }
      else{
        this.firebaseService.getUser("justsedaunal")
      }
    })
    // this.firebaseService.getUser("justsedaunal")


  }

}
