const salariosCol = colombia.map(
    function(personita){
        return personita.salario;
    }
);



const salariosColordenados = salariosCol.sort(
    function(salarioA, salarioB){
        return salarioA  - salarioB;
    }
);


function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
};


function calcularMediaAritmetica(lista){
    
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promediolista = sumalista / lista.length;

    return promediolista;
}



function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){

        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
 
}

console.log(medianaSalarios(salariosColordenados));