import { ProfessionalSectionComponent } from './components/professional-section/professional-section.component';
import { PersonalSectionComponent } from './components/personal-section/personal-section.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PersonalSectionComponent },
  { path: 'personal', component: PersonalSectionComponent },
  { path: 'professional', component: ProfessionalSectionComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
