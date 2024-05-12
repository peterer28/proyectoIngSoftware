import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {
  constructor(private login: LoginService, private router: Router){}
  formulario = new FormGroup({usuario: new FormControl<string>('', [Validators.required]), contrasenya: new FormControl('', [Validators.required]) })

  btnIngresar(){
    if(this.formulario.invalid){
      return 
    }
    const usuario= this.formulario.controls.usuario.value as string
    const contrasenya= this.formulario.controls.contrasenya.value as string
    let auth = this.login.login(usuario, contrasenya)
    if(auth==1){
      this.router.navigate(['home'])
    }
  }
}
