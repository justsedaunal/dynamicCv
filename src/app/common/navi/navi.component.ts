import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GetUserData } from 'src/app/models/getUserData';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  users=GetUserData
  @Output() newItemEvent=new EventEmitter<boolean>();
  constructor(private router:Router){}
  ngOnInit(): void {}

  createSubmit(){
      this.newItemEvent.emit(true);
      this.router.navigateByUrl("/new-cv")
    }

}
