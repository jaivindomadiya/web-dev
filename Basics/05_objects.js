//singleton

const mySym = Symbol("key1")

const user = {
    name:"Jaivin",
    email : "Jaivin@gmail.com",
    age : 18,
    [mySym] : "key1"
}

console.log(user[mySym])

user.greeting = function(){
    console.log("Hello function")
}
console.log(user.greeting)
console.log(user.greeting())
