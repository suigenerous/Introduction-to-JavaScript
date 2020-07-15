/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 20;
if (votingAge > 18){
    console.log(true);
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let x = 2;
let y = 0;

if (x != null){
    y = 1;
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let conversion = Number("1999");



//Task d: Write a function to multiply a*b 

function multiply(a,b){
    return a*b;
}



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(age){
    return age*7;
}



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder(age, weight){
    if (age<0||age<(2/12)){
        return 0;
    }
    else if(age>=1){
        if (5>=weight){
            return weight*.05;
        }
        else if (6<weight && weight<=10){
            return weight*.04;
        }
        else if (11<weight && weight<=15){
            return weight*.03;
        }
        else{
            return weight*.02;
        }
    }
    else{
        if((2/12)<age && age<(4/12)){
            return weight*.1;
        }
        else if((4/12)<age && age<(7/12)){
            return weight*.05;
        }
        else{
            return weight*.04;
        }
    }
}




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rps(humanChoice){

    let computerChoice = "";
    randomInt = Math.floor(Math.random() * Math.floor(3))
    if (randomInt === 0){
        computerChoice = "rock";
    }
    else if (randomInt === 1){
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    console.log("Computer chose: " + computerChoice);

    if (humanChoice === "rock"){
        if (computerChoice === "rock"){
            return "tie";
        }
        else if (computerChoice === "paper"){
            return "loss";
        }
        else{
            return "win";
        }
    }
    else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            return "win";
        }
        else if (computerChoice === "paper"){
            return "tie";
        }
        else{
            return "loss";
        }
    }
    else {
        if (computerChoice === "rock"){
            return "loss";
        }
        else if (computerChoice === "paper"){
            return "win";
        }
        else{
            return "tie";
        }
    }
}  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(km){
    return km*1.6;
}



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCm (feet){
    return feet*30.48;
}



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(start){
    for (i=start; i > 0; i--){
        console.log(i + " bottles of beer on the wall, " + i, " bottles of beer, take one down pass it around " + (i-1) + " bottles of beer on the wall");
    }
}



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grader(score){
    if (score>=90){
        return "A";
    }
    else if (score>=80){
        return "B";
    }
    else if (score>=70){
        return "C";
    }
    else if (score>=60){
        return "D";
    }
    else {
        return "F"
    }
}
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

function isVowel(letter){
    if(letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U" || letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
        return true;
    }
    else{
        return false;
    }
}


function vowelCounter(str){
    let vowelNumber = 0;
    for (var i=0; i < str.length; i++){
        if (isVowel(str.charAt(i))){
            vowelNumber++;
        }
        else{
            continue;
        }
    }
    return vowelNumber;

}



/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





