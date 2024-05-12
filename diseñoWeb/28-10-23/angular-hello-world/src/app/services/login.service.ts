import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  login(usuario: string, contrasenya: string) {
    console.log(usuario, contrasenya)
    if(usuario!= 'admin'|| contrasenya!='123456'){
      return 0
    }
    else{
      localStorage.setItem('auth','verdadero')
      return 1
    }
  }

  logout(){
    localStorage.removeItem('auth')
  }

  verificarlogin(){
    return localStorage.getItem('auth')!=null
  }
}
