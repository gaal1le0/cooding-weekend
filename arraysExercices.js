/*

NORMAS

crear una funcion que genere una escusa aleatoria con esos datos 
creeis otra funcion que cuente el numero de repeticiones de letras en cada array
suprimir repeticiones en un array y devolver el array sin la repeticion
function que invierta todos los valores de el array
normas
documentado
prohibido la programacion declarativa
debe estar separado en funciones
no se pueden utilizar objetos
obligatorio programacion funcional
todas las variables y nombres en funcoines en ingles
escritura camel-case

*/

// datos iniciales 
let surnames = ['10', 'juan', '@12', 'null', 'antonioPerezDelCarmen', 'abcdefghtioiasoisdjads', 'Manolo', 'Perez', 'Soledad'];
let escuses = ['OMG?', 'Whats going on?', 'How much is it?', 18, null, 'undefined', function() {}];
let dates = ['Jeferson', 'Matilda', 'R@fael', '1van', 'Pep3', 'Loquesea', 'Fel1berto', 'Pepit@', 'D@M'];

// calcular numero aleatorio en array
function randomNumber(array) {
    return Math.floor(Math.random() * array.length);
}

// limpiar array de datos no validos
function cleanArray(array) {

    // usando programacion declarativa
    // return array.filter((data) => typeof(data) === 'string');

    // usando programacion imperativa
    let response = [];

    // recorrer el array completo
    for (item of array) {
        if (typeof(item) === 'string') {
            response.push(item);
        }
    }

    return response;

}

// crear un objeto y limpiar todas las functiones
function organizeCleanData() {

    return response = {
        surnames: cleanArray(surnames),
        excuses: cleanArray(excuses),
        dates: cleanArray(dates)
    };

}

// genera una escusa aleatoria a partir de los datos recibidos
function excuseGenerator() {

    let response;

    //traemos los datos limpios
    const cleanData = organizeCleanData();

    //compose response
    response += `${surnames[randomNumber(cleanData.surnames)]} `;
    response += `${excuses[randomNumber(cleanData.excuses)]} `;
    response += dates[randomNumber(cleanData.dates)];

    return response;

}

// contar el numero de repeticiones de letra en un array
function countLetterMatches(array) {

    let response = {};

    // limpiamos el array
    const cleanData = cleanArray(array);

    // recorremos el array
    for (item of cleanData) {

        // recorremos cada letra dal item
        for (letter in item) {

            // comprobamos si existe
            if (response.hasOwnProperty(letter)) {
                // aumentamos el contador de repeticioines
                response[letter]++;
            } else {
                // creamos una nueva propiedad
                Object.defineProperty(response, letter, { value: 1 });
            }

        }

    }

    return response;

}

// suprimir repeticiones de un array
function removeMatches(array) {

    // limpiar array
    let cleanData = cleanArray(array);

    // USANDO SET

    // creamos un set (solo permite valores unicos)
    // const datosSet = new Set(cleanArray);

    //convertimos los datos a array
    // return [...datosSet];

    // USANDO PROGRAMACION DECLARATIVA

    // let response = cleanData.filter((data, index) => {
    //     return data.indexOf(item) === index;
    // });

    // USANDO PROGRAMACION IMPERATIVA
    let response = [];

    // recorremos el array
    for (item of cleanData) {

        //comprobamos si esta ya guardado
        if (!response.includes(item)) {
            response.push(item);
        }

    }

    return response;

}

// invertir palabra 
function invertWord(word) {

    let invertWord;

    // recorremos cada letra
    for (let index = (word.length - 1); index >= 0; index--) {
        invertWord += word[index];
    }

    return invertWord;

}

// invertir todos los valores del array
function invertAllValues(array) {

    let response = [];

    // limpiar array
    let cleanData = cleanArray(array);

    // recorrer array
    for (item of cleanData) {

        // invertir palabra
        response.push(invertWord(item));

    }

    return response;

}