const pokemonBase = { nombre: 'Pikachu', tipo: 'Eléctrico', nivel: 25 };
const ataques = ['Impactrueno', 'Ataque Rápido'];

const pokemonMejorado = {...pokemonBase, variante: 'Shiny' };
pokemonMejorado.nivel= pokemonMejorado.nivel+25
console.log(pokemonMejorado);

const listaAtaques = [...ataques, 'Rayo'];
console.log(listaAtaques);
