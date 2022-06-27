import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetUserData } from 'src/app/models/getUserData';
import { User } from 'src/app/models/user';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  dataLoadded=false;
  users=GetUserData
  url:string =""
  @Output() newItemEvent=new EventEmitter<boolean>();
  constructor(private router:Router,private activatedRoute: ActivatedRoute,private firebaseService:FirebaseService){}

  ngOnInit(): void {




    this.url = this.router.url;
    var urlList = this.url.split('#');
    if (urlList.length > 1) {
      this.url = urlList[0];
    }
  }

  createSubmit(){
      this.newItemEvent.emit(true);
      this.router.navigateByUrl("/new-cv")
    }

}
