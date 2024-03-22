import { get_number_above, get_number_inteiro, print} from "./io_utils.js"

//função que recebe a opiniao e verifica se ela é válidad entro das opções disponiveis
function Pedir_Opiniao_Espectador(Mensagem){
    let Opiniao = get_number_inteiro(Mensagem)

    while(Opiniao !== 1 && Opiniao !== 2 && Opiniao !== 3 && Opiniao !== 4 ){
        print('Opiniao inválida!')
        Opiniao = get_number_inteiro(Mensagem)       
    }

    return Opiniao
}

//ajuda a contar o numero total de uma opinião
function Total_Opiniao(Opiniao_Entrada, Opiniao_Verificada){
    let Total_Opinioes = 0

    if(Opiniao_Entrada === Opiniao_Verificada){
        Total_Opinioes++
    }

    return Total_Opinioes
}

//calcula a porcentagem
function ComputarPorcentagem(Valor, Total){
    const Porcentagem = (Valor * 100) / Total
    return Porcentagem
}

function main(){

    let Total_Opinioes_Bom = 0, Total_Opinioes_Regular = 0
    let Total_De_Espectadores = 0
    let Idade_Total_Opiniao_Otima = 0
    //pede a idade
    let Idade_Do_Espectador = get_number_above('Informe a sua Idade: ',-1)
    let Contador_Opiniao_Otima = 0

    while(Idade_Do_Espectador !== -1){
        Total_De_Espectadores++
    
        print('[ÓTIMO = 1 | BOM = 2 | REGULAR = 3 | PÉSSIMO = 4]')
        const Opiniao = Pedir_Opiniao_Espectador('Informe a sua opinião em relaçao ao filme: ')
        
        //caso a opinioa seja "otima"
        if(Opiniao === 1){
            Idade_Total_Opiniao_Otima += Idade_Do_Espectador
            Contador_Opiniao_Otima++
            
        }
        
        Total_Opinioes_Regular += Total_Opiniao(Opiniao, 3)
        Total_Opinioes_Bom += Total_Opiniao(Opiniao,2)

        Idade_Do_Espectador = get_number_above('Informe a sua Idade: ',-1)
    }

    const Media_Idade_Opinioes_Otimas = Idade_Total_Opiniao_Otima / Contador_Opiniao_Otima 
    const Percentual_Opinioes_Bom = ComputarPorcentagem(Total_Opinioes_Bom,Total_De_Espectadores) 

    const Tabela_Opiniões = `
TOTAL DE ENTREVISTADOS               : ${Total_De_Espectadores} PESSOA(S)
MÉDIA DE IDADE DAS OPINIÕES "ÓTIMAS" : ${Media_Idade_Opinioes_Otimas.toFixed(2)} ANO(S)
QUANTIDADE DE RESPOSTAS REGULARES    : ${Total_Opinioes_Regular} PESSOA(S)
PERCENTUAL OPINIÕES "BOAS"           : ${Percentual_Opinioes_Bom} % `

    print(Tabela_Opiniões)
}


main()