import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1: string[]=["Lisa","E123","lisa@gmail.com"]
  info2: string[]=["Jennie","E134","jennie@gmail.com"]
  info3: string[]=["Jisoo","E145","jisoo@gmail.com"]
  info4: string[]=["Rose","E156","rose@gmail.com"]

  getInfo1():string[]{
    return this.info1
  }

  getInfo2():string[]{
    return this.info2
  }

  getInfo3():string[]{
    return this.info3
  }

  getInfo4():string[]{
    return this.info4
  }
  addInfo(info){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    this.info4.push(info)
    return this.info1
  }
  constructor() { }
}
