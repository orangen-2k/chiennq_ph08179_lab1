import { Component, OnInit } from '@angular/core';
import { Benhvien} from './Benhvien';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
   title = "Thông tin danh sách bệnh viện hiện nay";
   ngOnInit() {
  }
  databv: Array<Benhvien> = [
    new Benhvien(1, "FPT Polytechnic", 'https://i.ytimg.com/vi/38SIAv0q5jA/hqdefault.jpg',"Vũ Chí Thành","Hà Nội",100,100,0),
    new Benhvien(2, "Bách khoa", 'https://i.ytimg.com/vi/uu31fKVmWw0/maxresdefault.jpg',"Lê Lộc Cao","Đà Nẵng",17,3,2),
    new Benhvien(3, "FPT Univorcity",'https://i.ytimg.com/vi/tQV3MrnZUyg/maxresdefault.jpg', "Phùng Chí Thanh",3,14,7),
    new Benhvien(4, "Sư phạm",'https://i.ytimg.com/vi/ohw1P8RbsIs/maxresdefault.jpg',"Phạm Ngọc Thạo","Cà Mau",14,2,6),
  ];


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