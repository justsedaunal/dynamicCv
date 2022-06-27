import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Certificate } from 'src/app/models/certificate';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  certificate: Certificate[]
  dataLoadded=false

  constructor(private activatedRoute:ActivatedRoute,private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (param) => {
      if (param['userName']) {
      this.certificate = await this.firebaseService.getCertificate(param['userName']);
      } else {
        this.certificate=await this.firebaseService.getCertificate('justsedaunal');
      }
      this.dataLoadded=true;
    });
  }

}
