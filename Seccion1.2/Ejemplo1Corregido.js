const name= "Max";
let age = 29;
const hobbies= true;
age = 30;
function summarizieUser(userName, userAge, userHasHobby){
return(
    "El nombre es "+
    userName+
    " y su edad "+
    userAge
);
}
console.log(summarizieUser(name,age,hobbies)); 