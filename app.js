document.getElementById("nome").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-nome", "limpar")

    let nomevalido = fnValidarMinimoDeCaracteres(3, this.value);   
    if(nomevalido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-nome", "mínimo 3 caracteres")
    }

    let nomeobrigatorio = fnValidarCampoObrigatorio(this.value);
    if(nomeobrigatorio == false){
        fnAdicionarMensagemDeErro("mensagem-erro-nome", "campo obrigatório")
    }
})