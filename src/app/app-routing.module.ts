import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemLayoutComponent } from './item-layout/item-layout.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [
  { path:'' , component: LinksComponent },
  { path:'item' , component: ItemLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
