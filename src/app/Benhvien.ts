export class Benhvien{
      id: number;
      tenbv: string;
      anhbv: string;
      tengd: string;
      diachi: string;
      socanhiem: number;
      socachua: number;
      socatu: number;
      constructor(id=0,tenbv="",anhbv="",tengd="",diachi="",socanhiem=1,socachua=2,socatu=3,){
        this.id=id;
        this.tenbv=tenbv;
        this.anhbv=anhbv;
        this.tengd=tengd;
        this.diachi=diachi;
        this.socanhiem=socanhiem;
        this.socachua=socachua;
        this.socatu=socatu;
      }
}