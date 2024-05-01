//JavaScript Destructuring Assignment
/* 1. **Array Destructuring**:
- Using the `fruits` array, extract the first and third fruit into two separate variables.
- Print these variables to the console.
*/
const fruits = ["Apple", "Banana", "Cherry"];

const [A,B,C] = fruits;
console.log(A); //Output Apple
console.log(C); //Output Cherry

/*
2. **Object Destructuring**:
- Destructure the `user` object to extract the `firstName`, `lastName`, and `email`.
- Print these values to the console.
*/
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
    }
  /*
  3. **Nested Object Destructuring**:
- Suppose `user` now includes an `address` object with properties `street` and `city`.
- Modify the `user` object accordingly and extract `street` and `city` using nested destructuring.
- Print `street` and `city` to the console.
  */

const address ={country : "INDIA", state : "Karnataka",city : "bangalore"};
  getuserInfo(user);
  
  function getuserInfo({firstName, lastName, email}) {
    const message = 'first Name :' + firstName + ',' +
    'Last Name :' + lastName + ',' + 'email:' + ' ' + email + '.';
    console.log(message);
  }
  