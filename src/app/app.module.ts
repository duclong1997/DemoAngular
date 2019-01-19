import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import  class of component 
import { ShowComponent } from './show/show.component';
import { FormInputComponent } from './form-input/form-input.component';

import { FormsModule} from '@angular/forms';
import { ListHeroComponent } from './list-hero/list-hero.component';
import {InforHeroComponent} from './infor-hero/infor-hero.component'
@NgModule({
  declarations: [
    AppComponent,
    // call class in component
    ShowComponent,
    FormInputComponent,
    ListHeroComponent,
    InforHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
