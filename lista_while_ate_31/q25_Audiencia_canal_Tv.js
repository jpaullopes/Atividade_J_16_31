import { get_number_above,print,get_number_inteiro } from "./io_utils.js"

//função que recebe o canal e verifica se ele se enquadra nas opções de canais válidos
function Pedir_Canal_TV(Mensagem){
    let Canal = get_number_inteiro(Mensagem)

    while(Canal !== 2 && Canal !== 4 && Canal !== 5 && Canal !== 7 && Canal !== 10 && Canal !== 0 ){
        print('Canal inválido!')
        Canal = get_number_inteiro(Mensagem)       
    }

    return Canal
}

//função que calcula a porcentagem
function ComputarPorcentagem(Valor, Total){
    const Porcentagem = (Valor * 100) / Total
    return Porcentagem
}

//verifica um canal e ajuda na soma do total de telespectadores de um canal
function Verificar_Canal_Assistido(Canal_Informado, Canal_Verificado,Telespectadores){

    let Numero_De_Telespectadores = 0
    if(Canal_Informado === Canal_Verificado){
        Numero_De_Telespectadores = Telespectadores
    }
    return Numero_De_Telespectadores
}

function main(){

    //entrdad de dados
    print('NÚMERO DOS CANAIS DE TV [2, 4, 5, 7, 10]')
    let Canal_Informado = Pedir_Canal_TV('Informe o canal de TV assistido: ')

    let Audiencia_Canal_2 = 0, Audiencia_Canal_4 = 0, Audiencia_Canal_5 = 0, Audiencia_Canal_7 = 0, Audiencia_Canal_10 = 0
    let Total_Telespectadores = 0

 while(Canal_Informado !== 0){
        
//entrada de dados
        const Telespectadores = get_number_above('Informe o número de telespectadores: ',0)
        Total_Telespectadores += Telespectadores

        Audiencia_Canal_2 += Verificar_Canal_Assistido(Canal_Informado,2,Telespectadores)
        Audiencia_Canal_4 += Verificar_Canal_Assistido(Canal_Informado,4,Telespectadores)
        Audiencia_Canal_5 += Verificar_Canal_Assistido(Canal_Informado,5,Telespectadores)
        Audiencia_Canal_7 += Verificar_Canal_Assistido(Canal_Informado,7,Telespectadores)
        Audiencia_Canal_10 += Verificar_Canal_Assistido(Canal_Informado,10,Telespectadores)

        print('NÚMERO DOS CANAIS DE TV [2, 4, 5, 7, 10]')
        Canal_Informado = Pedir_Canal_TV('Informe o canal de TV assistido: ')
    }

    //porcentagens de audiencia dos canais
    const Percentual_Canal_2 = ComputarPorcentagem(Audiencia_Canal_2,Total_Telespectadores)
    const Percentual_Canal_4 = ComputarPorcentagem(Audiencia_Canal_4,Total_Telespectadores)
    const Percentual_Canal_5 = ComputarPorcentagem(Audiencia_Canal_5,Total_Telespectadores)
    const Percentual_Canal_7 = ComputarPorcentagem(Audiencia_Canal_7,Total_Telespectadores)
    const Percentual_Canal_10 = ComputarPorcentagem(Audiencia_Canal_10,Total_Telespectadores)

    const Tabela_De_Dados = `
TOTAL DE TELESPECTADORES   : [${Total_Telespectadores}] TELESPECTADORES
TELESPECTADORES DO CANAL 2    : [${Percentual_Canal_2.toFixed(2)}] %  > ${Audiencia_Canal_2} PESSOAS
TELESPECTADORES DO CANAL 4    : [${Percentual_Canal_4.toFixed(2)}] %  > ${Audiencia_Canal_4} PESSOAS
TELESPECTADORES DO CANAL 5    : [${Percentual_Canal_5.toFixed(2)}] %  > ${Audiencia_Canal_5} PESSOAS
TELESPECTADORES DO CANAL 7    : [${Percentual_Canal_7.toFixed(2)}] %  > ${Audiencia_Canal_7} PESSOAS
TELESPECTADORES DO CANAL 10   : [${Percentual_Canal_10.toFixed(2)}] % > ${Audiencia_Canal_10} PESSOAS`

    print(Tabela_De_Dados)
}

main()