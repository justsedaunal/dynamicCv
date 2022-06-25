import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './components/pages/cv/cv.component';
import { NewCvComponent } from './components/pages/new-cv/new-cv.component';

const routes: Routes = [
  {path: '', component: CvComponent},
  {path: 'cv/:userName', component: CvComponent},
  {path:"new-cv",component:NewCvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
