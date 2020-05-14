let pets = [
    {
      name: "Rex",
      age: 4,
      ownerName: "Luke"
    },{
      name: "Spot",
      age: 7,
      ownerName: "Jade"
    },{
      name: "Scooby",
      age: 3,
      ownerName: "Shaggy"
    },{
      name: "Lucky",
      age: 1,
      ownerName: "Luke"
    },{
      name: "Sadie",
      age: 3,
      ownerName: "Daniel"
    },{
      name: "Duke",
      age: 5,
      ownerName: "Sabine"
    }
  ];

  // Q1 

function ownedbylucke(pet)
{
    return pet.ownerName == "Luke";
}
let arr = pets.filter(ownedbylucke);
//console.log(arr);

// Q2

function nameowne(pet)
{
    return pet.ownerName ;
}

let ownernames = pets.map(nameowne);
//console.log(ownernames);

// Q3

function retrieves (pet)
{
    return pet.ownerName == "Shaggy";
}
let ownbyshaggy = pets.find(retrieves);
//console.log(ownbyshaggy);


// Q4

function findpet(pet)
{
    return pet.age < 5 && (pet.ownerName[0] == "S" || pet.name[0] == "S")  
}

let mypet = pets.filter(findpet);
//console.log(mypet);
