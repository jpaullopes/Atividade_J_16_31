import { input,print,get_number_inteiro, get_number_above } from "./io_utils.js"

//função que recebe a resposta e verifica se ela é 1('M') ou 2('F')
function Pedir_Sexo(Mensagem){

    let Sexo = get_number_inteiro(Mensagem)

    while(Sexo !== 1 && Sexo !== 2){
        print('Sexo inválido!')
        Sexo = get_number_inteiro(Mensagem)
    }

    return Sexo
}

//função que recebe os estatos civil e verifica se a resposta está de acordo com as opções
function Pedir_Estatos_Civil(Mensagem){
    let Estatos = get_number_inteiro(Mensagem)

    while(Estatos !== 1 && Estatos !== 2 && Estatos !== 3 && Estatos !== 4 ){
        print('Estatos civil inválido!')
        Estatos = get_number_inteiro(Mensagem)       
    }

    return Estatos
}

//função que ajuda na soma e verificação dos solteiros de acordo com o sexo e o estatos
function Total_Solteiros(Sexo_Entrada, Sexo_Verificar, Estatos_Entrada){
    let Total_Solteiros = 0

    if(Sexo_Entrada === Sexo_Verificar && Estatos_Entrada === 2){
        Total_Solteiros++
    }

    return Total_Solteiros
}

//função que retorna a porcentagem de um valor
function ComputarPorcentagem(Valor, Total){
    const Porcentagem = (Valor * 100) / Total
    return Porcentagem
}

function main(){

//numero de dados
    const Numero_De_Dados = 100

    let Soma_Idade_Homens = 0 , Soma_Idade_Mulheres = 0
    let Numero_Total_Homens_Solteiros = 0, Numero_Total_Mulheres_Solteiras = 0
    let Total_Mulheres_Divorciadas_30Mais = 0
    let Contador_Mulheres = 0, Contador_Homens = 0
    
    let Contador_De_Pessoas = 0

    //enquanto contador de pessoas for menor do que o número de dados
    while(Contador_De_Pessoas < Numero_De_Dados){
        
        //entrada de dados
        const Idade = get_number_above('Informe a idade: ',0)

        print('SEXO : [ Masculino = 1 | Feminino = 2 ]')
        const Sexo = Pedir_Sexo('Informe o sexo: ')

        print('ESTATOS CIVIL : [ Casado = 1 | Solteiro = 2 | Divorciado = 3 | Viúvo = 4 ]')
        const Estatos_Civil = Pedir_Estatos_Civil('Informe o estatos civil: ')
        
        //o total da idade dependendo do sexo
        if(Sexo === 1){
            Soma_Idade_Homens += Idade
        }else{
            
            Soma_Idade_Mulheres += Idade
        }

        Numero_Total_Homens_Solteiros += Total_Solteiros(Sexo, 1 ,Estatos_Civil)
        Numero_Total_Mulheres_Solteiras += Total_Solteiros(Sexo, 2 ,Estatos_Civil)

        //caso seja mulher divorciada com mais de 30 anos
        if(Sexo === 2 && Estatos_Civil === 3 && Idade > 30){
            Total_Mulheres_Divorciadas_30Mais++
        }
        
        if(Sexo === 1){
            Contador_Homens++
        }
        else{
            Contador_Mulheres++
        }

        Contador_De_Pessoas++
    }

    const Media_Idade_Homens = Soma_Idade_Homens / Contador_Homens
    const Media_Idade_Mulheres = Soma_Idade_Mulheres / Contador_Mulheres 

    const Porcentagem_Homens_Solteiros = ComputarPorcentagem(Numero_Total_Homens_Solteiros,Numero_De_Dados)
    const Porcentagem_Mulheres_Solteiras = ComputarPorcentagem(Numero_Total_Mulheres_Solteiras,Numero_De_Dados)

    const Tabela = `
MÉDIA DA IDADE DAS MULHERES         : [${Media_Idade_Mulheres.toFixed(2)}] ANO(S)
MÉDIA DA IDADE DOS HOMENS           : [${Media_Idade_Homens.toFixed(2)}] ANO(S)
PERCENTUAL DE HOMENS SOLTEIROS      : [${Porcentagem_Homens_Solteiros.toFixed(2)}] %
PERCENTUAL DE MULHERES SOLTEIRAS    : [${Porcentagem_Mulheres_Solteiras.toFixed(2)}] %
QUANTIDADE MULHERES DIVORCIADAS 30+ : [${Total_Mulheres_Divorciadas_30Mais}] MULHERE(S)
`
    print(Tabela)
}

main()