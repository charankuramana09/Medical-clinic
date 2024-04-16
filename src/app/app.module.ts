import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { OpeningHoursComponent } from './opening-hours/opening-hours.component';
import { PracticeServiceComponent } from './practice-service/practice-service.component';
import { FeesComponent } from './fees/fees.component';
import { ServiceInformationComponent } from './service-information/service-information.component';
import { UsefulFormsComponent } from './useful-forms/useful-forms.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OpeningHoursComponent,
    PracticeServiceComponent,
    FeesComponent,
    ServiceInformationComponent,
    UsefulFormsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
