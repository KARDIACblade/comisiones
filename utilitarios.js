
function recuperarTexto (idComponente){
    let cmp = document.getElementById(idComponente);
    let valor = cmp.value
    return valor;
}

function recuperarFloat (idComponente){
    let valorText= recuperarTexto(idComponente);
    let valorFloat=parseFloat(valorText);
    return valorFloat;
}

function mostrarSpan (idComponente,valor){
let cmp = document.getElementById(idComponente);
cmp.textContent = valor;
}