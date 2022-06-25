import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './common/navi/navi.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ExperienceComponent } from './components/pages/experience/experience.component';
import { EducationComponent } from './components/pages/education/education.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { InterestsComponent } from './components/pages/interests/interests.component';
import { CertificateComponent } from './components/pages/certificate/certificate.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

/**********    firebase imports  start      *************** */
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideDatabase } from '@angular/fire/database';
import { getDatabase } from 'firebase/database';
import { CvComponent } from './components/pages/cv/cv.component';
import { NewCvComponent } from './components/pages/new-cv/new-cv.component';
/**********    firebase imports end       *************** */




@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    CertificateComponent,
    CvComponent,
    NewCvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideDatabase(()=>getDatabase())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
