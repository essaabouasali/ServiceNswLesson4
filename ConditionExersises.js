
// Q1
function findbetween(floor , ceilling , num)
{
    if(num> ceilling && num < floor){
        return true;
    }
    else if(num < ceilling && num > floor)
    {
        return true;
    }
    else return false;
}


/// Q2

function greater(person)
{
    let bol = false;
    for(let i =0 ; i<person.name.length;i++)
    {
        let letter = person.name[i].tolowercase;
        if(letter== "x")
        {
            bol = true ;
            break;
        }
    }
    if(person.age > 30 || bol)
    {
        return true ;
    }
    return false;
}
let people =
    {
    name : "essa",
    age : 22
    }
//console.log(greater(people));



// Q3

function equal(person , num , str)
{
    if(person.age == num && person.name != str)
    {
        return true ;
    }
    return false;
}

