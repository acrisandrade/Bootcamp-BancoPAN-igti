 var caixa = document.getElementById("caixa");
 
 function setPos (x, y){
     caixa.style.left =  x + "px"
     caixa.style.top =  y + "px"
}

caixa.addEventListener("mousedown", iniciaArraste);
document.addEventListener("mouseup", fimArraste);

function iniciaArraste (evt){
    caixa.classList.add("arrastando");
    document.addEventListener("mousemove", arrasta);
}


function fimArraste (evt){
    caixa.classList.remove("arrastando");
    caixa.removeEventListener("mousemove", arrasta);
}

function arrasta(evt){
    var x = evt.clientX;
    var y = evt.clientY;
    setPos(x, y)
}

