import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: "create", component: CreateComponent},
  {path: "view", component: ViewComponent},
  {path: "update/:id", component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
