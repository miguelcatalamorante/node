const grimoire = {owner: "Mago Merlin", spells: ["Bola de Fuego", "Escudo de Hielo"]};
grimoire.spells.push("Rayo Arcano")
console.log(grimoire.spells[1]);

grimoire = { owner: "Mago Oscuro" }
// ERROR (TypeError): Intenta reasignar el puntero a una nueva dirección de memoria
// grimoire = ['Mago Osuro'];