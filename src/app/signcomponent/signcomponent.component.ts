import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signcomponent',
  templateUrl: './signcomponent.component.html',
  styleUrls: ['./signcomponent.component.css']
})
export class SigncomponentComponent implements OnInit {

  constructor(private _http: HttpClient,private router: Router) { }
  users:any;
  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    var formData: any = new FormData();
    // formData.append("name1",form.name1);
    // formData.append("email1", form.email1);
    console.log(JSON.stringify(form));
      // return this._http.post('http://127.0.0.1:8000/api/signup', JSON.stringify(form.value), {headers: this.headers})
      //  .toPromise()
      //  .catch(this.handleError);
      this._http.post('http://127.0.0.1:8000/api/login', form).subscribe(
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
}
