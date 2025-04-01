
if(true){
    let a = 10
    var b = 20
    const c = 30
    d = 40
}

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


console.log(addOne(5))
function addOne(num)
{
    return num+1
} // it is running and okay running


addTwo(5)
const addTwo = function(num){
    return num
}  // this give us Error (concept in js which is hoistik (remining this concept for understanding))