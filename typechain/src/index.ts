type Words = {
  [key:string]: string
}

class Dict {
  private words: Words
  constructor(){
      this.words = {}
  }
  add(word:Word){
      if(this.words[word.term] === undefined){ // 주어진 단어가 아직 사전에 존재하지 않으면
          this.words[word.term] = word.def;
      }
  }
  def(term:string){
      return this.words[term]
  }
  update(word: Word) {
      if (this.words[word.term] !== undefined) {
          this.words[word.term] = word.def;
      }
  }
  del(term: string) {
      if (this.words[term] !== undefined) {
          delete this.words[term];
      }
  }
  // static method - js
  static hello() {
      return "hello"
  }
}

class Word {
  constructor(
      // public 이지만 변경불가능하게 하려면 readonly
      public readonly term:string,
      public readonly def:string,
  ){}
}

const kimchi = new Word("kimchi", "한국의 음식");
const pizza = new Word("banana", "원숭이는 바나나를 좋아해");

const dict = new Dict();

dict.add(kimchi);
dict.add(pizza);
console.log(dict.def("kimchi"));
console.log(dict.def("banana"));

dict.update(new Word("kimchi", "한국인이 좋아하는 음식"));
console.log(dict.def("kimchi"));
console.log(dict.def("banana"));

dict.del("banana");
console.log(dict.def("pizza"));
console.log(dict.def("banana"));