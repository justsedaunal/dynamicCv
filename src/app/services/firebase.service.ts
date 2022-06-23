import { GetUserData } from './../models/getUserData';
import { Injectable } from '@angular/core';
import { Database, onValue, ref, set } from '@angular/fire/database';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class  FirebaseService {


  constructor(public dataBase: Database) { }
  getUser(userName: string) {

    const startConfRef = ref(this.dataBase, `user/${userName}`);
    onValue(startConfRef, (snapshot) => {
      const data: User = snapshot.val();
      console.log(data);
      GetUserData.email = data.email;
      GetUserData.firstName = data.firstName;
      GetUserData.lastName = data.lastName;
      GetUserData.imgUrl = data.imgUrl;
    });
  }
}
