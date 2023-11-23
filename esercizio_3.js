
const array1 = ["cane", "gatto", "elefante", "tigre", "leone"];
const array2 = ["mela", "banana", "arancia", "uva", "fragola"];

const filtraPerLunghezza = (arrayA, arrayB, lunghezzaMinima) => {
    const arrayUnificato = arrayA.concat(arrayB);
    const risultatoFiltrato = arrayUnificato.filter(parola => parola.length >= lunghezzaMinima);
    console.log("Parole con lunghezza maggiore o uguale a", lunghezzaMinima, ":", risultatoFiltrato);
    return risultatoFiltrato;
};

const lunghezzaMinimaDesiderata = 6;
filtraPerLunghezza(array1, array2, lunghezzaMinimaDesiderata);
