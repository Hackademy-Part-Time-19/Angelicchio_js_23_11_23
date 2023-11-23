let operazione = 1;
let lista = [];

function aggiungi(elemento) {
    var risposta = prompt("Inserire l'elemento '" + elemento + "' nella lista? (si/no)")
    if (risposta.toLowerCase() === "si") {
        lista.push(elemento);
        alert("Elemento inserito");
    }
    else {
        alert("Operazione annullata");
    }
}

function elimina(elemento) {
    var risposta = prompt("Eliminare l'elemento '" + elemento + "' dalla lista? (si/no)")
    if (risposta.toLowerCase() === "si") {
        var indice = lista.indexOf(elemento);
        if (indice == -1) {
            alert("L'elemento inserito non è presente nella lista");
        }
        else {
            lista.splice(indice, 1);
            alert("L'elemento '"+elemento+"' è stato eliminato dalla lista");
        }
    }
    else{
        alert("Operazione annullata");
    }
}


while (operazione > 0) {
    operazione = parseInt(prompt("1:Aggiungi elemento\n2:Elimina un elemento dalla lista\n3:Ordina la lista in ordine alfabetico\n4:Modifica un elemento della lista\n5:Elimina l’intera lista\n6:Visualizza la lista"))
    if (operazione == 1) {
        let elemento = prompt("Inserire elemento:");
        aggiungi(elemento);
    }
    else if (operazione == 2) {
        let elemento = prompt("Inserire elemento da eliminare:");
        elimina(elemento);
    }
    else if (operazione == 3) {

    }
    else if (operazione == 4) {

    }
    else if (operazione == 5) {

    }
    else if (operazione == 6) {
        alert(lista);
    }
    else if (operazione == 0) {
        alert("Arrivederci");
    }
    else {
        alert("ERRORE")
    }
}