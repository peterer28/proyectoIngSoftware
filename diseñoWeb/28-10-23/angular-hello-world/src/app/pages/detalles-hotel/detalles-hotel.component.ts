import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-detalles-hotel',
  templateUrl: './detalles-hotel.component.html',
  styleUrls: ['./detalles-hotel.component.css']
})
export class DetallesHotelComponent {
  hotel: any
  constructor(private login: LoginService, private ruta: ActivatedRoute, private hotelesObt: HotelesService, private router: Router){
    this.ruta.params.subscribe({next:(id)=>{this.obtenerHotel(id['id_hotel'])}})
    
  }
  obtenerHotel(id: number){
      this.hotelesObt.hoteleId(id).subscribe({next:(data)=>{this.hotel=data}})
  }

  btnregresar(){
    this.router.navigate(['home'])
  }

  logout(){
    this.login.logout()
    this.router.navigate(['login'])
  }

}
