/*
Iterate through the data provided. Use a regular expression to store the names in a new array but change the order of the name so first name is listed first and last name is last. 
*/

let data = ["Jensen, Dale", "Smith, Andrea", "Jorgensen, Michael", "Vasefi, Annika", "Lopez, Monica", "Crockett, Steven"];

let regex = /(\w+,)\s(\w+)/;

let newData = data.map((val) => {
    let arr = regex.exec(val);
    if ( arr !== null) {
        console.log(arr[2]+ " " + arr[1])
    } else {
        return null
    }
})


