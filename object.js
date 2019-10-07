/* let fruit = prompt("which fruit to buy?","apple");

let bag = {
    [fruit]:5,//the name of the property is taken from the prompt
};
alert(bag.bdb);*/

/*
let user = {
    name: "john",
    age: 30,
    isAdmin: true
}

for(let key in user)
{
    //keys
    alert(key);//name,age,isAdmin
    alert(user[key]);//john,30,true
}

*/

let user = {
    name: "john",
    age:30
};

let clone ={}; // The new empty object
for(let key in user)
{
    clone[key] = user[key];
}

//now clone is fully independent clone
clone.name="pete";
alert(user.name);
user.age=25;
alert(clone.age);

