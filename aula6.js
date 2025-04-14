//criando variáveis e obtendo elementos
let contador = 0
let txtcontador = document.getElementById('txtcontador')
let txtmensagem = document.getElementById('txtmensagem')

//função aumentar
function aumentar(){
    //contador = contador + 1
    contador++
    txtcontador.innerHTML = contador
    exibirMensagem()
}

//função diminuir
function diminuir(){
    contador--
    txtcontador.innerHTML = contador
    exibirMensagem()
}
function aumentardois(){
    contador+=2
    txtcontador.innerHTML = contador
    exibirMensagem()
}
function diminuirdois(){
    contador-=2
    txtcontador.innerHTML = contador
    exibirMensagem()
}
function zerar(){
    contador = 0
    txtcontador.innerHTML = contador
    exibirMensagem()
}
//função mensagem
function exibirMensagem(){
    if(contador === 0){
        txtmensagem.innerHTML = 'Vazio!'
    } else if(contador <= 15){
        txtmensagem.innerHTML = 'Pode entrar!'
    } else if(contador > 15 && contador <=19){
        txtmensagem.innerHTML = 'Quase lotado!'
    } else if (contador >= 20) {
        txtmensagem.innerHTML = 'Lotado!'
    }
}
