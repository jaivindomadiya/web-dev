let name = "Patel"
let anotherName = name
anotherName = "Jaivin"

console.log(anotherName)
console.log(name)   // here name is change because in stack there store a copy of a variable

// let try in non premitive datatype okay
userOne = {
    email : "jaivin@gmail.com",
    upi : 12345,
}

console.log(userOne.email)


userTwo = userOne
userTwo.email = "patel@gmail.com";

console.log(userOne.email)
console.log(userTwo.email)


// let a = "1";
// let b = 1

// console.log(a===b);