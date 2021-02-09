function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0 || num.value == 0 ){
        alert('Digite um numero válido')
    }else{
        var n = Number(num.value)
        c = 1
        tab.innerHTML = ''
        while(c<=10){
        var item = document.createElement('option')
        tab.appendChild(item)
        item.text = `${n} X ${c} = ${n*c}`
        item.value = `tab${n}`
        c++
        }
    }   
}

