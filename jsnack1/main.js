//Definisce quanti numeri sono richiesti in input dall'utente
let numbers = 10;

//Definisce una lista all'interno della quale saranno immagazzinati i numeri in input
numberList = [];

//Immagazzina somma dei numeri presenti nella lista
let total = 0;

//Chiede numeri all'utente e li inserisce nella lista
for(let i = 0; i < numbers; i++){
    
    number = parseInt(prompt("Inserisci un numero: "));

    //Verifica che il numero inserito sia un numero e non sia inferiore a 0
    if(number < 0 || isNaN(number)){
        alert("Per favore inserisci un numero valido")
        i--;
    }

    else{   
        numberList.push(number);
    }
    
}

//Esegue la somma dei numeri presenti nella lista
for(let i = 0; i<numberList.length; i++){
    total += numberList[i];
}

//Stampa somma numeri
alert("La somma dei numeri inseriti è: " + total);