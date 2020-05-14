let people = [
    {
      name: "Luke",
      message: "Hi" ,
      heightInches : 6
    },
    {
      name: "Dan",
      message: "I'm Dan!" , 
      heightInches : 9
    }
  ];

function myGreeter(people, callback) {
    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        let greeting = callback(person.message);
        console.log(`${greeting} ${person.name}`);
    }
}

function myCallbackFunction(message) {
    if (message == "Hi" || message == "Hello") {
        return "Hi";
    } else {
        return "Hello There";
    }
}

function anotherCallbackFunction(message) {
    if (message == "I'm Dan!") {
        return "NO WAY, THAT'S SO COOL";
    } else {
        return "Hello";
    }
}

//myGreeter(people, anotherCallbackFunction);

// Array.filter
function myFilterFunction(person) {
    if (person.name == "Luke") {
        return true; // will be included in filtered array
    } else {
        return false; // will be excluded from filtered array
    }
}

let filteredArray = people.filter(myFilterFunction);

//console.log("people");
//console.log(people);
//console.log("filteredArray");
//console.log(filteredArray);
// people.filter() you pas function to it return true of fulse.. if true the function filter will return the array after filter otherwise will not

// Map  // Change the shape 
function getNames(person)
{
    return person.name;
}
let names = people.map(getNames);
//console.log(names);

function converthigher(person){
    return{
        name: person.name ,
        message : person.message,
        heightInches : person.heightInches

    };
}
let peoplecm = people.map(converthigher);
//console.log(peoplecm);

// Find fin the first element in the arry make the condition

function findunder(person)
{
    return person.heightInches > 65 ;
}
let x =people.find(findunder);

///

