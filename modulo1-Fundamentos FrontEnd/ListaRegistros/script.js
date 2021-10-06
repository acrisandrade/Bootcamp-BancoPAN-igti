const { throws } = require("assert");

async function init (){
    console.log("init");

    const [roles,employtes] = await promises.all([
        fetchJson("http://localhost:3000/roles"),
        fetchJson("http://localhost:3000/employtes"),
    ]);

    init();

    function initRoles(Roles){
        
    }

}

function fetchJson(url){
    return fetch(url).then((resp)=>{
        if (resp.ok) {
            return resp.json();            
        }else{
            throw new error("Erro")
        }
    })
}