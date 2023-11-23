const filtraNumeriPari = (numeri) => {
    const numeriPari = numeri.filter(numero => numero % 2 === 0);
    console.log("Numeri pari:", numeriPari);
    return numeriPari;
};

const arrayDiNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

filtraNumeriPari(arrayDiNumeri);