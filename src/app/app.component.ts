import { Component, OnInit } from '@angular/core';
import { PtService} from './pt.service';
import { Benhvien} from './Benhvien';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  
  title = "Thông tin danh sách bệnh viện hiện nay";

  ngOnInit() {
    this.getdatabv();
  }

  databv: Benhvien[];

  constructor(
    private ptService: PtService
  ){}

  getdatabv(){
   this.databv = this.ptService.getdatabv();
   console.log(this.ptService)
  }

  themtt(){
    if(this.data.id == null){
      let maxId = 0;
      this.databv.forEach(function(item){
        if(item.id >= maxId){
          maxId = item.id;
        }
      });
      this.data.id = ++maxId;
      this.databv.push(this.data);
    }
    this.cancel();
  }

  xoatt(chuyen){
    this.databv = this.databv.filter(function(item){
      return item != chuyen;
    });
  } 

  chuy(chuyen){
    this.data = chuyen;
  }
  
  cancel(){
    this.data = {
    id: null,
    tenbv: null,
    anhbv: null,
    tengd: null,
    diachi: null,
    socanhiem: null,
    socachua: null,
    socatu: null,
    }
  }
  
  data = {
    id: null,
    tenbv: null,
    anhbv: null,
    tengd: null,
    diachi: null,
    socanhiem: null,
    socachua: null,
    socatu: null,
  }
}