import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactcompanyComponent } from './contactcompany/contactcompany.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewregisterComponent } from './newregister/newregister.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ContactcompanyComponent,
    ContactmeComponent,
    PagenotfoundComponent,
    NewregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
