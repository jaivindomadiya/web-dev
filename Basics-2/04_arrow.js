const user = {
    name : "jaivin",
    price : 999,
    
    welcomeMessage : function(){
        // console.log(`${this.name} , welcome to website`);
        // console.log(this);
        
    }
}

user.welcomeMessage();

user.name = "domadiya";
user.welcomeMessage();

// console.log(this)  //{}


// function chai(){
//     console.log(this)
// }
// chai()


// const chai = function(){
//     let user = "jaivin";
//     console.log(this.user)
// }
// chai()


const chai = () => {
    let user = "jaivin";
    console.log(this.user)
}
// chai()


const addTwo = (num1,num2) =>{
    return num1 + num2
}
console.log(addTwo(20,30))