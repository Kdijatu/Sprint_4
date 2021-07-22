///////////////////////////EXERCICI 1 

///////////Funció 1
const multiply = (num1, num2)=> num1*num2;

console.log(multiply(3, 7));


///////////Funció 2
const  toCelsius = fahrenheit => (5/9) * (fahrenheit-32);

console.log(toCelsius(53));


///////////Funció 3
const padZeros = (num, totalLen) => {
   var numStr = num.toString();
   var numZeros = totalLen - numStr.length;
   for (var i = 1; i <= numZeros; i++) {
      numStr="0" + numStr; 
      } 
   return numStr;
 } 


console.log(padZeros(5,7));


///////////Funció 4
const power = (base, exponent) => {
   var result=1; 
   for (var i=0; i < exponent; i++) { 
         result *=base; 
   } 
   return result;
}

console.log(power(2,3));

///////////Funció 5
const greet = (who) => console.log("Hello " +  who);

greet("Kadi");



///////////////////////////EXERCICI 2

//Arregla l'error del següent bloc de codi:
var users = 
[{ firstName: 'Homer', lastName: 'Simpson' },
{ firstName: 'Marge', lastName: 'Simpson' },
{ firstName: 'Bart', lastName: 'Simpson' },
{ firstName: 'Lisa', lastName: 'Simpson' },
{ firstName: 'Maggie', lastName: 'Simpson' }];

let usersNames = users.map(function (user) {
   return user.firstName;
});

console.log(usersNames);





///////////////////////////EXERCICI 3

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let result = epic.reduce((total, currentValue) =>  total + " " + currentValue);

console.log(result);




///////////////////////////EXERCICI 4


/*Crear una funció que accepti un string i retornada aquest string revertit. 
Nota: Usar funció fletxa (arrow functions), l'operador de prograpación 
(spread operator) y el mètode .reverse()*/

const revertir = string => [...string].reverse().join("");

console.log(revertir("mesa y silla"));


///////////////////////////EXERCICI 5


/*Modifica la funció 'a()' per a reemplaçar la promesa per aync/await: */


const tasquesCompletades = [];
async funtion a() {
   // Ens esperem que la funció b acabi

   let tasquesAsync = new Promise(resolve, reject) =>

   b().then() = > {
         doMoreWork();
   }

   let result = await tasquesAsync;
}


///////////////////////////EXERCICI 6

/*Tenim un array de tasques i volem aconseguir un array que 
contingui únicament els noms de les tasques. 


- Usar .forEach() per obtenir aquest array.
- Usar .map() per obtenir aquest array.
var tasks = [
{
   'name' : 'Start React web',
   'duration' : 120
},
{
   'name' : 'Work out',
   'duration' : 60
},
{
   'name' : 'Procrastinate on facebook',
   'duration' : 240
}
];
*/