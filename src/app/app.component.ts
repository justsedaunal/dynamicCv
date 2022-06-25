import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  routeUrl: string;
  constructor(private firebaseService: FirebaseService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.routeUrl = this.router.url;
    this.activatedRoute.params.subscribe((param) => {
      if (param['userName']) {
        this.firebaseService.getUser(param['userName']);
      } else {
        this.firebaseService.getUser('justsedaunal');
      }
    });
  }
  title = 'dynamicCv';
}
