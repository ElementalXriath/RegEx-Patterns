/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.)
*/

let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-6655"];

let regex = /801-\d\d\d-\d\d\d\d/, 
newArray = [];

// for (let i = 0; i < phoneNums.length; i++){
//     //Bc this returns true
//     if (regex.test(phoneNums[i])) {
//         newArray.push(phoneNums[i])
//     }
// }

console.log(newArray);

const Person = function(name, location, phone, occ) {
    let message = 'No job'
    this.name = name;
    this.location = location;
    this.phone = phone;
    this.occ = occ
    this.job = function(){
        if (occ === 'Teacher'){
            console.log(this.name + 'Teaches')
        } else {
            console.log(message)
        }
    }
}

Person.prototype.close = function() {

    let close = 'Atlanta';

    if (this.location === close) {
        console.log('Yes hes close')
    } else {
        console.log('No he is not close')
    }
}

const john = new Person('John', 'Atlanta', '770-343-2353', 'Teacher');



const match = (number) => {

   const regex2 = /770/;

    if (number.match(regex2)){
        console.log('area code Atlanta')
    } else {
        console.log('Not Recon')
    }
}


console.log(john.job());
console.log(john.phone)
console.log(match(john.phone));
