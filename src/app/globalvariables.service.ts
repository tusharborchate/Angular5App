import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalvariablesService {
 login:boolean=false;
 redirectUrl:string;
  constructor() { }
}
