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