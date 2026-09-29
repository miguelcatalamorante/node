const name = "miguel";
var age = 29;
var hobbies = true;

function summarizeUser(userName, userAge, userHasHobby){
return(
"el nombre es: "+ userName+
"y su edad: "+ userAge
+"Tiene hobbies "+
(userHasHobby ? "Si" : "No")
);
}
console.log(summarizeUser(name,age,hobbies));