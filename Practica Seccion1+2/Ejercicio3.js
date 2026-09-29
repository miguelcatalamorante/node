const robot = {
    name: 'CyberChef',
    specialty: 'Ramen',
    greet() {
      console.log(`Hola, soy ${this.name} y preparo ${this.specialty}`);
    }
  };
  robot.greet();
// Las Arrow Functions no tienen su propio this, por eso this no hace referencia al objeto robot.
//  Con un método ES6, this sí hace referencia a robot al llamar a robot.greet().