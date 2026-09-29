//Arrow functions
//Gramatica: cons x = () =>
const summarizeUser = (UserName, userAge, userHas) => {
    return ("Name: "+ UserName+ "Age: "+userAge+"Hobbie: "+userHas);
};

const add = (a, b) => {
    return a+b;
};
console.log(add(23, 21));

//Array
const hobbies = ["Sport", "Cooking"];

//------------------DESESTRUCTURACIÓN DE OBJETOS ({})-------------------------
const persona1 = {name:"Max",age: 29}

//Extraccion de parametros
const printName = ( {name})=> {
console.log(name); //"Max"
};

//Extraccion directa en declaracion
const {name, age} = persona;
console.log(name, age); //"Max" 29

//desestructuración de un array (II)
const [hobby1, hobby2] = hobbies;

//-----------------MANEJO DE ASINCRONÍA: CALLBACKSVS.PROMESAS-------------------------

//1.Definicion manual de una PROMESA
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Datos recibidos");
        },1500)
    });
}
//2. Consumo y encadenamiento lineal con .then()
setTimeout(()=>{
    console.log("Timer completado");

    fetchData()
    .then(text =>{
        console.log(text);
        return fetchData();
    })
    .then(text2 =>{
        console.log(text2);
    });
},2000);
//-----------------------------------------------------
//Añadir elemento
hobbies.push("Programing");

//Copia Array
const hobbiesCopiados = [...hobbies, "Padel"];

//Tipos de recorrer imprimir arrays
console.log(hobbies);

console.log(hobbies.map( hobby => {
    return "Hobby: "+hobby;
}));

console.log(hobbies.map(hobby => "hobby: " + hobby));

//------------------------------------------------
//Copia Objeto
const persona = {nombre:"Max", edad: 29};
const personaCopiada = {...persona};

//---------------------OPERADOR REST (AGRUPAR)---------------------------
//Permitir recibir N argumentos de forma flexible
const toArray = (...args) => {
    return args;
};
toArray(1,2,3,4);



