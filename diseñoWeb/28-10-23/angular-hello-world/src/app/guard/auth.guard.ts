import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(LoginService)  
  const router = inject(Router)
  let ret=auth.verificarlogin();
  if(!ret){
    router.navigate(['login'])
  }
  return ret
};
