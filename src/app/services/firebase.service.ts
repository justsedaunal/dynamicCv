import { GetUserData, GetUserEducation } from './../models/getUserData';
import { Injectable } from '@angular/core';
import { Database, get, onValue, ref, set } from '@angular/fire/database';
import { User } from '../models/user';
import { Experience } from '../models/experience';
import { Skill } from '../models/skill';
import { Certificate } from '../models/certificate';
import { Education } from '../models/education';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  constructor(public dataBase: Database) { }
  getUser(userName: string) {
    const startConfRef = ref(this.dataBase, `user/${userName}`);
    onValue(startConfRef, (snapshot) => {
      const data: User = snapshot.val();
      GetUserData.email = data.email;
      GetUserData.firstName = data.firstName;
      GetUserData.lastName = data.lastName;
      GetUserData.imgUrl = data.imgUrl;
      GetUserData.country = data.country;
      GetUserData.phoneNumber = data.phoneNumber;
      GetUserData.linkedln=data.linkedln;
      GetUserData.twitter= data.twitter;
      GetUserData.district = data.district;
      GetUserData.foreword = data.foreword;
      GetUserData.github = data.foreword;
      GetUserData.userName = data.userName;


    });
  }
  getEducation(userName:string){
    const startConfRef = ref(this.dataBase,`educations/${userName}`);
    onValue(startConfRef,(snapshot)=>{
      const data  = snapshot.val();
      console.error(userName)
      GetUserEducation.universityName = data.universityName;
      GetUserEducation.universityDepartment = data.universityDepartment;
    })

  }


 async getUserControl(userName: string) {

    var control = false
    const snapshot = await get(ref(this.dataBase, `user/${userName}`))
    return snapshot.val();
  }

  setUser(userModel: User) {
    set(ref(this.dataBase, 'user/' + userModel.userName), {
      email: userModel.email,
      firstName: userModel.firstName,
      lastName: userModel.lastName,
      district:  userModel.district,
      country:  userModel.country,
      phoneNumber:  userModel.phoneNumber,
      foreword:  userModel.foreword,
      linkedln:  userModel.linkedln,
      github:  userModel.github,
      twitter: userModel.twitter,
      imgUrl:  userModel.imgUrl,
    });
  }
  async getInterests(userName:string){
    const snapshot = await get(ref(this.dataBase,`interests/${userName}`))
    return snapshot.val();

  }
async getExperience(userName:string){
  const snapshot = await get(ref(this.dataBase, `experiences/${userName}`))
    return snapshot.val();
}

async getSkills(userName:string) {
  const snapshot = await get(ref(this.dataBase, `skills/${userName}`))
  return snapshot.val();
}

  setExperience(experienceModel: Experience, userName: string) {
    set(ref(this.dataBase, 'experiences/' + userName), experienceModel);
  }
  setSkill(skillModel: Skill, userName: string) {
    set(ref(this.dataBase, 'skills/' + userName), skillModel);
  }
  setCertificate(certificateModel: Certificate, userName: string) {
    set(ref(this.dataBase, 'certificates/' + userName), certificateModel);
  }
  setEducation(educationModel:Education, userName: string){
    set(ref(this.dataBase,'educations/'+userName), educationModel)
  }
  setInterest(interest:string, userName:string){
    set(ref(this.dataBase,'interests/'+userName), {
      description:interest
    })
  }
}
