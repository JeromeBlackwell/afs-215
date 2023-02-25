var User = require('./execprogram.js')

let name
var user1 = new User(2,7)
var user2 = new User(25, 40, name ="Mike", age = 22)
var user3 = new User(5,2)

console.log("****user1****")
console.log(user1.add())
console.log(user1.sub())
console.log(user1.mult())
console.log(user1.div())
console.log(user1.userInfo())


console.log("****user2****")
console.log(user2.add())
console.log(user2.sub())
console.log(user2.mult())
console.log(user2.div())
console.log(user2.userInfo())


console.log("****user3****")
console.log(user3.Call())