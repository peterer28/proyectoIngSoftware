import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './pages/home/home.component';
import { DetallesHotelComponent } from './pages/detalles-hotel/detalles-hotel.component';
import { SesionComponent } from './pages/sesion/sesion.component';
import { authGuard } from './guard/auth.guard';
import { notauthGuard } from './guard/notauth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate:[authGuard] },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'detalles/:id_hotel', component: DetallesHotelComponent, canActivate:[authGuard] },
  { path: 'login', component: SesionComponent, canActivate:[notauthGuard]},
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


