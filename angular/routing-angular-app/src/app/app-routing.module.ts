import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { ContactcompanyComponent } from './contactcompany/contactcompany.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewregisterComponent } from './newregister/newregister.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "register", component: RegisterComponent},
  {path: "register/:id", component: NewregisterComponent},
  {path: "login", component: LoginComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent, children: [
    {path: "contactcompany", component: ContactcompanyComponent},
    {path: "contactme", component: ContactmeComponent},

  ]},
  {path: "", component: HomeComponent},
  {path: "**", component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
