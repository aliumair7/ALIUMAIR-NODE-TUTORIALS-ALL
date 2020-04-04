function  name() {
return 'ali'
}
console.log(name())// simple func

let aj=()=>{
    return 'ali'
}
console.log(aj())// arrow function

function checktrue(name){
    if (name=='ali') return true;// same written as name==='ali' ? true : false
    else
    return false;

}
console.log(checktrue('ali'))
const checky=(name)=>(name =='ali' ? true : false)
console.log(checky('ali'))


console.log( 5==5 ? 'hello' : 'false')
console.log(5<6 && "hello my frien")
console.log(5>6 && "hello my frien")




