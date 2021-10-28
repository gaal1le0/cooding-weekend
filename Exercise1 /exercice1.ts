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
const a: Array<string> = ['10', 'juan', '@12', 'null', 'antonioPerezDelCarmen', 'abcdefghtioiasoisdjads', 'Manolo', 'Perez', 'Soledad'];
const b: Array<any> = ['OMG?', 'Whats going on?', 'How much is it?', 18, null, 'undefined', function() {}];
const c: Array<string> = ['Jeferson', 'Matilda', 'R@fael', '1van', 'Pep3', 'Loquesea', 'Fel1berto', 'Pepit@', 'D@M'];

// crear numero aleatorio
function randomNumberTS(array: Array<any>) : number{
    return Math.floor(Math.random() * array.length);
}

// limpiar array de datos no validos
function cleanArrayTS(array: Array<any>) : Array<string> {

    // usando programacion imperativa
    let response: Array<string> = [];

    // recorrer el array completo
    for (let item of array) {
        if (typeof(item) === 'string') {
            response.push(item);
        }
    }

    return response;

}

// crear un objeto y limpiar todas las functiones
function organizeCleanDataTS() : object {

    return {
        surnames: cleanArray(a),
        excuses: cleanArray(b),
        dates: cleanArray(c)
    };

}

// genera una escusa aleatoria a partir de los datos recibidos
function excuseGeneratorTS() : string {

    let response: string;

    //traemos los datos limpios
    const cleanData = organizeCleanData();

    //compose response
    response += `${cleanData.surnames[randomNumber(cleanData.surnames)]} `;
    response += `${cleanData.excuses[randomNumber(cleanData.excuses)]} `;
    response += cleanData.dates[randomNumber(cleanData.dates)];

    return response;

}

// contar el numero de repeticiones de letra en un array
function countLetterMatchesTS(array: Array<any>) : object {

    let response = {};

    // limpiamos el array
    const cleanData = cleanArray(array);

    // recorremos el array
    for (let item of cleanData) {

        // recorremos cada letra dal item
        for (let letter of item) {

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
function removeMatchesTS(array: Array<any>) : Array<string> {

    // limpiar array
    let cleanData = cleanArray(array);

    // USANDO PROGRAMACION IMPERATIVA
    let response = [];

    // recorremos el array
    for (let item of cleanData) {

        //comprobamos si esta ya guardado
        if (!response.includes(item)) {
            response.push(item);
        }

    }

    return response;

}

// invertir palabra 
function invertWordTS(word: string) : string {

    let invertWord: string;

    // recorremos cada letra
    for (let index = (word.length - 1); index >= 0; index--) {
        invertWord += word[index];
    }

    return invertWord;

}

// invertir todos los valores del array
function invertAllValuesTS(array: Array<any>) : Array<string> {

    let response: Array<string> = [];

    // limpiar array
    let cleanData = cleanArray(array);

    // recorrer array
    for (let item of cleanData) {

        // invertir palabra
        response.push(invertWord(item));

    }

    return response;

}