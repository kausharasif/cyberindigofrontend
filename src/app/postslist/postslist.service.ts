import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class postslistService {

  constructor(private http: HttpClient) {}

  fetchpost() {
    return this.http.get('http://127.0.0.1:8000/api/getallpost/1');
  }

}
