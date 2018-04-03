import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserdataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserdataProvider {

  constructor(public http: Http) {
    console.log('Hello UserdataProvider Provider');
  }

  get_user() {
    let url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(url).map((res)=>res.json());
    // console.log(this.http.get(url));
  }

}
