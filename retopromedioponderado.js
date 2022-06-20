
/* FORMULA DE PROMEDIO PONDERADO:

[(N1*C1)+(N2*C2)+(N3*C3)]
-------------------------
(C1+C2+C3)

N = Nota
C = Credito de la nota

*/


// Definimos el conjunto de numeros junto al peso o credito de cada elemento

const notas = [
                {
                    curso: "Educacion Fisica",
                    nota: 10,
                    credito: 2,
                },
                
                {
                    curso: "Programacion",
                    nota: 8,
                    credito: 5,
                },

                {
                    curso: "Finanzas",
                    nota: 7,
                    credito: 5,
                },

              ];



// Mapeamos cada uno de los parametros del objeto "notas" con el metodo MAP de los Arrays para multiplicar las notas con el credito de cada materia del objeto notas.


const notasConCreditos = notas.map(
    function(objetoNotaycredito) {
            return objetoNotaycredito.nota * objetoNotaycredito.credito;
        }
    );

// Sumamos el resultado de la suma de notas y creditos de todas las materias del objeto notas que en este caso son 3 materias en total "Fisica, programacion y finanzas".

const sumaDeNotasConCreditos = notasConCreditos.reduce(
    function(suma = 0, nuevoValor) {
            return suma + nuevoValor;
        }
    );


// Mapeamos ahora todos los creditos del objeto notas para de esta forma poderlos sumar en el siguiente paso.

const creditos = notas.map(
    function(objetocreditos) {
        return objetocreditos.credito;
    }
);

// Sumamos todos los creditos de las materias del objeto nota para obtener el resultado y de esta forma poder hacer la divicion al final.

sumaDeLosCreditos = creditos.reduce(
    function(suma = 0, nuevoValor) {
        return suma + nuevoValor;
    }
);


/* Creamos una variable y realizamos la division entre la suma de las notas y creditos entre / la suma de los creditos segun la formula que vemos arriba 
de promedio ponderado. */

const promedioPonderadoNotasConCreditos = sumaDeNotasConCreditos / sumaDeLosCreditos;

// Imprimimos el resultado en la consola.

console.log(promedioPonderadoNotasConCreditos);