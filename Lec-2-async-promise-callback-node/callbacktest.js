 

 function makepizza(flavour,callback){
     console.log("Order Received")
     console.log("Preparing Fodd")

     setTimeout(function(){
         callback( flavour  + " Pizza" )
     },1000)





 }

function handlepizza(pizza){
    console.log("Eating "+ pizza)

}

 makepizza("Tikka",handlepizza)
 console.log("HEllo")