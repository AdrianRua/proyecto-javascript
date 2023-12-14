let producto = prompt("¿Que sector de la cancha busca?");
let precio = Number(prompt("¿Que precio paga?"));


if (producto != "" && precio <=6000) {
    alert("tenemos disponible populares por ese valor")
} else if(producto != "" && precio > 6000 && precio < 30000){
    alert("tenemos disponible el sector de plateas por ese valor");
} else{
    alert("No hay disponibilidad de palcos")
}


for(let numero = 1; numero <= 5; numero++){
    let posicion = prompt("Escriba una posicion de basquet").toLowerCase()
    while(posicion != "ESC"){
        switch (posicion){
            case "base":
                alert(`En la camiseta representa el: #${numero}`);
                break;

            case "escolta":
                alert(`En la camiseta representa el: #${numero}`);
                break;

                case "alero":
                    alert(`En la camiseta representa el: #${numero}`);
                    break;

                case "ala pivot":
                    alert(`En la camiseta representa el: #${numero}`);
                    break;

                        case "pivot":
                            alert(`En la camiseta representa el: #${numero}`);
                            break;
        
            default:
                alert("No existe esa posicion");
                break;
        }


    }
}