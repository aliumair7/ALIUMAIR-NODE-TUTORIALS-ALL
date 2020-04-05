function makepizza(flavour){
setTimeout(function(){
    console.log("Preparing Pizza")
    return "Prepared " +  flavour    +"Pizza"



},1000)


return "Ordered Received " + flavour  + " Pizza"

}

console.log(makepizza("Tikka"))