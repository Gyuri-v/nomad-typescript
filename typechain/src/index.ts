import crypto from "crypto"; 
// 모듈에 default export가 없다고 표시되기 때문에 import * as ~~ 작성하거나, tsconfig에서 "esModuleInterop": true 설정

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}
class Block implements BlockShape{
    public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string,
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash:string, height:number, data:string){
    const toHash = `${prevHash}${height}${data}`;

    // nodejs의 패키지 중 하나인  crypto 사용
  }
}