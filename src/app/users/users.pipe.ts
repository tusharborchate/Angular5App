import { PipeTransform, Pipe } from '@angular/core';
import { RegistrationModel } from '../models/RegistrationModel';





@Pipe({name: 'customerfilter'})
export class UsersFilter implements PipeTransform
{
   
     transform(users:RegistrationModel[],searchterm:string):RegistrationModel[]
     {
       if(!users || !searchterm)
       {
           return users;
       }
         var data= users.filter(user=>user.EmailId.toLowerCase().indexOf(searchterm.toLowerCase())!==-1);
         if(data.length==0)
         {
             return null;
         }
         else{
             return data;
         }
     }
}