import {get_number_inteiro,print} from './io_utils.js'

function main(){
//entrada de dados
    const Numero_Multiplicando = get_number_inteiro('Informe o primeiro valor: ')
    const Numero_Multiplicador = get_number_inteiro('Informe o segundo valor: ')

    let Contador_Da_Multiplicação = 1 
    let Produto_Da_Multiplicação = Numero_Multiplicando

    while(Contador_Da_Multiplicação  !== Math.abs(Numero_Multiplicador)){
        //incrementa o resultado N vezes
        Contador_Da_Multiplicação ++
        Produto_Da_Multiplicação += Numero_Multiplicando

        if(Numero_Multiplicador === 0){
            Contador_Da_Multiplicação = Math.abs(Numero_Multiplicador)
            Produto_Da_Multiplicação = 0
        }
    }
//se o numero multiplicador foi menor que 0(negativo)
    if(Numero_Multiplicador < 0){
        Produto_Da_Multiplicação = Produto_Da_Multiplicação * -1
    }

    print(`[${Numero_Multiplicando}] X [${Numero_Multiplicador}] = [${Produto_Da_Multiplicação}]`)
}

main()