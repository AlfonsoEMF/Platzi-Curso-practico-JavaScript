// 1. Creamos una lista con numeros aleatorios.
/*const lista1 = [
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
*/






function calcularmoda (){ // Creamos una funcion que reciba cualquier lista de arrays y que incluya todo lo que esta agregado en el codigo.
    
    const cajitatexto = document.getElementById("inputcalcularmoda");
    const lista = cajitatexto.value.split(",");
    const resultados = document.getElementById("resultado");

    const listaCount = {}; // Creamos un Objeto en donde enviaremos los elementos.
        lista.map(     // Usamos el metodo map para recorrer el objeto y mirar que cantidad de veces se repite el mismo numero.
            function (elemento) {
                if (listaCount[elemento]) {
                listaCount[elemento] += 1;
                } else {
                listaCount[elemento] = 1;
        }
    }
);




/* Convertimos nuevamente el objeto que contiene los elementos en un array con Object.entries.
con Object.entries podemos enviarle como argumento el objeto que queremos convertir en un array y despues el metodo .sort para buscar cual es el elemento 
que se repite mas veces del array*/

const lista1Array = Object.entries(listaCount).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);


const moda = lista1Array[lista1Array.length - 1];

        resultado.innerHTML ="La moda de tu lista es " + moda[0] + " y se repite " + moda[1] + " Veces";


}

