import { print,get_number,get_number_inteiro } from "./io_utils.js"
  
function main(){
//entrada de dados
    const PopulaçãoCidadeA = get_number_inteiro('Informe a população da cidade A: ')
    const PopulaçãoCidadeB = get_number_inteiro('Informe a população da cidade B: ')
    const Taxa_CrescimentoCidadeA = get_number('Informe a taxa de crescimento da cidade A: ')
    const Taxa_CrescimentoCidadeB = get_number('Informe a taxa de crescimento da cidade B: ')

    let TempoDeUltrapassagem = 0
    let NovaPopulação_CidadeA = PopulaçãoCidadeA
    let NovaPopulação_CidadeB = PopulaçãoCidadeB

//enquanto a população de A for menor que a população de B
    while(NovaPopulação_CidadeA < NovaPopulação_CidadeB){
    TempoDeUltrapassagem++
    //atribui a nova população de acordo com a taxa de crescimento
    NovaPopulação_CidadeA = NovaPopulação_CidadeA + (NovaPopulação_CidadeA * (Taxa_CrescimentoCidadeA / 100))
    NovaPopulação_CidadeB = NovaPopulação_CidadeB + (NovaPopulação_CidadeB * (Taxa_CrescimentoCidadeB / 100))

    }

    print(`Serão necessários ${TempoDeUltrapassagem} anos para que a população da cidade A supere a da cidade B.`)
}

main()