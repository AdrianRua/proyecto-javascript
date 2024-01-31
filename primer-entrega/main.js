//Pagina de basquet

/*let Basquet = prompt("¿Quieres saber sobre basquet?").toLowerCase();

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
});*/






const contenedorProductos = document.getElementById('contenedor-productos');

const productos = [
    {id: 1, nombre: "Celtics", precio: 124, img: "img/boston.avif"},
    {id: 2, nombre: "Bulls", precio: 260, img: "img/bulls.avif"},
    {id: 3, nombre: "Warriors", precio: 160, img: "img/golden warriors.webp"},
    {id: 4, nombre: "Lakers", precio: 99, img: "img/lebron james.avif"},
    {id: 5, nombre: "Spurs", precio: 108, img: "img/spurs.avif"},
]

const carrito = [];



const mostrarProductos = () => {
    productos.forEach(producto => {
        contenedorProductos.innerHTML += `
            <div class="prod-container">
                <img src="${producto.img}" />
                <h2>${producto.nombre}</h2>
                <p>$${producto.precio}</p>
                <button id="${producto.id}" class="agregar">Agregar al carrito</button>
            </div>
        `;
    });
}



const agregarAlCarrito = e => {
    if (e.target.classList.contains('agregar')) {
        const id = e.target.id;
        const producto = productos.find(producto => producto.id == id);
        carrito.push(producto);
        mostrarCarrito();
    }
}


const mostrarCarrito = () => {
    const contenedorCarrito = document.getElementById('contenedor-carrito');
    contenedorCarrito.innerHTML = '<h2>Carrito:</h2>';
    carrito.forEach(producto => {
        contenedorCarrito.innerHTML += `
            <p>${producto.nombre} \t $${producto.precio}</p>
        `;
    });
}



document.addEventListener('DOMContentLoaded', mostrarProductos);

contenedorProductos.addEventListener('click', agregarAlCarrito);

























































/*const contenedorProductos = document.getElementById('contenedor-productos');

const Productos = [
    { id: 1, nombre: "whisky", precio: 4500, emoji: '🥃' },
    { id: 2, nombre: "Coca", precio: 2200, emoji: '🥤' },
    { id: 3, nombre: "Cerveza", precio: 2500, emoji: '🍺' },
    { id: 4, nombre: "Hamburguesa", precio: 4000, emoji: '🍔' },
    { id: 5, nombre: "Super pancho", precio: 2000, emoji: '🌭' },
]
const carrito = [];




function mostrarProductos() {
    Productos.forEach(producto => {
        contenedorProductos.innerHTML += `
            <div class="prod-container">
                <h1 id="emoji">${producto.emoji}</h1>
                <h2>${producto.nombre}</h2>
                <p>$${producto.precio}</p>
                <button id="${producto.id}" class="agregar">Agregar al carrito</button>
            </div>
        `;
    });
}




    const agregarAlCarrito = (e) => {
    if (e.target.classList.contains('agregar')) {
        const id = e.target.id;
        const producto = Productos.find(producto => producto.id == id);
        carrito.push(producto);
        mostrarcarrito();
    }
}
const mostrarCarrito = () => {
    const contenedorCarrito = document.getElementById('contenedor-carrito');
    contenedorCarrito.innerHTML = '<h2>Agregados</h2>';
    carrito.forEach(producto => {
        contenedorCarrito.innerHTML += `
            <p>${producto.nombre} \t $${producto.precio}</p>
        `;
    });
}

document.addEventListener('DOMContentLoaded', mostrarProductos);

contenedorProductos.addEventListener('click', agregarAlCarrito);*/