import {question} from 'readline-sync'

export function print(texto){
    console.log(texto)
}

export function get_number(numero){
    return Number(question(numero))
}

export function get_number_inteiro(numero){

    let num = get_number(numero)

    if (num % 1 !== 0 ){
        print('Valor inválido!')
       num = get_number_inteiro(numero)
    }

    return num
}

export function input(texto){

    return question(texto)
}

export function get_number_above(numero, acima_de){

    let num = get_number_inteiro(numero)

    if(num < acima_de){
        print('Número inválido!')
        
        get_number_above(numero, acima_de)
    }

    return num

}

export function get_number_btween(numero,max,min){

    let num =  get_number_inteiro(numero)

    while(num < min || num > max){

        print('Número inválido!')
        num = get_number_inteiro(numero)
    }

    return num
}

