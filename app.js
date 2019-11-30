
let txt = "Programming courses always starts with a hello world example."

let regex1 = /s\s/g;
let regex2 = /world/;

//console.log(regex1.exec(txt))
console.log(txt.match(regex1))

var newString = txt.replace(regex1, 'Hey')

console.log(newString)

//match , replace , split 
//exex , test
// \s - spaces
//Flags come after 

//3 most common flags 
//1 G-Global match more then one occurance
//2 i-case incentive match, case does not matter

// Meta Characters . represents any character 1 time except enter
// \ Escaping mete 

// [] char groups