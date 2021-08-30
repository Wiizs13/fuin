function Animales (raza,color,sexo){
    this.raza = raza,
    this.color = color,
    this.sexo = sexo
}

Animales.prototype.hacerruido = () =>{
        return "estoy haciendo ruido rancio";
}
Animales.prototype.caminar = () =>{
        return "rancio estoy caminando";
}
Animales.prototype.correr = () => {
        return "corramos amigo";
}

const animal = new Animales("canino","negro-blanquecino","hembra");
/*
console.log(`Color: ${animal.color}` );
console.log(`accion: ${animal.correr()}`);
*/



function Perro(velocidad,fuerza,mordida){
    this.velocidad = velocidad,
    this.fuerza = fuerza,
    this.mordida = mordida
}

Perro.prototype = new Animales("canino","negro-blanquecino","hembra");

Perro.prototype.cazar = () =>{
    return "amigo caze una pato";
}
Perro.prototype.dormir = () =>{
    return "estoy duermiendo";
}
Perro.prototype.ladra = () =>{
    return "estoy ladrando";
}

const perro = new Perro("50km/h","40 N","50KP");
/*
console.log(`La fuerza es: ${perro.fuerza}`)
console.log(`accion: ${perro.cazar()}`)
*/

function Pastor(tamano,peso,nombre){
    this.tamano = tamano,
    this.peso = peso,
    this.nombre = nombre
}
Pastor.prototype = new Perro("50km/h","40 N","50KP");

Pastor.prototype.jugar=()=>{
    return "estoy jugando man";
}
Pastor.prototype.darvuelta=()=>{
    return "estoy dando vueltas";
}
Pastor.prototype.beber=()=>{
    return "estoy bebiendo agua";
}

const pastor = new Pastor("1.50m","80 kg","kayser");

console.log(`${pastor.hacerruido()}`)
console.log(`${pastor.mordida}`)
console.log(`${perro.dormir()}`)
console.log(`${perro.correr()}`)
console.log(`${pastor.sexo}`)


