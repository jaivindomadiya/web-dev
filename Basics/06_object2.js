//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = 12
tinderUser.name = "Jaivin"
tinderUser.email = "jaivin@gmail.com"

// console.log(tinderUser)

const regUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Jaivin",
            lastname : "Patel"
        }
    }
}

// console.log(regUser.fullname.userfullname.lastname)

//merge object
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

//const obj3 = {obj1, obj2}
//console.log(obj3)

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3)


const obj3 = {...obj1,...obj2}
// console.log(obj3)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

const course = {
    coursename : "JS",
    price : 999,
    instructor : "Jaivin"
}
// course.instructor  / we need to write every time this thing so..

const {instructor} = course
console.log(instructor)  //here we do not write course.instructor every time so we create like