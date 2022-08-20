import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/Rx';
import { Login } from '../login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  

  constructor(private _http: HttpClient,private router: Router) { }
 headers= new HttpHeaders();
  users:any;

  // private headers = new Headers({'Content-Type': 'application/json'});
  title = 'Laravel Angular 4 App';
  onSubmit(form: NgForm){
    var formData: any = new FormData();
    // formData.append("name1",form.name1);
    // formData.append("email1", form.email1);
    console.log(JSON.stringify(form));
      // return this._http.post('http://127.0.0.1:8000/api/signup', JSON.stringify(form.value), {headers: this.headers})
      //  .toPromise()
      //  .catch(this.handleError);
      this._http.post('http://127.0.0.1:8000/api/signup', form).subscribe(
        response => {
          this.users = response;
          if(this.users.status == 200)
          {
            this.router.navigate(['/login']);
          }
          console.log(this.users.status);
        },
        (error) => console.log(error)
      )
   
                
}
private handleError(error: any): Promise<any> {
console.error('An error occurred', error); // for demo purposes only
return Promise.reject(error.message || error);
}
  // onSubmit(form: NgForm){
  // 	console.log(form.value);
  // }
  ngOnInit(): void {
  }

}
