/***1.Spread Operator with Arrays***/
    function mergeArray(){
    const array1 = [3,4,5]
    const array2 = [6,7,8]
    //- Add a new element at the beginning, middle, and end of the `combinedArray` using the spread
    const combinedArray = [1,2,...array1, ...array2,9,10]
    console.log(combinedArray);

//**2. Spread Operator with Objects***/
//Create two objects, `object1` and `object2`, each with at least three properties
const object1 = {Project:"UBS",Region: "Europe", Department :"CSS"};
const object2 = {Project: "KBC",Module : "ORM", Golive : "May"};

//Combined Object1 and Object2, Project property from `object2` overwrite those from `object1`.
let combinedObject  ={...object1,...object2};
console.log(combinedObject);

//Add a new property to `combinedObject` using the spread operator.
//Added new property Application
combinedObject  ={...object1,Application:"M7",...object2};
console.log(combinedObject);
    }

    var mergeOp =mergeArray();
	
/***3.Spread Operator in Function Calls***/
//function `sum` that takes three arguments and returns their sum
    function sum(x,y,z) {
        return x+y+z;
        }
        
        //Create an array `numbers` with three numbers.
        var arr1 = [2,3,4];

        //Call the `sum` function, passing the elements of `numbers` as arguments using the spread operator.
        let result =sum (...arr1);
        console.log(result);