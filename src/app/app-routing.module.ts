import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemLayoutComponent } from './item-layout/item-layout.component';
import { LinksComponent } from './links/links.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StoreComponent } from './store/store.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PoolComponent } from './pool/pool.component';
import { PacksMenuComponent } from './packs-menu/packs-menu.component';
import { DjSetsComponent } from './dj-sets/dj-sets.component';

const routes: Routes = [
  { path:'' , component: HomePageComponent },
  // { path:'categories' , component: PacksMenuComponent },
  { path:'packs/:packsType' , component: LinksComponent },
  { path:'item/:package' , component: ItemLayoutComponent },
  // { path:'pool' , component: PoolComponent },
  // { path:'sets' , component: DjSetsComponent },
  { path:'sets' , component: PoolComponent },
  { path:'about' , component:AboutComponent },
  { path:'contact' , component:ContactComponent },
  { path:'**' , redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
