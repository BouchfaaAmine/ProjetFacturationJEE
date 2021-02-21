import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {KeycloakSecurityService} from './keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private securityService: KeycloakSecurityService) {

  }
  public getProduct(){
    return this.http.get('http://localhost:8081/products');
  }
}
