import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OpeningHoursComponent } from './opening-hours/opening-hours.component';
import { PracticeServiceComponent } from './practice-service/practice-service.component';
import { FeesComponent } from './fees/fees.component';
import { ServiceInformationComponent } from './service-information/service-information.component';
import { UsefulFormsComponent } from './useful-forms/useful-forms.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'opening-hours', component: OpeningHoursComponent },
  { path: 'practice-services', component: PracticeServiceComponent },
  { path: 'fees', component: FeesComponent },
  { path: 'service-information', component: ServiceInformationComponent },
  { path: 'useful-forms', component: UsefulFormsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
