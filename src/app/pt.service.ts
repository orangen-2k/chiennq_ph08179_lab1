import { Injectable } from '@angular/core';
import { databenhvien} from './Thongtintable';
import { Benhvien} from './Benhvien';

@Injectable()
export class PtService {

  benhvien = databenhvien;
  constructor() { }

  getdatabv(){
    return this.benhvien;
  }
}