export function Dobro (numero){
    return numero * 2;
}

export function Somar (a, b){
    return a + b;
}

export function Tabuada (num) {
    let a = [11];
    for (let i = 0; i<=10; i++) {
        a[i] = num * i;
    }
    return a;
}

export function Temperatura (temp){
    let a = false
    if(temp > 38){
        a = true
    }

    return a;
}

export function Media (n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}

export function Primaria(cor){
    if(cor == "azul" ||cor == "vermelho" ||cor == "amarelo"){
        return true
    }
    else {
        return false
    }

}
export function Cinema (filme, dia, pessoas){
    let i = 0;
    if (filme == 'nacional' && dia == 'quarta'){
        i = 2.50;
    }
    else if (filme == 'nacional'){
        i = 5;
    }
    else if (dia == 'quarta' && filme == 'internacional'){
        i = 14.25;
    }
    else if (filme == 'internacional'){
        i = 28.50;
    }

    let x = i * pessoas;
    return x;
}

export function Caracteres (texto, caracter){    
    let a = 0;
    for(let i = 0; i < texto.length; i++){
        if (texto.charAt(i) == caracter) {
            a++
        }
    }
    return a;
}

export function MaiorNumero (array){
    let a = -2;
    for(let i = 0; i < array.length; i++) {
        if (a < array[i]) 
            a = array[i]
    }
    return a;
}
