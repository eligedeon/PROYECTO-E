// Ejercicio 3.3
let presupuesto;

presupuesto = +prompt("Por favor ingrese su Presupuesto para el regalo");

if (presupuesto <= 10) {
    console.log("Usted debe regalar una Tarjeta");

} else {
    
    if (presupuesto <= 100) {
        console.log("Usted debe regalar unos Chocolates");

    } else {
        
        if (presupuesto <= 250) {
            console.log("Usted debe regalar Flores");

        } else {
            console.log("Usted debe regalar un Anillo");
        }
    }

}