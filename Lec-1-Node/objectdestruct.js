address={

    title:'chokery',
    loc:'nankana'
}

const {title,loc}=address;//Object Destructuring
console.log(title);

function printaddress(tit,loca){
    console.log(tit+"is located in"+loca)


}

console.log(printaddress(title,loc))