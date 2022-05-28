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