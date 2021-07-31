import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontComponent } from './font/font.component';

const routes: Routes = [
  

  {
    path:'here',component:FontComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
