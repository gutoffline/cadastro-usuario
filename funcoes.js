function fnValidarMinimoDeCaracteres(minimo_de_caracteres , valor_do_campo){
    if(valor_do_campo.length < minimo_de_caracteres){
        return false;
    }else{
        return true;
    }
}