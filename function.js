/*
function showMessage()
{
    alert("I am in function bro...");
}
showMessage();
showMessage();
*/

/*
let userName = "BDB";
function showMessage()
{
    let message = "Hello ";
    alert(message + userName);
}

showMessage();
*/


/*let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!
*/


/*let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed
*/

/*function sayHi() {   // (1) create
    alert( "Hello" );
  }
  
  let func = sayHi;    // (2) copy
  
  func(); // Hello     // (3) run the copy (it works)!
  sayHi(); // Hello    //     this still works too (why wouldn't it)


*/
/*

  function ask(question,yes,no)
  {
    if(confirm(question))
        yes();
    else no();
    
   
  }
  function showOk()
  {
      alert("you agreed");
  }
  function showCancel()
  {
      alert("you cancelled the execution.")
  }
  ask("Do you agree ?",showOk,showCancel);
  */

/*
  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);
    */


  /*  function ask(question,yes,no)
    {
        if(confirm(question))
            yes();
        else
            no();
    }

    ask("Do you agree.",function() { alert("you agreed..."); },function() { alert("you are not agreed yet please reconnet...")});

*/

/* 
let sum = (a,b) => a+b;
alert(1+2);
*/

/*
let sayHi = () => alert("Hello!");

sayHi();
*/
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome(); // ok now