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