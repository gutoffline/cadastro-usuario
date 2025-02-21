function fnValidarMinimoDeCaracteres(minimo_de_caracteres , valor_do_campo){
    if(valor_do_campo.length < minimo_de_caracteres){
        return false;
    }else{
        return true;
    }
}

function fnValidarCampoObriatorio(valor_do_campo){
    if(valor_do_campo.trim().length == 0){
        return false;
    }else{
        return true;
    }
}

function fnAdicionarMensagemDeErro(id_mensagem, mensagem){
    if(mensagem == "limpar"){
        document.getElementById(id_mensagem).style.display = "none";
        document.getElementById(id_mensagem).innerHTML = "";
        return;
    }

    document.getElementById(id_mensagem).style.display = "block";
    if(document.getElementById(id_mensagem).innerHTML == "")
        document.getElementById(id_mensagem).innerHTML = mensagem
    else{
        document.getElementById(id_mensagem).innerHTML += "<br>" + mensagem
    }
}

