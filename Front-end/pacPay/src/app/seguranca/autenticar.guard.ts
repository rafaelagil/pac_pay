import { CanActivateFn, Router } from '@angular/router';

export const autenticarGuard: CanActivateFn = (route, state) => {
  const rota = new Router();

  if (localStorage.getItem('email') === undefined) {
    rota.navigateByUrl('/inicio');
  }

  // if (localStorage.getItem('token') == undefined) {
  //   rota.navigateByUrl('/inicio');
  // }
  return true;
};
