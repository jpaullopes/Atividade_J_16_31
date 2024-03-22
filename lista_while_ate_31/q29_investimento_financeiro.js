import { get_number_above,get_number, input,print } from "./io_utils.js"

//função que recebe a resposta e verifica se ela é 'S' ou 'N'
function Receber_Resposta(Mensagem){
    let Resposta = input(Mensagem).toUpperCase()

    while(Resposta !== 'S' && Resposta !== 'N'){
        print('Resposta inválida!')
        Resposta = input(Mensagem).toUpperCase()
    }
    return Resposta
}

//função que calcula o montante
function Computar_Montante(Capital, Taxa, Tempo){
    
    const Montante = Capital * (( 1 + (Taxa / 100) ) ** Tempo)
    return Montante
} 


function main(){

    //entrada de dados
    let Capital_Do_Investimento = get_number_above('Informe o capital de investimento mensal[R$]: ',0)
    const Porcentagem_Taxa = get_number('Informe a taxa de juros[%]: ')
    let Tempo_De_Investimento = 12

    let Saldo_De_Investimento = 0
    let Resposta = ''
    let Contador_De_Anos = 0 ,Contador_Meses = 0

    //enquanto resposta for diferente de "N"
    while(Resposta !== 'N'){
        
        //enquanto o contador de meses for menor que o tempo de investimento
        while(Contador_Meses < Tempo_De_Investimento){
            
            let Montante =  Computar_Montante(Capital_Do_Investimento, Porcentagem_Taxa, Contador_Meses)
            Saldo_De_Investimento += Montante 
            
            Contador_Meses++
        }
        
        Contador_De_Anos++

        print(`Saldo de investimento após ${Contador_De_Anos} ano(s) : R$ [${Saldo_De_Investimento.toFixed(2)}]`)
        Resposta = Receber_Resposta('Deseja processar mais um ano?[S/N] ')
        //caso a resposta seja "S" então ele adiciona mais 1 ano(12 meses) ao tempo de investimento
        Tempo_De_Investimento += 12
    }
    
    print('>>>> FIM DO PROGRAMA <<<<')
}

main()