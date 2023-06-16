import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router)

  console.log('Guard appelé')
  if(authService.isLoggedIn) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
