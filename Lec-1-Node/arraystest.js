students=['ali','hamza','umair']
console.log(students.length)

num=[2,4,6]
const dupstd=num.map((ar)=> ar*2)
console.log(dupstd)

let aj=students.sort();
console.log(aj)

let ba=students.find(function(ab){
    if(ab=='ali')
    return ab;

})

let baa=students.findIndex(function(ab){
    if(ab=='ali')
    return ab;

})
console.log(ba)
console.log(baa)