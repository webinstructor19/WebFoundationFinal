// Regular Function 
function sayWelcome(user){
    console.log(`Welcome ${user}`)
}

function add(num1 , num2){
    return num1 + num2;
}

function mul(...numbers){
    let total = 1;
    for(let num of numbers){
        total *= num;
    }
    return total;
}
console.log(mul(1 , 2 , 3 , 4))

// Arrow Function ==> es6 =>es2015


let sayHello = user =>  user;

sayHello('Omnia')


var carName = 'Mercedes';
let car = {
    carName : "Bmw" , 
    getCarName : ()=>{
        return this.carName;
    }
}

console.log(car.getCarName())