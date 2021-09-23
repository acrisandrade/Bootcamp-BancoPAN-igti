window.addEventListener("load",function(){
    simular();
    var formulario = document.getElementById("entradas");
    formulario.addEventListener("submit",onSubmit);
});

function onSubmit(evt){
    evt.preventDefault();
    simular();

}

function simular () {
    var valor = document.getElementById("valor").valueAsNumber;
    var prazo = document.getElementById("prazo").valueAsNumber;
    var jurosaa = document.getElementById("jurosaa").valueAsNumber;
    var prestacoes = prazo *12;
    var jurosam = (1 + jurosaa) ** (1/12) -1;
    var amortizacao = valor / prestacoes;

    document.getElementById("prestacoes").valueAsNumber = prestacoes;
    document.getElementById("jurosam").valueAsNumber = jurosam;

    var tbody = document.querySelector("tbody");
    for(var i = 0; i<5; i++){
        var saldodevedor = valor - i * amortizacao;
        var jurosPrestacao = saldodevedor *jurosam;
        var totalprestacao = amortizacao + jurosPrestacao;

        var tr = tbody.children[i];
        tr.children[1].textContent=amortizacao.toFixed(2);
        tr.children[2].textContent=jurosPrestacao.toFixed(2);
        tr.children[3].textContent=totalprestacao.toFixed(2);
    }

}