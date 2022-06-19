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
    return crypto.createHash("sha256").update(toHash).digest("hex")

    // nodejs의 패키지 중 하나인  crypto 사용
  }
}

class Blockchain {
  private blocks: Block[]
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if(this.blocks.length === 0) return ""
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data:string){
    const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    return [...this.blocks]; // this.blocks 로 리턴해주기 때문에, 외부에서 접근이 불가능 하도록 아예 새로운 배열을 리턴 해 줌
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

console.log(blockchain.getBlocks());