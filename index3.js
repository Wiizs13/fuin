const Animal = {

    especie: "Pitbull",
    edad: 5,
    color: "blanco con negro",

    hecerruido: () =>{
        return "Hacer ruido"
    },
    comer: () =>{
        return "esta comiendo"
    },
    dormir:  () =>{ 
        return "esta durmiendo"
    }
}

console.log("Color: "+Animal.color)
console.log(Animal.dormir())



const Perro = {

    __proto__: Animal,
    velocidad: "50 km/h",
    genero: "Macho",
    peso: "20kg",

    ladrar: () =>{
        return "ladra"
    },
    correr: () =>{
        return "corre"
    },
    moverCola: () =>{
        return "mueve la cola"
    }
}

console.log("Edad: "+Perro.edad)
console.log("Velocidad: "+Perro.velocidad)
console.log(Perro.comer())
console.log(Perro.correr())



const Pitbull = {

    __proto__: Perro,
    altura: "50cm",
    nombre: "Rocky",
    fuerza: "100 PSI",

    morder: () =>{
        return "muerde"
    },
    salta: () =>{
        return "salta"
    },
    jugar: () =>{
        return "juega"
    }
}

console.log("Especie: "+ Pitbull.especie)
console.log("Genero: "+ Pitbull.genero)
console.log(Pitbull.hecerruido())
console.log(Pitbull.moverCola())
console.log(Pitbull.morder())