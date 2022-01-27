//Imposta la quantità di numeri di cui eseguire somma e media
let numbers = 10;

//Imposta valore di totale a 0 come predefinito
let total = 0;

//Crea lista in cui immagazzinare i numeri da 1 a numbers
numbersList = [];

//Ciclo che serve ad inserire i numeri da 1 a numbers dentro numbersList
for(let i = 1; i <= numbers; i++){
    numbersList.push(i);
}

//Crea variabile che immagazzina la lunghezza di numbersList
let listLen = numbersList.length;

//Ciclo che esegue la somma dei numeri nella lista
for(let i = 0; i < listLen; i++){
    total += numbersList[i];
}

//Esegue la media dei numeri da 1 a numbers
let media = total / listLen;

//Mostra in console i risultati
console.log("La somma dei numeri da 1 a " + numbers + " è pari a: " + total);
console.log("La media dei numeri da 1 a " + numbers + " è pari a: " + media);