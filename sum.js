
// Sum of the arrays

/*
let arr = [1,2,3,4,5];

let result = arr.reduce((sum,current)=>sum+current,0);

alert(result);
*/
// Arrays and arrays methods
//var array =['string1','string2',3,undefined,null];
//var item1 = array[0];
//1. push- adds item to the end
//var array1 = ['animal','dog','cat'];
var array1 = [1,2,3,4];
//array1.push(4);

//2. pop from arrays
// var popped = array1.pop();

//3. unshift and shift - same has push and pop, but 
//at the begining of the array(more expensive, so try to avoid)

//array1.unshift('cat');
//var shiftedItem = array1.shift();

//4. sort - default is alphabetically
// array1.sort(); //this will sort alphabetically
 
// below array is going to sort the numbers in acsending orders
//array1.sort(function(a,b){
//    return a-b;
//  });

// below array is going to sort the numbers in descending orders
//array1.sort(function(a,b){
//    return b-a;
//  });

//5. reverse the array by using reverse keywords
// array1.reverse();

//6. foreach - iterate over each item
  //array1.forEach(function(item, index){
  //  console.log(item,index);
  //});

  //7. map - return something customized for each item(creates a copy of array)

   // var array2 = array1.map(function(item){
   //     return item + ' is really cool';
   // });

   //8. filter - return an array with items that
   //   pass the test (creates a copy) 
     //  var filtered = array1.filter(function(item){
     //       return item >=3;
     //  });
    //9. join - joins together items in the array
         //var array2 = array1.join(); // this is default join which gives the output 1,2,3,4
         //var array2 = array1.join(' is cool number ,');

    //10. concat - joins together two arrays
           //var array2 = [5,6,7,8];
           //var concattedArray = array1.concat(array2);

    //11. slice - choose beginning and ending cut off points (
    //    first number includes, second does not;
    //    creates a copy)
    //var sliced = array1.slice(1,3);


    //12. spilced - remove or insert items (first
    //  number includes, second is how many to delete/replace, 
    //  third is what to insert)

        array1.splice(1,2);
    //console.log(array.length);
console.log(array1);