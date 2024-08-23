function criptografar(){
    texto = document.querySelector('.texto').value;
    let novoTexto = '';
    for (var i = 0;i<texto.length;i++){
        if (texto.charAt(i) == 'a'){
            novoTexto += 'ai';
        } else if (texto.charAt(i) == 'e'){
            novoTexto += 'enter';
        } else if (texto.charAt(i) == 'i'){
            novoTexto += 'imes';
        }else if (texto.charAt(i) == 'o'){
            novoTexto += 'ober';
        } else if (texto.charAt(i) == 'u'){
            novoTexto += 'ufat';
        }else{
          novoTexto += texto.charAt(i);
        }
    }
    document.querySelector('.mostrar-texto').textContent = novoTexto;
    document.querySelector('.texto').value = 'digite seu texto';
    document.querySelector('.nenhuma-mostrar').style.visibility = 'hidden';
    document.querySelector('.digite-o-texto-mostrar').style.visibility = 'hidden';
    document.querySelector('.procurando-mostrar').style.visibility = 'hidden';
}

function descriptografar(){
    var texto = document.querySelector('.texto').value;
    var mostrarTexto = document.querySelector('.mostrar-texto').textContent;
    if(texto.length <= 0){
        alert('Por favor insira um texto antes de descriptografar');
        document.querySelector('.texto').value = 'digite seu texto';
    } else if (mostrarTexto.length <= 0){
        alert('Por favor tenha um texto antes de descriptografar');
        document.querySelector('.texto').value = 'digite seu texto';
    }
    else{
        textoDescriptografado = mostrarTexto;
        for(var i = 0; i<mostrarTexto.length;i++){
        textoDescriptografado = textoDescriptografado.replace('ai','a');
        textoDescriptografado = textoDescriptografado.replace('imes','i');
        textoDescriptografado = textoDescriptografado.replace('enter','e');
        textoDescriptografado = textoDescriptografado.replace('ober','o');
        textoDescriptografado = textoDescriptografado.replace('ufat','u');
        }
    }
    
    document.querySelector('.texto').value = textoDescriptografado;
    
}

function copiar(){
    textoCopiado = document.querySelector('.mostrar-texto').textContent;
    if(textoCopiado.length<=0){
        alert('Não foi possível copiar o texto por não haver mensagem criptografada')
    }else{
        navigator.clipboard.writeText(textoCopiado);
        alert(`Mensagem criptograda ${textoCopiado} copiada com sucesso`)
        console.log(textoCopiado);
    }

}

function borrarDesc(){
    document.querySelector('.descriptografar-apresentacao').style.filter = 'blur(4px)';
}

function focarDesc(){
    document.querySelector('.descriptografar-apresentacao').style.filter = 'blur()';
}

function borrarCript(){
    document.querySelector('.criptografar-apresentacao').style.filter = 'blur(4px)';
}

function focarCript(){
    document.querySelector('.criptografar-apresentacao').style.filter = 'blur()';
}


