import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { postslistService } from './postslist.service';

@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.css']
})
export class PostslistComponent implements OnInit {
   private li:any;
   lis=[];
  private postdata:any;

  constructor(private http : HttpClient,private postslistService: postslistService) { }
  
  ngOnInit(): void {
    this.postslistService.fetchpost()
    .subscribe(response => {
      console.log(response);
       this.postdata = response;
       console.log(this.postdata);
      this.li=this.postdata.postdata;
      this.lis = this.li;
      console.log(this.lis);
    });
    // console.log(this.postslistService.fetchpost());
    // this.li = this.postslistService.fetchpost();
    // this.lis = this.li.postdata;
    console.log(this.lis);
    // this.http.get('http://127.0.0.1:8000/api/getallpost/1')
    // .subscribe(Response => {
 
    //   // If response comes hideloader() function is called
    //   // to hide that loader
    //   if(Response){ 
    //     hideloader();
    //   }
    //   console.log(Response)
    //   this.postdata = Response;
    //   this.li=this.postdata.postdata;
    //   this.lis = this.li;
    //   console.log(this.lis);
    //   // this.lis=this.li.list;
    // });
    // console.log(this.lis);
    // function hideloader(){
    //   //  $('#loading').css('display','none');

    // }
  }
  fetchPeople() {
    this.postslistService.fetchpost()
    .subscribe(response => {
      console.log(response);
       this.postdata = response;
       console.log(this.postdata);
      this.li=this.postdata.postdata;
      this.lis = this.li;
      console.log(this.lis);
    });
    console.log(this.lis);
  }
 
}
