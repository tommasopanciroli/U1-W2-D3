// un ciclo FOR è una struttura che permette di ripetere una serie di istruzioni
// una numero PRE-DETERMINATO di volte.

// SINSTASSI DEL CICLO FOR
// for(inizializzazione del contatore; condizione da controllare per la ripetizione
// del ciclo; quantità di incremento del contatore){
// il codice va qua dentro
// }

// i++ è uguale a i = i+1
for (let i = 0; i < 10; i++) {
  console.log('DENTRO IL FOR', i)
}

console.log('FUORI DAL FOR')

const arrayOfNames = [
  'daniel',
  'giulia',
  'giovanni',
  'lorenzo',
  'loreta',
  'michele',
  'tommaso',
  'umberto',
]

// la lunghezza di un array è pari al numero dei suoi elementi, in questo caso 8
console.log('LUNGHEZZA ARRAY', arrayOfNames.length)

for (let i = 0; i < arrayOfNames.length; i++) {
  // la condizione è che i sia sempre minore di 8 (la lunghezza dell'array)
  // console.log('i VALE', i)
  console.log(arrayOfNames[i].toUpperCase()) // un nome alla volta
}

let arrayOfNumbers = [45, 7, -5, 0, 98, 1]

for (let i = 0; i < arrayOfNumbers.length; i++) {
  console.log('LA i VALE', i)
  console.log("prendo l'elemento i-esimo dell'array", arrayOfNumbers[i])
}
