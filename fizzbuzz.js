
const outPut =  fizzBuzz(7);
console.log(outPut);

function fizzBuzz(input){
    if (typeof input !=='number')
            return 'not a Number';
    if (input % 3 ===0 && input % 5 === 0) 
        return "fizzBuzz" ;
    if (input % 3 === 0)
         return "fizz" ; 
    if (input % 5 === 0)
         return "buzz" ;
    return input
   
}