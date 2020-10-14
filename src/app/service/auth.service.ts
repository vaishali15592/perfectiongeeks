import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated(): any {
    const isAuth = localStorage.getItem('loginUser');
    if(isAuth){
      const isAuthenticated = true;
      return isAuthenticated;
    }else{
      const isAuthenticated = false;
      return isAuthenticated;
    }
    }
    
  constructor() { }
}
