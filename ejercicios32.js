// EJERCICIO 3.2
let htrab;
let phora;
let resul = 0;

htrab = +prompt("Ingrese Horas Trabajadas");
phora = +prompt("Ingrese el pago por hora");
if (htrab > 40) {
resul = 2*(htrab*phora)-(40*phora) 
}
else {
    resul = htrab*phora
}
console.log("Su sueldo es: S/ ",resul," soles");