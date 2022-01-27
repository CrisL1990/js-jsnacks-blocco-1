//Legge dall'utente un numero
let number = parseInt(prompt("Inserisci un numero: "));

//Setta il valore del counter del ciclo while a 1
counter = 1;

//Fintanto che counter non raggiunge il valore di number,
//verrà calcolato il valore del cubo di counter stesso.
//Il valore di counter seguirà in ordine crescente i numeri da 1 a number.
while(counter <= number){

    //Crea la variabile che immagazzina il valore del cubo del numero
    let cubo = 0

    //Esegue il calcolo del cubo e lo stampa in console
    cubo = counter**3;
    console.log("Il cubo del numero " + counter + " è uguale a: " + cubo);

    //Incrementa il valore di counter di 1
    counter ++;

    //Prepara la variabile cubo ad immagazzinare il valore del cubo del nuovo numero
    cubo = 0;

}