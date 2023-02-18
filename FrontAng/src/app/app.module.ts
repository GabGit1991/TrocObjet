import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppUserComponent } from './pages/app-user/app-user.component';
import { ObjectComponent } from './pages/object/list-objet/list-object.component';
import { DetailsObjectComponent } from './pages/object/details-object/details-object.component';


@NgModule({
  declarations: [
    AppComponent,
    AppUserComponent,
    ObjectComponent,
    DetailsObjectComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
