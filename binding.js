/*this is the example of function binding*/


/*

let user = {
    firstName:"BizViz",
    sayHi()
    {
        alert(`Hello,${this.firstName}!`);
    }
};

setTimeout(user.sayHi,1000);//Hello, undefined!

/* In this example this is not reachable to the firstNmae of the function
   here this refers to the window
   if we use window.firstName then we will get the output
*/

/*
    for this we have different solutions 
*/

/*
    first by a wrapper
*/

/*
    let user = {
        firstName:"Jhon",
        sayHi(){
            alert(`Hello,${this.firstName}!`);
        }
    };
*/
   /*This can also shorted by */
   /*
    setTimeout(function(){
        user.sayHi();//Hello, John!
    },1000);
    */

/*
    setTimeout(()=> user.sayHi(),1000);//hello, Jhon
*/


/* Second solution is Bind */

/* 
    functions provide a built-in method bind that allows to fix this.
*/

/*
    the basic syntax of bind is
    let boundFunc = func.bind(context);
*/

/*  This is first bind example */

/*
    let user = {
        firstName:"Jhon"
    };

    function func(){
        alert(this.firstName);
    }

    let funcUser = func.bind(user);
    funcUser(); //John
*/

/* this is second bind example */

    /*
    let user ={
        firstName:"Jhon"
    };

    function func(phrase){
        alert(phrase+' , '+this.firstName);
    }

    //bind this to user

    let funcUser = func.bind(user);
    funcUser("Hello");//Hello , Jhon(argument "hello" is passed and this =user)
    */


    // Now, We are going to try the Object method

    /*
    let user ={
        firstName:"Jhon",
        sayHi(){
            alert(`Hello,${this.firstName}!`);
        }
    };

    let sayHi = user.sayHi.bind(user);//(*)

    sayHi();//Hello, Jhon!

    setTimeout(sayHi,1000);//Hello, Jhon!
    */

    // another example

    /*
        let user ={
            firstName: "Jhon",
            say(phrase)
            {
                alert(`${phrase}, ${this.firstName}!`);
            }
        };


        let say = user.say.bind(user);

        say("Hello");
        //hello, John ("Hello" argument is passed to say )

        say("Bye");
        //Bye, Jhon ("Bye" argumnent is passed to say)

    */
    // Above we are talking about binding This.
    //from now we can also bind the arguments 
    // by using the partial functions

    // multiplication function
    /*
    function mul(a,b)
    {
        return a*b;
    }

    let double = mul.bind(null,2);
    alert(double(3)); // = mul(2,3) = 6
    alert(double(4)); // = mul(2,4) = 8
    alert(double(5)); // = mul(2,5) = 10
    */


    // another example of partial fixed binding

    function partial(func, ...argsBound) {
        return function(...args) { // (*)
          return func.call(this, ...argsBound, ...args);
        }
      }
      
      // Usage:
      let user = {
        firstName: "John",
        say(time, phrase) {
          alert(`[${time}] ${this.firstName}: ${phrase}!`);
        }
      };
      
      // add a partial method with fixed time
      user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
      
      user.sayNow("Hello");
      // Something like:
      // [10:00] John: Hello!