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


document.getElementById("confirmar_senha").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-confirmar-senha", "limpar")

    let senhasiguais = fnValidarSenhaIgual(this.value, document.getElementById("senha").value)
    if(senhasiguais == false){
        fnAdicionarMensagemDeErro("mensagem-erro-confirmar-senha", "As senhas precisão ser iguais")
    }

    let senhamaiuscula = fnValidarSenhaMaiuscula(this.value)
    if(senhamaiuscula == false){
        fnAdicionarMensagemDeErro("mensagem-erro-confirmar-senha", "A senha precisa ter pelo menos uma letra maiúscula")
    }

    let senhacaracterespecial = fnValidarSenhaCaracterEspecial(this.value)
    if(senhacaracterespecial == false){
        fnAdicionarMensagemDeErro("mensagem-erro-confirmar-senha", "A senha precisa ter pelo menos um caracter especial")
    }   
})

document.getElementById("email").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("mensagem-erro-email", "limpar")

    let emailvalido = fnValidarEmail(this.value);
    if(emailvalido == false){
        fnAdicionarMensagemDeErro("mensagem-erro-email", "email inválido")
    }

})