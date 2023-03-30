let numeroDigitado = 990
let penultimo = 0
let ultimo = 1
let numero = 0


while (numero < numeroDigitado) {
    console.log(numero)
    if (numero <= 2){
    numero = numero + 1

    } else {

        numero = ultimo + penultimo
        penultimo = ultimo
        ultimo = numero

    }
    if (numero === numeroDigitado) {
        console.log("O Numero: "+numeroDigitado+" pertence a sequencia de fibonacci")
        break
    }
    if (numero > numeroDigitado) {
        console.log("O Numero: "+numeroDigitado+" não pertence a sequencia de fibonacci")
    }
}