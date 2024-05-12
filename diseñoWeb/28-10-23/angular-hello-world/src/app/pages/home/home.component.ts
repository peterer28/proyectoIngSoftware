import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hoteleService: HotelesService
  listaHoteles: any[]=[];
  constructor ( private login: LoginService, private router: Router, hotel_servicio: HotelesService) {
    this.hoteleService=hotel_servicio    
  }
  ngOnInit(): void {    
    this.hoteleService.hoteles().subscribe({next:(data)=>{this.listaHoteles=data}})
  }

  onClick(id: number): void {
    
    this.router.navigate(['detalles/'+id])
  }

  logout(){
    this.login.logout()
    this.router.navigate(['login'])
  }
}
