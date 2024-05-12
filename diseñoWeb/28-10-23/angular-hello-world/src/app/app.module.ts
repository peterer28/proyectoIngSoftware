import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './pages/home/home.component';
import { DetallesHotelComponent } from './pages/detalles-hotel/detalles-hotel.component';
import {HttpClientModule}from '@angular/common/http';
import { SesionComponent } from './pages/sesion/sesion.component'

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserRegistrationComponent,
    HomeComponent,
    DetallesHotelComponent,
    SesionComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

