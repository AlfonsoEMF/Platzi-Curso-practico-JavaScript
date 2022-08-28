const colombia =[];

function capturar(){
    let nuevaPersona;
    
    //console.log("capturado");
    function Persona (nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    };

    const inputNombre = document.getElementById("nombre");
    const inputSalario = document.getElementById("salario");


    const nombreCapturar = inputNombre.value;
    //console.log(nombreCapturar);
    const salarioCapturar = Number(inputSalario.value);
    //console.log(salarioCapturar);

    if (nombreCapturar =="" && salarioCapturar==""){
        Swal.fire({
            title: 'Error!',
            text: 'Por favor ingrese un Nombre y un Salario',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
    } else if (nombreCapturar=="" && salarioCapturar){
        Swal.fire({
            title: 'Error!',
            text: 'Por favor ingrese un Nombre',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
    } else if (salarioCapturar ==""){
        Swal.fire({
            title: 'Error!',
            text: 'Por favor ingrese un Salario',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
    } else if (Number.isNaN(salarioCapturar)){
        Swal.fire({
            title: 'Error!',
            text: 'Por favor ingrese un Valor Numerico sin puntos ni comas',
            icon: 'error',
            confirmButtonText: 'Continuar'
          })
    } else {
        nuevaPersona = new Persona (nombreCapturar, salarioCapturar);
        console.log(nuevaPersona);

        agregarObjetoaArray(nuevaPersona);
    }

    inputNombre.value = ''
    inputSalario.value = ''
    inputNombre.focus()
};

function agregarObjetoaArray(persona){
    colombia.push(persona);
    console.log(colombia);
    document.getElementById("tabla").innerHTML +='<tbody><td>'+persona.nombre+'</td><td>'+persona.salario+'</td></tbody>';
};

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

        const mediana = calcularMediaAritmetica([personitaMitad1.salario, personitaMitad2.salario]);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad.salario;
    }

    
}

function colOrdenados() {
    return [...colombia].sort(function(personaA, personaB){
                return personaA.salario  - personaB.salario;
            });
}

function analizar(){
    console.log('colombia => ', colombia);
    console.log('colOrdenados() => ', colOrdenados())
    alert("La mediana de salarios de su empresa es: " + medianaSalarios(colOrdenados()));

}

    




