// 1. Creamos una lista con numeros aleatorios.
const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

// 2. Creamos un Objeto en donde enviaremos los elementos.
const lista1Count = {};

// 3. Usamos el metodo map para recorrer el objeto y mirar que cantidad de veces se repite el mismo numero.
lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
         lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

/* 3. Convertimos nuevamente el objeto que contiene los elementos en un array con Object.entries.
con Object.entries podemos enviarle como argumento el objeto que queremos convertir en un array y despues el metodo .sort para buscar cual es el elemento 
que se repite mas veces del array*/

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);


const moda = lista1Array[lista1Array.length - 1];