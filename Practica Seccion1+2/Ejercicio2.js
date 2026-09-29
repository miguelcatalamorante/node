const calcularEscudo = nivel => nivel * 15;
const impactoCritico = (danoBase, multiplicador) => danoBase * multiplicador;
const mensajeAlerta = () => "¡Alerta: Intrusos en la cubierta!";
console.log(calcularEscudo(10));
console.log(impactoCritico(50, 2));
console.log(mensajeAlerta());

