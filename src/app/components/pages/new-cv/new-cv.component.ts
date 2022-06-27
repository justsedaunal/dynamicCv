import { Experience } from './../../../models/experience';
import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Education } from 'src/app/models/education';
import { Skill } from 'src/app/models/skill';
import { Certificate } from 'src/app/models/certificate';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-cv',
  templateUrl: './new-cv.component.html',
  styleUrls: ['./new-cv.component.css']
})
export class NewCvComponent implements OnInit {
  private stepper: Stepper;
  experienceList: Experience[] = []
  educationList: Education[] = []
  skillsList: Skill[] = []
  interest: string;
  certificateList: Certificate[] = []
  userForm = new FormGroup({

    email: new FormControl("", [Validators.email]),
    firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl("", [Validators.required]),
    userName: new FormControl("", [Validators.required]),

    imgUrl: new FormControl("", [Validators.required]),
    district: new FormControl("", []),
    country: new FormControl("", []),
    phoneNumber: new FormControl("", []),
    foreword: new FormControl("", []),
    linkedln: new FormControl("", []),
    github: new FormControl("", []),
    twitter: new FormControl("", [])
  })
  constructor(private firebaseService: FirebaseService,private router: Router) { }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true
    })
    this.addItem()
    this.addEducation()
    this.addSkill()
    this.addCertificate()

  }
  next() {
    this.stepper.next();
  }
  next2() {
    this.stepper.previous();
  }

  // experience add
  addItem() {
    this.experienceList.push({
      jobTitle: "",
      jobLocation: "",
      jobDescription: "",
      date: ""
    })
  }
  // education add
  addEducation() {
    this.educationList.push({

      universityName: "",
      universityDepartment: ""
    })
  }
  // skill add
  addSkill() {
    this.skillsList.push({

      imgUrl: ""
    })
  }
  // certificate add
  addCertificate() {
    this.certificateList.push({
      name: ""
    })
  }


  async onSubmit() {

    if (this.userForm.valid) {

      if (await this.firebaseService.getUserControl(this.userForm.value.userName) == null) {
        this.firebaseService.setUser(this.userForm.value)


        this.firebaseService.setExperience(this.experienceList, this.userForm.value.userName)

        this.firebaseService.setCertificate(this.certificateList, this.userForm.value.userName)

        this.firebaseService.setEducation(this.educationList, this.userForm.value.userName)

        this.firebaseService.setSkill(this.skillsList, this.userForm.value.userName)
        this.firebaseService.setInterest(this.interest, this.userForm.value.userName)

        alert("cv created")
this.router.navigateByUrl("/cv/"+ this.userForm.value.userName)
      }
      //this.firebaseService.setUser(this.userForm.value)
    }


  }


}
