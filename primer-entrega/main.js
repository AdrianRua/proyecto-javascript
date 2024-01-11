//Pagina de basquet

let Basquet = prompt("¿Quieres saber sobre basquet?").toLowerCase();

if (Basquet != "no") {
    alert("Genial, descubre el numero según la posicion de campo");
    alert("¿En que posicion jugarias?")
    seguir = '';
    while (seguir != 'salir') {
    seguir = funcCamiseta()
    if (seguir == 'esc') {
    seguir = 'salir';
    } else if (seguir == 'reiniciar'){
    continue
    } else {
        alert(seguir)
    }
    }
}

function funcCamiseta() {
    let posicion = prompt('Ingresa tu posición, "esc" para salir').toLowerCase();
    
    if (posicion == "base") {
        return `En la camiseta representa el #1`
    } else if (posicion == "escolta") {
        return 'En la camiseta representa el #2'
    } else if (posicion == "alero") {
        return 'En la camiseta representa el #3'
    } else if (posicion == "ala pivot") {
        return `En la camiseta representa el #4`
    } else if (posicion == "pivot") {
        return `En la camiseta representa el #5`
    }else if (posicion == "esc") {
        return `esc`
    } else {
        alert('Esa posición no existe')
        return 'reiniciar'
    }
}



const jugadores = [];

class Jugador{
    constructor( nombre, edad, club, nacionalidad){
        this.id = jugadores.length + 1;
        this.nombre = nombre.toLowerCase();
        this.edad = edad;
        this.club = club.toLowerCase();
        this.nacionalidad = nacionalidad.toLowerCase();
    }
}

jugadores.push(new Jugador("Stephen Curry", 35, "Golden State Warriors", "USA"));
jugadores.push(new Jugador("Lebron James", 39, " L.A Lakers", "USA"));
jugadores.push(new Jugador("Luka Dončić", 24, "Dallas Mavericks", "Eslovenia"));
jugadores.push(new Jugador("Kevin Durant", 35, "Phoenix Suns", "USA"));
jugadores.push(new Jugador("James Harden", 34, "Los Angeles Clippers", "USA"));
jugadores.push(new Jugador("Anthony Davis", 30, "L.A Lakers", "USA"));
jugadores.push(new Jugador("Victor Wembanyama", 20, "Spurs", "Francia"));
jugadores.push(new Jugador("Jimmy Butler", 34, "Miami Heat", "USA"));
jugadores.push(new Jugador("Giannis Antetokounmpo",29, "Milwaukee Bucks", "Grecia"));

function filtrarJugador() {
    let edad =  Number(prompt("Ingrese edad"));
    const result = jugadores.filter((elemento) => elemento.edad > edad);

    return result;

}

alert("Conoce a los referentes por su rango de edad");

filtrarJugador().forEach(elemento => {
    alert(`
    jugador: ${elemento.nombre}
    club: ${elemento.club}
    edad: ${elemento.edad}
    nacionalidad: ${elemento.nacionalidad}
    `)
});