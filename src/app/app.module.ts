import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalSectionComponent } from './components/personal-section/personal-section.component';
import { ProfessionalSectionComponent } from './components/professional-section/professional-section.component';
import { IntroComponent } from './components/personal-section/intro/intro.component';
import { BasicInformationComponent } from './components/personal-section/basic-information/basic-information.component';
import { WorkExperienceComponent } from './components/professional-section/work-experience/work-experience.component';
import { SkillsComponent } from './components/professional-section/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalSectionComponent,
    ProfessionalSectionComponent,
    IntroComponent,
    BasicInformationComponent,
    WorkExperienceComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
