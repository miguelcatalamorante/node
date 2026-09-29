const persona = {name: "Miguel", edad: 22};

const printName = ({name}) => {
    console.log(name);
};
printName(persona);

const {name, edad} = persona;
console.log(name, edad);

const hobbies = ["futbol", "padel", "pelis"];
const [hobby1, hobby2, hobby3] = hobbies;
console.log(hobby1);
console.log(hobby2);
console.log(hobby3);