import { get_number_above,print,get_number_inteiro } from "./io_utils.js"

function main(){
//entradad de dados
    const Valor_Maximo_Aleatorio = get_number_above('Informe o valor máximo do número aleatório: ',0)
    let Palpite_Informado = get_number_inteiro('Informe seu palpite: ')
//seleciona o número aleatorio
    const Numero_Aleatorio = parseInt(Math.random() * Valor_Maximo_Aleatorio)
    let Numero_De_Palpites = 1
//enquanto o palpite for diferente do número certo
    while(Palpite_Informado !== Numero_Aleatorio){
    
        if(Palpite_Informado > Numero_Aleatorio){
            print('Dê um palpite MENOR!')
        }else if(Palpite_Informado < Numero_Aleatorio){
            print('Dê um palpite MAIOR!')
        }
    
        Palpite_Informado = get_number_inteiro('Informe seu palpite: ')
        Numero_De_Palpites++
    }

    print(`VOCÊ ACERTOU!!! O NÚMERO CORRETO ERA O [${Numero_Aleatorio}]`)
    print(`O total de palpites dados foi de: [${Numero_De_Palpites}]`)
}

main()
