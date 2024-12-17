import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LoginService} from "./services/login.service";
import {tryUnwrapForwardRef} from "@angular/compiler-cli/src/ngtsc/annotations/common";

export const loginGuardGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if(loginService.isAuth()){
    router.navigate([loginService.redirectUrl])
    return false;
  }
  return  true;

};
