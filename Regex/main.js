
// .: Coincide con cualquier carácter individual excepto los caracteres de nueva línea.
// ^: Ancla la coincidencia al principio de la cadena.
// $: Ancla la coincidencia al final de la cadena.
// []: Coincide con cualquier carácter individual dentro de los corchetes.
// |: Alternancia, coincide con la expresión antes o después de la barra vertical.
// *: Coincide con cero o más ocurrencias del elemento precedente.
// +: Coincide con una o más ocurrencias del elemento precedente.
// ?: Coincide con cero o una ocurrencia del elemento precedente.
// : Escapa caracteres especiales, permitiendo que se traten como literales.

const text = "Helloppp world helloone Hello5 Helloppp";
const nombres = "diego@"
const nombres2 = "Juan"
const nombres5 = "Pedro"
const nombres3 = "Jose"

const whiteList = /Diego|Juan[@]/i;


console.log(whiteList.test(nombres));









// const encontratLetrasEnNumero = "12323423/"

// const regexInicio = /^Hello/g;
// const regexFinal = /Hello$/g;
// const encontrarLetra = /[@./]/;

// const cuantosHelloTiene = text.match(regexFinal);

// if (cuantosHelloTiene) {
//   cuantosHelloTiene.forEach((encontrado) => console.log(encontrado));
// } else {
//     console.log("no Tiene")
// }

// console.log(regexFinal.exec(text) + " Este es exacto");
// console.log(text.match(regex) + " Este es encontrar")
// console.log(text.search(regex) + " Este es buscar")
// console.log(text.replace(regex, "Parra") + " ... + Este es remplazar")

// console.log(encontrarLetra.test(encontratLetrasEnNumero));

