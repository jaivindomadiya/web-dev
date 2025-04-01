function calculateValue(value1,value2,...num1){
    return value1,value2,num1;
}

// console.log(calculateValue(200,222,333,444))


const user = {
    userName : "Jaivin",
    age : 23,
    eamil : "jaivin@gmail.com"
}
function handleObject(anyobject){
    console.log(`user name is ${anyobject.userName} and age is ${anyobject.age}`)
}
handleObject(user)



const arr = [1,2,3,4,5]
function returnSecondValue(newarr)
{
    return newarr[2]
}
console.log(returnSecondValue(arr))