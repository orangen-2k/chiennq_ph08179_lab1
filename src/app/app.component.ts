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
    new Benhvien(1, "FPT Polytechnic", 'https://photo-2-baomoi.zadn.vn/w1000_r1/2019_10_09_146_32494582/0ad50da5bde554bb0df4.jpg',"Vũ Chí Thành","Hà Nội",100,100,0),
    new Benhvien(2, "Bách khoa", 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLquwL3U9c4MwkN0TKUo4UUHKcrZU8PeYQMVRmWEe3Ru4ppH2o',"Lê Lộc Cao","Đà Nẵng",17,3,2),
    new Benhvien(3, "FPT Univorcity",'https://www.vietinbank.vn/sites/mediafile/CDL066787', "Phùng Chí Thanh",3,14,7),
    new Benhvien(4, "Sư phạm",'https://photo-1-baomoi.zadn.vn/w1000_r1/2019_11_21_188_33042825/6eb482440a04e35aba15.jpg',"Phạm Ngọc Thạo","Cà Mau",14,2,6),
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