import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    Menu1Component,
    Menu2Component,
    Menu3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path : 'menu1', component : Menu1Component},
      {path : 'menu2', component : Menu2Component},
      {path : 'menu3', component : Menu3Component},
      {path : '**', component : Menu1Component},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
