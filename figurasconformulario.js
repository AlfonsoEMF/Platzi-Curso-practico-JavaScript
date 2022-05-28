// Codigo del Cuadrado

console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");


function areaCuadrado(lado){
    return lado * lado;
}
// console.log("El Area del cuadrado es: " + areaCuadrado + "cm²");

console.groupEnd();

// Codigo del Triangulo

console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los 3 lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
// console.log("El area del triangulo es de: " + areaTriangulo + "cm²");

function alturaTriangulo(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert("Correcto! Este es un triangulo isoceles")
        const resultado = Math.sqrt((lado1*lado1)-(base*base) / 4);
    return resultado;
    } else {
        alert("Error, el triangulo isoceles tiene dos lados iguales y la base debe ser diferente a los lados, por favor ingrese los valores correctos");
    }
}

console.groupEnd();


// Codigo del Circulo

console.group("Circulo");

// Radio

// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro

function diametrocirculo(radio){
    return radio * 2;
} 
// console.log("El diametro del circulo es: " + diametrocirculo + "cm");

// PI

const PI = Math.PI;
console.log("PI es: " + PI);


// Perimetro o Circunferencia

function perimetroCirculo(radio){
    const diametro = diametrocirculo(radio);
    return diametro * PI;
} 
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

// Area

function areaCirculo(radio){
    return (radio * radio) * PI;
}
// console.log("El area del circulo es: " + areaCirculo + "cm²");

console.groupEnd();


// Aqui interactuamos entre JavaScript y HTML

// Perimetro del cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

// Area del cuadrado

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = Number(input.value);

    const area = areaCuadrado(value);
    alert(area);
}

// Perimetro del Triangulo

function calcularPerimetroTriangulo(){
    const inputlado1 = document.getElementById("inputLado1Triangulo");
    const valuelado1 = Number(inputlado1.value);
    
    const inputlado2 = document.getElementById("inputLado2Triangulo");
    const valuelado2 = Number(inputlado2.value);

    const inputbase = document.getElementById("inputBaseTriangulo");
    const valuebase = Number(inputbase.value);
    
    
    const perimetro = perimetroTriangulo(valuelado1, valuelado2, valuebase);
    alert(perimetro);
}

// Area del Triangulo

function calcularAreaTriangulo(){
    
    const inputbase = document.getElementById("inputBaseTriangulo");
    const valuebase = Number(inputbase.value);

    const inputaltura = document.getElementById("inputAlturaTriangulo");
    const valuealtura = Number(inputaltura.value);
    
    
    const area = areaTriangulo(valuebase, valuealtura);
    alert(area);
}

// Altura del Triangulo

function calcularAlturaTriangulo(){

    const inputlado1 = document.getElementById("inputLado1Triangulo");
    const valuelado1 = Number(inputlado1.value);
    
    const inputlado2 = document.getElementById("inputLado2Triangulo");
    const valuelado2 = Number(inputlado2.value);

    const inputbase = document.getElementById("inputBaseTriangulo");
    const valuebase = Number(inputbase.value);
    
    const altura = alturaTriangulo(valuelado1, valuelado2, valuebase);
    alert(altura);
}


// Perimetro del CIRCULO

function calcularPerimetroCirculo(){

    const inputdiametro = document.getElementById("inputDiametroCirculo");
    const valuediametro = Number(inputdiametro.value);

    const perimetro = perimetroCirculo(valuediametro)
    alert(perimetro);
}


// Area del CIRCULO

function calcularAreaCirculo(){

    const inputradio = document.getElementById("inputRadioCirculo");
    const valueradio = Number(inputradio.value);

    const area = areaCirculo(valueradio)
    alert(area);
}