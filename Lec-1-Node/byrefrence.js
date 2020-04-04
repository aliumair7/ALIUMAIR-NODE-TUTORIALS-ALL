let x=12;

let y=x;
 x=15;

console.log(y)// This is by value and create deep copy 


let user1={
    name:'ali',
    email:'ali@gmail.com'
}

 let user2=user1 // will create shallow copy this is by refrence
 let antheruser=Object.assign({},user1)// will create deep copy this is by value
 let user3={...user1};// spread operator
user1.name="hamza"
console.log(user2)
console.log(antheruser)
console.log(user3)



let z=10;
function incr(z) {
    z++;
};
incr(z);
console.log(z)


let obj={va:12};
function incre(obj) {
    obj.va++;
};
incre(obj);
console.log(obj.va)
