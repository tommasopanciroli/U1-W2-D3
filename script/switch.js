// uno SWITCH è un costrutto che vi permette di inserire molti BLOCCHI di codice
// a seguito della valutazione di una variabile o di un'espressione

const cartTotal = 35

let discountPercentage

if (cartTotal < 10) {
  // da 0 a 9
  discountPercentage = 0
} else if (cartTotal < 25) {
  // da 10 a 24
  discountPercentage = 10
} else if (cartTotal < 50) {
  // da 25 a 49
  discountPercentage = 15
} else if (cartTotal < 100) {
  // da 50 a 99
  discountPercentage = 20
} else {
  //più di 100
  discountPercentage = 30
}

const total = cartTotal * (1 - discountPercentage / 100)

console.log('Il totale del carrello è: €', cartTotal)
console.log('La percentuale di sconto è: %', discountPercentage)
console.log('Il totale a pagare è: €', total)

//
const eyeColor = 'brown'

if (eyeColor === 'green') {
  console.log('Hai degli occhi bellissimi')
} else if (eyeColor === 'azure') {
  console.log('Hai degli occhi particolari')
} else if (eyeColor === 'brown') {
  console.log('hai degli occhi che non sono niente di particolare')
} else {
  console.log('Hai degli occhi che non riesco a descrivere')
}

// uno SWITCH è uno SUGAR COATING di tanti rlse if()

switch (eyeColor) {
  case 'green':
    console.log('hai degli occhi bellissimi')
    break

  case 'azure':
    console.log('hai degli occhi particolari')
    break

  case 'brown':
    console.log('hai degli occhi che non sono niente di particolare')
    break

  default:
    console.log('hai degli occhi che non riesco a descrivere')
}
