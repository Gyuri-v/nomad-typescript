interface User {
  firstName: string,
  lastName: string,
  sayHi(name:string): string,
  fullName(): string,
}
// 두개의 interface를 동시에 상속할 수 있음
interface Human {
  health: number,
}
class Player implements User, Human{
  // extends 대신 implements 을 사용하면 js 에는 interface는 사라지는데, 코드가 가벼워짐
  // typescript가 위의 해당 property 를 가지도록 강제시켜줌
  constructor(
      // interface에서 설정한 property 들은 public 이어야만 함
      public firstName: string,
      public lastName: string,
      public health: number,
  ){}
  fullName() {
      return `${this.firstName} ${this.lastName}`
  }
  sayHi(name:string) {
      return `Hello ${name}. I'm ${this.firstName}`
  }
}

// 함수에서 interface를 타입으로 쓸 수 있고, return 할 수도 있음
// function makeUser(user: User){
//   return "hi"
// }
function makeUser(user: User): User{
  return {
    firstName: "nico",
    lastName: "las",
    fullName: ()=> "xx",
    sayHi: (name)=> "string"
  }
}

makeUser({
  firstName: "nico",
  lastName: "las",
  fullName: ()=> "xx",
  sayHi: (name)=> "string"
})