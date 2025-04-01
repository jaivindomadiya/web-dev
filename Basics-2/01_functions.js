function loginUser(name){
    if(name===undefined){
        return;
    }
    return `${name} is login`;
}

console.log(loginUser("jaivin"))

// function loginUser(name) {
//     if (name === undefined) {
//         return;
//     }
//     return `${name} is logged in`;
// }

// console.log(loginUser("Alice"));
// console.log(loginUser()); 