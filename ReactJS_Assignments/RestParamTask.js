//JavaScript Rest Parameters Assignment
//function `sumAll` that uses a rest parameter to take any number of arguments and returns their sum.
function sumAll(...input){
    let total =0;
    for(let i=0;i<input.length;i++){
    total +=input[i]
    }
    console.log(total);
    }
    var total1 = sumAll(10,20);
    var total2 = sumAll(10,20,30);
    var total3 = sumAll(10,20,30,40);
    var total3 = sumAll(10,20,30,40,50);

    /***Rest Parameters with Other Parameters***/
 //function `userInfo` that accepts a first name, last name, and a rest parameter for hobbies.  
    function userInfo(firstName,lastName,...hobbies)
{
    var UserTest = {Userfullname :firstName + " "  + lastName,hobbies};  
    console.log(UserTest);   
    
}
userInfo('Shantha',"Vinisha",'Listening to music','Movies');
userInfo('Shantha',"Vinisha",'Listening to music','Movies','Cooking');
