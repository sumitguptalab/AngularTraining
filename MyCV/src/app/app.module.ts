import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CandidateComponent } from './candidate/candidate.component';
import { ExperienceComponent } from './candidate/experience/experience.component';
import { EducationsComponent } from './candidate/educations/educations.component';


@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    ExperienceComponent,
    EducationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
