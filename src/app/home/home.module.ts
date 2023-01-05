import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component'



@NgModule({
  declarations: [
    HomePageComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    SidebarComponent,
    NavbarComponent
  ]
})
export class HomeModule { }
