import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
   title = "Thông tin danh sách bệnh viện hiện nay";
   ngOnInit() {
  }
  databv = [
    {
      id: 1,
      tenbv: "FPT Polytechnic",
      anhbv:'https://i.ytimg.com/vi/38SIAv0q5jA/hqdefault.jpg',
      tengd: "Vũ Chí Thành",
      diachi: "Hà Nội",
      socanhiem: "100",
      socachua: "100",
      socatu: "0",
    },
    {
      id: 2,
      tenbv: "FPT Univorcity",
      anhbv:'https://i.ytimg.com/vi/tQV3MrnZUyg/maxresdefault.jpg',
      tengd: "Phùng Chí Thanh",
      diachi: "Cao Bằng",
      socanhiem: "39",
      socachua: "15",
      socatu: "6",
    },
    {
      id: 3,
      tenbv: "Bách khoa",
      anhbv:'https://i.ytimg.com/vi/uu31fKVmWw0/maxresdefault.jpg',
      tengd: "Lê Lộc Cao",
      diachi: "Đà Nẵng",
      socanhiem: "18",
      socachua: "4",
      socatu: "2",
    },
    {
      id: 4,
      tenbv: "Sư phạm",
      anhbv:'https://i.ytimg.com/vi/ohw1P8RbsIs/maxresdefault.jpg',
      tengd: "Phạm Ngọc Thạo",
      diachi: "Cà Mau",
      socanhiem: "64",
      socachua: "32",
      socatu: "12",
    }
  ];
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

  xoatt(chuyen){
    this.databv = this.databv.filter(function(item){
      return item != chuyen;
    });
  }

  chuy(chuyen){
    this.data = chuyen;
  }
  
}