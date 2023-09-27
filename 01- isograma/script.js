// EJERCICIO 1: ISOGRAMA
/*
Un string vacío es un isograma.
La función tiene que ser case insensitive e ignorar acentos.
Si el string tiene mas de una palabra retornar false.
Se tiene que hacer clean up del string antes de comparar.
Ejemplos:

func("Murciélago"); // returns true
func("reto"); // returns false
func("Casa"); // returns false
func("PeRrO"); // returns false
func("GaTo"); // returns true
*/

const isograma = function (entrada) {
  //1. pasar todo a minusculas
  const entrada2 = entrada.toLowerCase();
  //2. si hay un espacio = false
  if (entrada2.includes(" ")) return false;
  //3. ir chequeando letra por letra que la actual no exista ya en el resto de la palabra
  for (let i = 0; i < entrada2.length; i++) {
    if (entrada2.slice(i + 1).includes(entrada2[i])) return false;
  }
  //4. si llego al final ok = true
  return true;
};

console.log(isograma("Murciélago")); // returns true
console.log(isograma("reto")); // returns true
console.log(isograma("Casa")); // returns false
console.log(isograma("PeRrO")); // returns false
console.log(isograma("GaTo")); // returns true
console.log(isograma("Murciélago Perro")); // returns false
console.log(isograma("ab cd")); // returns false
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 2: LETRAS POR NUMEROS---------------------------------------------------------------------------------------------------------------------------------------
/*
Reemplazar las letras de un string por su index en el alfabeto (e.g. A = 1 , B = 2 , C = 3 ...)

Consideraciones Adicionales:

Ignorar espacios.
Hacer clean up del string antes de comenzar el swap (para eliminar acentos y caracteres especiales, se sugiere meter en este proceso de clean up el ignorado de espacios).
Ejemplo:

func("abc def"); // returns '1 2 3 4 5 6';
*/

const alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const letrasXnumeros = function (entrada) {
  //1. pasar todo a minusculas, quitar acentos, caracteres especiales, espacios, etc.
  const entrada2 = entrada
    .trim()
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase();
  //2. opcion 1: array precargado con alfabeto, siendo la posicion i+1 la posicion a la que pertenece, entonces recorro el string y voy devolviendo su posicion en consola.
  let numeroEnString = "";
  for (let i = 0; i < entrada2.length; i++) {
    numeroEnString += `${alfabeto.indexOf(entrada2[i]) + 1} `;
  }
  return numeroEnString;
};

console.log(letrasXnumeros("aaa a A 9 % d"));
console.log(letrasXnumeros("abc def"));
console.log(letrasXnumeros("dmz abc"));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 3: STRING TERMINA CON---------------------------------------------------------------------------------------------------------------------------------------
/*
Hacer una función que reciba 2 strings (siempre los va a recibir), y devuelva si el primero termina con el segundo. Ejemplos:

func("abc", "bc"); // returns true
func("abc", "d"); // returns false
*/

const stringTerminaCon = function (string1, string2) {
  return string1.endsWith(string2);
};

console.log(stringTerminaCon("abc", "bc"));
console.log(stringTerminaCon("abc", "d"));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 4: ELEMENTOS PARES --------------------------------------------------------------------------------------------------------------------------------------

/*
Dada una lista de elementos (array), crear una funcion que retorne una nueva lista con solo los elementos que aparecen una cantidad pares de veces.

["A","B","A","C","C","C","C"] // -> ["A","C"]
[1,2,3,1,2] // -> [1,2]
*/

//1. Tengo un array contando las veces impares y otro con las veces pares de cada elemento.
//2. Al recorrer el array original:
//    si el elemento no esta en ningun array, lo agrego al de impares.
//    si no esta en el array de pares pero si en el de impares, lo agrego al de pares y lo quito del de impares.
//    si esta en el de pares lo quito del de pares y lo agrego al de impares.
//3. al final devuelvo el array de pares

const funcCambio = (array1, array2, element) => {
  const index = array1.indexOf(element);
  const x = array1.splice(index, 1);
  array2.push(element);
};

const funcPares = function (entrada) {
  const elPares = [];
  const elImpares = [];
  entrada.forEach((element) => {
    if (elPares.includes(element)) {
      funcCambio(elPares, elImpares, element);
    } else if (elImpares.includes(element)) {
      funcCambio(elImpares, elPares, element);
    } else {
      elImpares.push(element);
    }
  });
  return elPares;
};

console.log(funcPares(["A", "B", "A", "C", "C", "C", "C"]));
console.log(funcPares([1, 2, 3, 1, 2]));
console.log(funcPares([]));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 4 : TRANSFORMADOR ---------------------------------------------------------------------------------------------------------------------------

/*
Hacer una función que reciba un objeto 'data' y lo transforme en la estructura output.

const data = {
  nombres: [STRING],
  edades: [INT],
}
const output = [
  { id: [STRING], nombre: [STRING], edad: [INT] },
  ...
]
Ejemplo:

func({ nombres: ["Bruno", "Andrea"], edades: [20, 19] });
Devuelve:

[
  { id: "1", nombre: "Bruno", edad: 20 },
  { id: "2", nombre: "Andrea", edad: 19 },
];
*/

//1. recorro el objeto data, por cada index de sus variables voy creando un nuevo obj que devolvere en un array.

const transformador = (data) => {
  const output = [];
  if (data.nombres && data.edades) {
    for (let i = 0; i < data.nombres.length; i++) {
      const salida = {};
      salida.id = i + 1;
      salida.nombre = data.nombres[i];
      salida.edad = data.edades[i];
      output.push(salida);
    }
  }

  return output;
};

console.log(transformador({ nombres: ["Bruno", "Andrea"], edades: [20, 19] }));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 5: CEROS AL FINAL -----------------------------------------------------------------------------------------------------------------------------------

/*
Escribir una función que tome un array de valores y retorne el mismo array pero moviendo los ceros al final.

Ejemplo:

moverCeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // [false,1,1,2,1,3,"a",0,0]
Bonus: Implementar la función sin usar una variable de contador
*/

// 1. Creo un array de los 0's que encuentre.
// 2. Recorro el array original, y cuando se encuentre un 0 lo quito del mismo y lo ingreso al de 0's.
// 3. Inserto el array de 0's al final del original.
// tambien podria haberlo hecho con un contador de cantidad de veces y luego sumar la cantidad de veces necesarias un 0 al final.

const moverAlFinal = (entrada) => {
  const ceros = [];
  const copia = entrada.slice();
  for (let i = 0; i <= entrada.length; i++) {
    if (entrada[i] === 0) {
      copia.splice(i, 1);
      ceros.push(0);
    }
  }
  return copia.concat(ceros);
};

console.log(moverAlFinal([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

//funcion sin usar for, usando forEach.

const moverAlFinal2 = (entrada) => {
  const ceros = [];
  let aux = true;
  while (aux) {
    if (entrada.some((el) => el === 0)) {
      const index = entrada.indexOf(0);
      entrada.splice(index, 1);
      ceros.push(0);
    } else {
      aux = false;
    }
  }
  return entrada.concat(ceros);
};

console.log(moverAlFinal2([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

//funcion usando el contador de 0's

const moverAlFinal3 = (entrada) => {
  let ceros = 0;
  const copia = entrada.slice();
  for (let i = 0; i <= entrada.length; i++) {
    if (entrada[i] === 0) {
      copia.splice(i, 1);
      ceros++;
    }
  }
  for (let i = 0; i < ceros; i++) {
    copia.push(0);
  }
  return copia;
};

console.log(moverAlFinal3([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

//otra variacion, sin usar contador, agregando el 0 al final de cada vuelta

const moverAlFinal4 = (entrada) => {
  const copia = entrada;
  for (let i = 0; i <= entrada.length; i++) {
    if (entrada[i] === 0) {
      copia.splice(i, 1);
      copia.push(0);
    }
  }
  return copia;
};

console.log(moverAlFinal4([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 6: CONTINENTES REPRESENTADOS -----------------------------------------------------------------------------------------------------------------------

/*
Continentes representados
Escribir una función que recibe como parametro una lista de desarrolladores que se anotaron para asistir a una meetup. La función debe devolver true si existe al
menos una persona de cada continente (Africa, Americas, Asia, Europe, Oceania).

Nota: Los continentes siempre estarán presentes y escritos correctamente.

Ejemplo:

continentesRepresentados([
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
  {
    firstName: "Agustín",
    lastName: "M.",
    country: "Chile",
    continent: "Americas",
    age: 37,
    language: "C",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Laia",
    lastName: "P.",
    country: "Andorra",
    continent: "Europe",
    age: 55,
    language: "Ruby",
  },
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
]); // true
Bonus:

Hacer otra función para retornar la cantidad de JavaScript developers que vienen de Europa y escribir los tests necesarios
Hacer otra función que retorne el mismo array pero con una nueva propiedad greeting que contenga el valor Hi < firstName here >, what do you like the most about < language here >? y escribir los tests necesarios
Hacer otra función que liste los lenguajes representados, sin repetir y escribir los tests necesarios
*/

// creo un array vacio donde ire agregando los continentes de cada concursante si es que no existe ya.
// si el array tiene como longitud la cantidad de continentes ya devuelve true, si llega al final y no tiene la longitud devuelve false.

const continentes = [];
let validador = false;
const continentesRepresentados = (dataEntrada) => {
  dataEntrada.forEach((desarrollador) => {
    if (!continentes.includes(desarrollador.continent)) {
      continentes.push(desarrollador.continent);
    }
  });
  return continentes.length === 5;
};

// otra version usando un set, no necesito comprobar si ya esta o no
const continentesRepresentadosSet = (data) => {
  const continSet = new Set();
  data.forEach((dev) => {
    continSet.add(dev.continent);
  });
  return continSet.size === 5;
};

// Hacer otra función para retornar la cantidad de JavaScript developers que vienen de Europa. Caso generico.
const devsEnContinente = (lang, cont, data) => {
  let contador = 0;
  data.forEach((dev) => {
    if (dev.language === lang && dev.continent === cont) contador++;
  });
  return contador;
};

//Hacer otra función que retorne el mismo array pero con una nueva propiedad greeting que contenga el valor
//Hi < firstName here >, what do you like the most about < language here >?
const agregadoGreeting = (data) => {
  data.forEach((dev) => {
    dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;
  });
  return data;
};

//Hacer otra función que liste los lenguajes representados, sin repetir. Uso un set para que sea mas sencillo.
const lenguajesRepresentados = (data) => {
  const lengs = new Set();
  data.forEach((dev) => {
    lengs.add(dev.language);
  });
  return lengs;
};

const dataEntrada = [
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
  {
    firstName: "Agustín",
    lastName: "M.",
    country: "Chile",
    continent: "Americas",
    age: 37,
    language: "C",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Laia",
    lastName: "P.",
    country: "Andorra",
    continent: "Europe",
    age: 55,
    language: "Ruby",
  },
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
];

console.log(continentesRepresentados(dataEntrada));
console.log(continentesRepresentadosSet(dataEntrada));
console.log(devsEnContinente("JavaScript", "Europe", dataEntrada));
console.log(agregadoGreeting(dataEntrada));
console.log(lenguajesRepresentados(dataEntrada));

console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 7 - PALINDROMOS --------------------------------------------------------------------------------------------------------------------------------------------

/*
Un palindromo es una palabra, frase, número o secuencia de caracteres que se lee igual al derecho o al reves.

Ejemplo:

232
110011
54322345
Escribir una función que verifique si un números puede ser reordenado para formar un palíndromo.

Nota: Los valores siempre serán numéricos y positivos.

Ejemplo:

5        =>  true
2121     =>  true
1331     =>  true
3357665  =>  true
1294     =>  false
*/

/*
Para que sea palindromo su cantidad de numeros impares debe ser 1 o menor, si es + que 1 no puede armarse palindromo.
*/

const esPalindromo2 = (numero) => {
  const numeroStr = numero.toString();
  const impares = new Set();
  for (let i = 0; i < numeroStr.length; i++) {
    if (impares.has(numeroStr[i])) {
      impares.delete(numeroStr[i]);
    } else impares.add(numeroStr[i]);
  }
  return impares.size <= 1;
};

console.log(5, esPalindromo2(5));
console.log(2121, esPalindromo2(2121));
console.log(1331, esPalindromo2(1331));
console.log(3357665, esPalindromo2(3357665));
console.log(1294, esPalindromo2(1294));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 8 - VALIDACION DE PARENTESIS --------------------------------------------------------------------------------------------------------------------------------

/*
Escribe una función que tome como parametro un string con paréntesis y determina si el orden de los paréntesis es válido. La función debería retornar true si es válido o false si no lo es.

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

const parenthesisOk2 = (data) => {
  const aperturas = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "(") {
      aperturas.push(data[i]);
    } else if (data[i] === ")") {
      if (aperturas.length === 0) {
        return false; //significa cierre sin haberlo abierto
      }
      aperturas.pop();
    }
  }
  return aperturas.length === 0;
};

console.log(parenthesisOk2("()"));
console.log(parenthesisOk2(")(()))"));
console.log(parenthesisOk2("("));
console.log(parenthesisOk2("(())((()())())"));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 9 : ENCUENTRA AL HACKER ------------------------------------------------------------------------------------------

/*
Alguien estuvo hackeando las notas. El historial de notas de cada estudiante se presenta como un array de arrays.
El primer elemento de cada array es el nombre del estudiante, el segundo es el puntaje el tercero es un array de sus calificaciones.

const estudiantes = [
  ["goncy", 445, ["B", "A", "A", "C", "A", "A"]],
  ["mati", 140, ["B", "A", "A", "A"]],
  ["caro", 200, ["B", "A", "A", "C"]]
];
Cada calificación corresponde a un puntaje:

A: 30 puntos
B: 20 puntos
C: 10 puntos
D: 5 puntos
Todo el resto: 0 puntos
Si hay al menos 5 calificaciones y todas son B o mayor, 20 puntos extra se suman al puntaje. Luego de todos los calculos se debe limitar el puntaje a un máximo de 200.

Retornar un listado del nombre de los hackers.

const estudiantes = [
  ["goncy", 445, ["B", "A", "A", "C", "A", "A"]],
  ["mati", 140, ["B", "A", "A", "A"]],
  ["caro", 200, ["B", "A", "A", "C"]]
];

// => ["goncy", "caro"]
*/

const puntajes = new Map();
puntajes.set("A", 30);
puntajes.set("B", 20);
puntajes.set("C", 10);
puntajes.set("D", 5);
puntajes.set("E", 0);
puntajes.set("F", 0);

const checkNotas = (estudiantes, puntajes) => {
  const alumnosFake = [];
  estudiantes.forEach((alumn) => {
    const valorReal = alumn[2].map(function (elem) {
      return puntajes.get(elem);
    });
    const totalReal = valorReal.reduce((acum, nota) => {
      return acum + nota;
    }, 0);
    console.log(totalReal, alumn[1]);
    if (totalReal < alumn[1] || alumn[2].length >= 5 || alumn[1] > 200) {
      alumnosFake.push(alumn[0]);
    }
  });
  return alumnosFake;
};

const estudiantes = [
  ["goncy", 445, ["B", "A", "A", "C", "A", "A"]],
  ["mati", 110, ["B", "A", "A", "A"]],
  ["caro", 200, ["B", "A", "A", "C"]],
];

console.log(checkNotas(estudiantes, puntajes));
console.log(
  "-----------------------------------------------------------------"
);
// EJERCICIO 10 : PALABRAS GIRADAS  --------------------------------------------------------------------------------------------------------------------

/*
Escriba una función que tome una cadena de una o más palabras y devuelva la misma cadena, pero con todas las palabras de cinco o más letras invertidas (este valor puede ser otro, pasarlo como parametro).
Las cadenas pasadas solo consistirán en letras y espacios. Los espacios solo se incluirán cuando haya más de una palabra presente.

Ejemplos
girar("Hola como estás"); // => "Hola como sátes"
girar("Esto es una prueba"); // => "Esto es una abeurp"
*/

const palabrasGiradas = (entrada, cantLetras) => {
  const palsSep = entrada.split(" ");
  const final = [];
  palsSep.forEach((pal) => {
    if (pal.length >= cantLetras) {
      final.push(pal.split("").reverse().join(""));
    } else {
      final.push(pal);
    }
  });
  return final.join(" ");
};

// con un map en lugar del forEach

const palabrasGiradas2 = (entrada, cantLetras) => {
  return entrada
    .split(" ")
    .map((pal) => {
      return pal.length >= cantLetras ? pal.split("").reverse().join("") : pal;
    })
    .join(" ");
};

console.log(palabrasGiradas("Hola como estas", 5));
console.log(palabrasGiradas("Esto es una prueba", 5));
console.log(palabrasGiradas2("Hola como estas", 5));
console.log(palabrasGiradas2("Esto es una prueba", 5));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 11 : MARQUESINA  --------------------------------------------------------------------------------------------------------------------

/*

Crea una función llamada "marquesina()" que acepte una cadena de texto como argumento y devuelva un array de cadenas de texto,
donde cada letra de la cadena de entrada sea rotada al final.

marquesina("Hola"); // => ["olaH", "laHo", "aHol", "Hola"]

La cadena original debe estar incluida en el array de salida. El orden es importante. Cada elemento del array de salida debe ser la versión rotada del elemento anterior.
*/

const marquesina = (entrada) => {
  let variacion = entrada;
  const final = [];
  for (let i = 0; i < entrada.length; i++) {
    variacion = variacion.slice(1) + variacion[0];
    final.push(variacion);
  }
  return final;
};

console.log(marquesina("Hola"));
console.log(marquesina("Dario"));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 12: ORDENAR EMOCIONES ---------------------------------------------------------------------------------------------------------------

/*
Tendrás una función llamada "ordenarEmociones" que devolverá un arreglo de emociones ordenadas. Tiene dos parámetros, el primer parámetro llamado "emociones"
esperará un arreglo de emociones donde una emoción será una de las siguientes:

":D" -> Súper Feliz
":)" -> Feliz
":|" -> Normal
":(" -> Triste
"T_T" -> Súper Triste

Y el segundo parámetro se llama orden, si este parámetro es true, entonces el orden de las emociones será descendente (de Súper Feliz a Súper Triste), 
si es false, entonces será ascendente (de Súper Triste a Súper Feliz)

Ejemplo si el orden es true con el arreglo anterior:

[":D", ":)", ":|", ":(", "T_T"]; // => Súper Feliz -> Feliz -> Normal -> Triste -> Súper Triste

Si orden es false:

["T_T", ":(", ":|", ":)", ":D"]; // => Súper Triste -> Triste -> Normal -> Feliz -> Súper Feliz
Ejemplo:

arr = [":D", ":|", ":)", ":(", ":D"];
ordenarEmociones(arr, true); // [ ":D", ":D", ":)", ":|", ":(" ]
ordenarEmociones(arr, false); // [ ":(", ":|", ":)", ":D", ":D" ]

El arreglo podría estar vacío, en ese caso devuelve el mismo arreglo vacío. Todas las emociones serán válidas.
*/

const arrOrden = [":D", ":)", ":|", ":(", "T_T"];

const ordenarEmociones = (entrada, condicion) => {
  const aDevolver = entrada.slice();
  aDevolver.sort((a, b) => {
    if (a === ":D" && b === ":)") return 1;
    if (a === ":D" && b === ":|") return 1;
    if (a === ":D" && b === ":(") return 1;
    if (a === ":D" && b === "T_T") return 1;
    if (a === ":)" && b === ":|") return 1;
    if (a === ":)" && b === ":(") return 1;
    if (a === ":)" && b === "T_T") return 1;
    if (a === ":)" && b === ":D") return -1;
    if (a === ":|" && b === ":(") return 1;
    if (a === ":|" && b === "T_T") return 1;
    if (a === ":|" && b === ":D") return -1;
    if (a === ":|" && b === ":)") return -1;
    if (a === ":(" && b === "T_T") return 1;
    if (a === ":(" && b === ":D") return -1;
    if (a === ":(" && b === ":)") return -1;
    if (a === ":(" && b === ":|") return -1;
    if (a === "T_T" && b === ":D") return -1;
    if (a === "T_T" && b === ":)") return -1;
    if (a === "T_T" && b === ":|") return -1;
    if (a === "T_T" && b === ":(") return -1;
  });

  if (!condicion) return aDevolver;
  else return aDevolver.reverse();
};

arr = [":D", ":|", ":)", ":(", ":D"];

console.log(ordenarEmociones(arr, true));
console.log(ordenarEmociones(arr, false));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 13: CONTAR DUPLICADOS ---------------------------------------------------------------------------------------------------------------------

/*
Escribir una función que devuelva la cantidad de caracteres alfabéticos y dígitos numéricos distintos, sin distinguir entre mayúsculas y minúsculas,
que aparecen más de una vez en la cadena de entrada. Se puede suponer que la cadena de entrada solo contiene letras (mayúsculas y minúsculas) y dígitos numéricos.

"abcde" -> 0 // => ningún carácter se repite más de una vez
"aabbcde" -> 2 // => 'a' y 'b'
"aabBcde" -> 2 // => 'a' aparece dos veces y 'b' dos veces (b y B)
"indivisibility" -> 1 // => 'i' aparece seis veces
"Indivisibilities" -> 2 // => 'i' aparece siete veces y 's' dos veces
"aA11" -> 2 // => 'a' y '1'
"ABBA" -> 2 // => 'A' y 'B' aparecen dos veces cada uno
*/

//1. tolowercase la entrada
//2. creo un set donde guardo los duplicados
//3. recorro la entrada, y si la letra actual ya esta en el resto de la entrada, lo agrego al set
//4. como el set tiene entradas unicas, devuelvo la longitud del set, que son la cant de caracteres que se repiten en la entrada

const contarDuplicados = (entrada) => {
  entrada = entrada.toLowerCase();
  const duplicados = new Set();
  for (let i = 0; i < entrada.length; i++) {
    if (entrada.slice(i + 1).includes(entrada[i])) {
      duplicados.add(entrada[i]);
    }
  }
  return duplicados.size;
};

console.log(contarDuplicados("abcde"));
console.log(contarDuplicados("aabbcde"));
console.log(contarDuplicados("aabBcde"));
console.log(contarDuplicados("indivisibility"));
console.log(contarDuplicados("Indivisibilities"));
console.log(contarDuplicados("aA11"));
console.log(contarDuplicados("ABBA"));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 14: CONTAR LOS LENGUAJES --------------------------------------------------------------------------------------------------------------------

/*
Dado un array de objetos representando datos sobre desarrolladores que se anotaron a una meetup, escribir una función que cuente la cantidad de desarrolladores que hay para cada lenguaje.

const desarrolladores = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];

// => { C: 2, JavaScript: 1, Ruby: 1 }
*/

const contarDesarrolladores = (devs) => {
  const contador = new Map();
  devs.forEach((dev) => {
    if (contador.has(dev.language)) {
      let cantidad = contador.get(dev.language) + 1;
      contador.delete(dev.language);
      contador.set(dev.language, cantidad);
    } else {
      contador.set(dev.language, 1);
    }
  });
  return contador;
};

const desarrolladoress = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];

console.log(contarDesarrolladores(desarrolladoress));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 15: Encuentra al aislado ------------------------------------------------------------------------------------------------------------------------

/*
Dado un array de números enteros, pares o impares, de al menos 3 elementos, donde todos los elementos son pares o todos los elementos son impares, excepto uno. Escribir una función que tome como parametro el array y devuelva el elemento aislado.

[2, 4, 0, 100, 4, 11, 2602, 36]  =>  11
[160, 3, 1719, 19, 11, 13, -21]  =>  160

will try to explain it in english
*/

//1. as the array has at least 3 elements, i will take directly the firsts 2 and compare if they're even or odd.
//2. if they're even will search for the rest of the array and finish when i find the odd.
//3. if they're odd will search for the rest of the array and finish when i find the even.
//4. if can't decide, will take the third element and go to 2. or 3.
//after this, i will make another function to search for the rest of the array and reutilize it on steps 2 and 3.

const isolated = (entry) => {
  if (isOdd(entry)) {
    let notfound = true;
    let i = 0;
    while (notfound) {
      if (entry[i] % 2 != 0) {
        notfound = false;
        return entry[i];
      }
      i++;
    }
  } else {
    let notfound = true;
    let i = 0;
    while (notfound) {
      if (entry[i] % 2 != 1) {
        notfound = false;
        return entry[i];
      }
      i++;
    }
  }
};

const isOdd = (entry) => {
  return (
    (entry[0] % 2 === 0 && entry[1] % 2 === 0) ||
    (entry[0] % 2 === 0 && entry[2] % 2 === 0) ||
    (entry[1] % 2 === 0 && entry[2] % 2 === 0)
  );
};

console.log(isolated([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(isolated([160, 3, 1719, 19, 11, 13, -21]));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 16: ENCONTRAR AL MAS VIEJO ------------------------------------------------------------------------------------------------------------------------------

/*
Dado un array de objetos representando datos sobre desarrolladores que se anotaron a una meetup, escribir una función que devuelva una lista con el desarrollador con más edad. En caso de que haya más de uno compartiendo el podio, devolver todos los elementos que lo compartan en el array.

const desarrolladores = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
];

[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
] */

const getMasViejo = (devs) => {
  let edad = 0;
  let aDevolver = [];
  devs.forEach((dev) => {
    if (dev.age > edad) {
      aDevolver = [];
      aDevolver.push(dev);
      edad = dev.age;
    } else if (dev.age === edad) {
      aDevolver.push(dev);
    }
  });
  return aDevolver;
};

const desarrolladores16 = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
];

console.log(getMasViejo(desarrolladores16));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 17: PEDIR MAS DATOS ------------------------------------------------------------------------------------------------------------------------------------

/*
Dado un array de objetos representando datos sobre desarrolladores que se anotaron a una meetup, escribir una función que chequee por propiedades en null y en caso de encontrar,
agregar una una propiedad question con el valor: Hi, could you please provide your <property name>. Solo se deberían devolver los desarrolladores que contienen la propiedad question.
*/

const askForData = (devs) => {
  devs.forEach((dev) => {
    const nulleados = Object.keys(dev).filter((key) => dev[key] === null);
    if (nulleados.length > 0) {
      dev.question = `Hi, could you please provide your ${nulleados}`;
    }
  });
  console.log(devs);
};

const desarrolladores17 = [
  {
    firstName: null,
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: null,
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

askForData(desarrolladores17);
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 18: ENCONTRAR LA MEDIA --------------------------------------------------------------------------------------------------------------------------------

/*
Dado un array de objetos representando datos sobre desarrolladores que se anotaron a una meetup, escribir una función que encuentre la media de edad entre los inscriptos.

*/

const getMedia = (entry) => {
  if (entry.length === 0) {
    return null;
  }
  const total = entry
    .map((dev) => {
      return dev.age;
    })
    .reduce((sum, acum) => {
      return sum + acum;
    }, 0);
  return total / entry.length;
};

const desarrolladores18 = [
  {
    firstName: "Maria",
    lastName: "Y.",
    country: "Cyprus",
    continent: "Europe",
    age: 30,
    language: "Java",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 70,
    language: "Python",
  },
];

console.log(getMedia(desarrolladores18));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 19: ESCONDIDITTO ---------------------------------------------------------------------------------------------------------------------------

/*
Ditto es un Pokémon que puede transformarse en casi cualquier otro Pokémon. En el laboratorio están aislados para evitar confundirlos con otros y poder tratarlos adecuadamente.
Pero un Ditto se escapó, sabemos que este Ditto en particular se convierte siempre en el Pokémon que tenga a sus lados, así que decidimos ponerlos en fila.
Sabemos que el Ditto va a tener al mismo Pokémon delante y detrás.

Implementa una función que reciba un listado de Pokémon y devuelva el índice de Ditto en esa lista.

Nunca habrá más de 3 Pokémon iguales juntos ni menos de 3 Pokémon en total

['abra', 'pikachu', 'psyduck', 'psyduck', 'blastoise', 'blastoise', 'blastoise', 'charmander'] => 5
['pikachu', 'pikachu', 'pikachu', 'psyduck', 'blastoise'] => 1
*/

//como no habra menos de 3 sabemos que la 1er iteracion la haremos comparando el nro 2 con el 1 y el 3. (actual con el -1 y +1)

const indexDitto = (pokes) => {
  let index = 0;
  for (let i = 1; i < pokes.length - 1; i++) {
    if (pokes[i] === pokes[i - 1] && pokes[i] === pokes[i + 1]) {
      return i;
    }
  }
};

console.log(
  indexDitto([
    "abra",
    "pikachu",
    "psyduck",
    "psyduck",
    "blastoise",
    "blastoise",
    "blastoise",
    "charmander",
  ])
);
console.log(
  indexDitto(["pikachu", "pikachu", "pikachu", "psyduck", "blastoise"])
);
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 20: VOTACION -----------------------------------------------------------------------------------------------------------------------------------------

/*
Un centro de jubilados realizó una votación para saber que juego deberían jugar la semana que viene. Como son muchos ancianos en el centro, abrieron varias mesas de votación para poder votar. El problema es que algunos jubilados se olvidaron si ya habían votado o no y votaron varias veces en diferentes mesas.

Por suerte, al votar se piden diferentes datos, como el id. Por ende debemos implementar una función que itere todas las mesas y nos devuelva una única lista con solamente un voto por participante.

Nuestra función además de las mesas debe recibir el parámetro por el cual deberíamos hacer la unión

Podemos asumir que los votantes siempre emitieron el mismo voto en las diferentes mesas

// Input
unificarVotos(
  [
    [{id: "123456", nombre: 'Gaspar', voto: 'Bingo'}, {id: "234123", nombre: 'Clelia', voto: 'Sudoku'}],
    [{id: "123456", nombre: 'Gaspar', voto: 'Bingo'}],
    [{id: "643723", nombre: 'Pedro', voto: 'Sudoku'}]
  ],
  "id"
)

// Output
[
  {id: "123456", nombre: 'Gaspar', voto: 'Bingo'},
  {id: "234123", nombre: 'Clelia', voto: 'Sudoku'},
  {id: "643723", nombre: 'Pedro', voto: 'Sudoku'}
]
*/

const unificarVotos = (votos, tipo) => {
  const votosUnicos = new Map();
  votos.forEach((mesa) => {
    mesa.forEach((voto) => {
      if (votosUnicos.get(voto[tipo]) === undefined) {
        votosUnicos.set(voto[tipo], voto);
      }
    });
  });
  return [...votosUnicos.values()];
};

const votos = [
  [
    { id: "123456", nombre: "Gaspar", voto: "Bingo" },
    { id: "234123", nombre: "Clelia", voto: "Sudoku" },
  ],
  [{ id: "123456", nombre: "Gaspar", voto: "Bingo" }],
  [{ id: "643723", nombre: "Pedro", voto: "Sudoku" }],
];

console.log(unificarVotos(votos, "id"));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 21 : LIS (Longest Increasing Subsequence) ----------------------------------------------------------------------------------------------------------

/*
Se necesita implementar una función que recibe un array de enteros positivos cómo parámetro y tiene que devolver la secuencia incremental más larga (LIS: Longest increasing subsequence).
Una LIS es un set de la lista original en dónde los números están ordenados, del más chico al más grande.
La secuencia no tiene que ser contigua o única, y obviamente puede haber varias secuencias distintas.

Por ejemplo: Si el array es [4, 3, 5, 1, 6] una posible LIS es [3, 5, 6] y otra es [1, 6]. Para este array, la función tiene que devolver 3 porque es el largo de la LIS más larga.

[9, 9, 4, 2]  =>  1
[10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]  =>  7
*/

//variable mas chica init en 0, recorro el array. si el actual es mas grande que el mas chico lo actualizo y

const lis = (entrada) => {
  const arrCont = new Array(entrada.length).fill(1);

  for (let i = 1; i < entrada.length; i++) {
    for (let j = 0; j < i; j++) {
      if (entrada[i] > entrada[j] && arrCont[i] < arrCont[j] + 1) {
        arrCont[i] = arrCont[j] + 1;
      }
    }
  }
  return Math.max(...arrCont);
};

console.log(lis([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]));
console.log(lis([9, 9, 4, 2]));
console.log(
  "-----------------------------------------------------------------"
);

// EJERCICIO 21: URINALES -------------------------------------------------------------------------------------------------------------------------------------------------

/*
En los baños de hombre hay una regla inquebrantable que es dejar un urinal libre entre vos y la persona de al lado.
Por ejemplo, si hay 3 urinales y una persona está en el urinal de la izquierda, vos tenes que ir inmediatamente al de la derecha.
Con esto podemos decir que un máximo de 3 personas puede orinar si hay 5 urinales y sólo 2 si hay 4.

Tú tarea: Escribir una función que retorne la cantidad máxima de urinales libres (un entero) siguiendo la regla que mencionamos.

Input: Un string que contiene 1s y 0s (Por ejemplo: 10001) (1 <= Urinales <= 20) Los 1 significa que el urinal está ocupado y 0 está libre

Nota: Si hay un error en el string como por ejemplo: 011, retornar -1

"10001" => 1 (10101)
"1001" => 0 (1001)
"00000" => 3 (10101)
"000" => 2 (101)
"01000" => 1 (01010 o 01001)
*/

//considero que hay al menos 3 urinales siempre. un 1 puede ir solo entre dos 0's o al principio y al final, pero nunca junto a un 1.
// paso el string a un array y voy contabilizando si se encuentra entre dos 0's.

const urinalesLibres = (urinales) => {
  const arrayLibres = new Array(urinales.length);
  for (let i = 0; i < urinales.length; i++) {
    arrayLibres[i] = urinales[i] === "1" ? 1 : 0;
  }
  let contador = 0;
  for (let i = 0; i <= arrayLibres.length; i++) {
    if (arrayLibres[i] === 0 && arrayLibres[i + 1] === 0 && i === 0) {
      //primera ocurrencia
      contador++;
      arrayLibres[i] = 1;
    } else if (
      arrayLibres[i] === 0 &&
      arrayLibres[i - 1] === 0 &&
      arrayLibres[i + 1] === 0
    ) {
      contador++;
      arrayLibres[i] = 1;
    } else if (
      i === arrayLibres.length &&
      arrayLibres[i - 1] === 0 &&
      arrayLibres[i - 2] === 0
    ) {
      contador++;
      arrayLibres[i - 1] = 1;
    }
  }
  return contador;
};

const urinalesLibres2 = (urinales) => {
  let contador = 0;
  for (let i = 0; i < urinales.length; i++) {
    if (urinales[i] === "1") {
      continue;
    }
    if (urinales[i - 1] != "1" && urinales[i + 1] != "1") {
      contador++;
      i++;
    }
  }
  return contador;
};

/*console.log("001", urinalesLibres("001"));
console.log("1001", urinalesLibres("1001"));
console.log("00000", urinalesLibres("00000"));
console.log("000", urinalesLibres("000"));
console.log("01000", urinalesLibres("01000"));
*/
console.log("001", urinalesLibres2("001"));
console.log("1001", urinalesLibres2("1001"));
console.log("00000", urinalesLibres2("00000"));
console.log("000", urinalesLibres2("000"));
console.log("01000", urinalesLibres2("01000"));

console.log(
  "-----------------------------------------------------------------"
);
