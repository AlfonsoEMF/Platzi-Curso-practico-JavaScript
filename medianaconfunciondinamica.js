function calcularMediana (lista){
    //En la variable listaOrdenada está la lista que se ingresó como
    //argumento pero ordenada ascendentemente.
    const listaordenada = lista.sort(function (primerElemento, segundoElemento){
        return primerElemento - segundoElemento;
    });


// const lista1 = [
    //100,

    //200,00,

    //500,

    //400000000,
//];

//Variable que almacena el índice que se encuentra a la mita de la lista.
const mitadlista = parseInt(listaordenada.length / 2);

//Variable que almacena el valor de la mediana.
let mediana;

//Verificar si la lista tiene n elementos par o impar.
if (esPar (listaordenada.length)){
    const elemento1 = listaordenada[mitadlista - 1];
    const elemento2 = listaordenada[mitadlista];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;
    return mediana;

} else {
    mediana = listaordenada[mitadlista];
    return mediana;
}
}

function esPar(numerito){
    //si es par...
    if (numerito % 2 === 0){
        return true;
    } //si es impar...
    else {
        return false;
    }
}

function calcularMediaAritmetica(lista){
    
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promediolista = sumalista / lista.length;

    return promediolista;
}

//Para seguir en windows
