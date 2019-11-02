import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LinksComponent } from './links/links.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { ItemLayoutComponent } from './item-layout/item-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { PoolComponent } from './pool/pool.component';
import { FooterComponent } from './footer/footer.component';
import { PacksMenuComponent } from './packs-menu/packs-menu.component';
import { MenuTabComponent } from './menu-tab/menu-tab.component';
import { IconsTabComponent } from './icons-tab/icons-tab.component';
import { DjSetsComponent } from './dj-sets/dj-sets.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinksComponent,
    ItemLayoutComponent,
    HomePageComponent,
    ContactComponent,
    AboutComponent,
    StoreComponent,
    PoolComponent,
    FooterComponent,
    PacksMenuComponent,
    MenuTabComponent,
    IconsTabComponent,
    DjSetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
