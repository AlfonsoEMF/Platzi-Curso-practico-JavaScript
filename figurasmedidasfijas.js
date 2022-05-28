// Codigo del Cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El Area del cuadrado es: " + areaCuadrado + "cm²");

console.groupEnd();

// Codigo del Triangulo

console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los 3 lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es de: " + areaTriangulo + "cm²");
console.groupEnd();


// Codigo del Circulo

console.group("Circulo");

// Radio

const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro

const diametrocirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametrocirculo + "cm");

// PI

const PI = Math.PI;
console.log("PI es: " + PI);


// Perimetro o Circunferencia

const perimetroCirculo = diametrocirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

// Area

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm²");

console.groupEnd();