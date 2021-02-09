function contar (){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')

    if(ini.value == 0 ||  fim.value == 0) {
        alert('Valor de "inicio" ou "fim" impossibilitam a conta')
    }else{
        res.innerHTML = `Contando: </br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        
        if(p<=0){
            alert('[Erro] Passo invalido, será considerado "Passo 1"')
            p = 1
        }
        if(i<f){
            for(var c = i; c <= f; c+=p){
            res.innerHTML+=`${c} 😡`
            }

        }else{
            for(var c = i; c >= f ; c-=p){
                res.innerHTML += `${c} 😡 ` 
        }
    }   
    res.innerHTML += `😎`
}

}
