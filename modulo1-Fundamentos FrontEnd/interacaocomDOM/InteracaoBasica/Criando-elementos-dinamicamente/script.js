var fsList = document.querySelectorAll(".multiple-field")
for( var i = 0; i< fsList.length;i++){
    initMultipleFieldSet(fsList[i]);
}

function initMultipleFieldSet(fs){
    var addButton = document.createElement("button");
    addButton.textContent = "Adicionar"
    addButton.type = "button";

    fs.appendChild(addButton);

   var firstinput =  fs.querySelector("input")

    addButton.addEventListener("click", function(){
        var div = document.createElement("div")
        var newInput = document.createElement("input");
        newInput.name = firstinput.name;
        newInput.name = firstinput.type;

        var deletebtn = document.createElement("button");
        deletebtn.textContent = "Excluir"
        deletebtn.type = "button";
        
        div.appendChild(newInput);
        div.appendChild(deletebtn);
        
        deletebtn.addEventListener("click", function(){
            div.remove();
        })

        fs.insertBefore(div,addButton);

    });
}