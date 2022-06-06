class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) { // 주어진 단어가 아직 사전에 존재하지 않으면
            this.words[word.term] = word.def;
        }
    }
    def(term) {
        return this.words[term];
    }
    update(word) {
        if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        }
    }
    del(term) {
        if (this.words[term] !== undefined) {
            delete this.words[term];
        }
    }
    // static method - js
    static hello() {
        return "hello";
    }
}
class Word {
    constructor(
    // public 이지만 변경불가능하게 하려면 readonly
    term, def) {
        this.term = term;
        this.def = def;
    }
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
