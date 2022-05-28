function calcularMediaAritmetica(lista){
    
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promediolista = sumalista / lista.length;

    return promediolista;
}

const lista1 = [
    100,

    200,

    500,

    400000000,
];

const mitadlista1 = parseInt(lista1.length /2);

function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar (lista1.length)){
    const elemento1 = lista1[mitadlista1 - 1];
    const elemento2 = lista1[mitadlista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1y2;

} else {
    mediana = lista1[mitadlista1];
}