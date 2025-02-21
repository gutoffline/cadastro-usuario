document.getElementById("nome").addEventListener("blur", function(){
    let nomevalido = fnMin(3, this.value);
    if(nomevalido == false){
        document.getElementById("mensagem-erro-nome").style.display = "block";
        document.getElementById("mensagem-erro-nome").innerHTML = "a quantidade de caracteres mínimas é 3"
    }else{
        document.getElementById("mensagem-erro-nome").style.display = "none";
    }
})