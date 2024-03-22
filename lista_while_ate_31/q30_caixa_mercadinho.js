import { get_number, get_number_inteiro, input, print } from "./io_utils.js"

//computar qual o percentual de desconto
function DescontoDaCompra(Quantidade){
    let PorcentagemDesconto = 0

    if(Quantidade >= 11 && Quantidade < 21){
        PorcentagemDesconto = 10
    }
    else if(Quantidade >= 21 && Quantidade <= 50){
        PorcentagemDesconto = 20
    }
    else if(Quantidade > 50){
        PorcentagemDesconto = 25
    }

    return PorcentagemDesconto
}

function main(){

    let NomeDoProduto = input('Informe o nome do produto: ').toUpperCase()
    let PreçoDoProduto = 0
    let QuantidadeDeProdutos = 0
    let ValorDePagamento_ComDesconto = 0
    let PorcentagemDoDesconto = 0
    let ValorDePagamento_SemDesconto = 0

    while(NomeDoProduto !== 'FIM'){
//entrada de dados

    PreçoDoProduto = get_number('Informe o preço do produto[R$]: ')
    QuantidadeDeProdutos = get_number_inteiro('Informe a quantidade do produto: ')

    //computa valor do desconto
    PorcentagemDoDesconto = DescontoDaCompra(QuantidadeDeProdutos)
    ValorDePagamento_SemDesconto = PreçoDoProduto * QuantidadeDeProdutos
    ValorDePagamento_ComDesconto = ValorDePagamento_SemDesconto - (ValorDePagamento_SemDesconto * (PorcentagemDoDesconto / 100))

    print(`
NOME DO PRODUTO         :  ${NomeDoProduto}
PORCENTAGEM DO DESCONTO :  ${PorcentagemDoDesconto}%
VALOR SEM DESCONTO      :  R$ ${ValorDePagamento_SemDesconto.toFixed(2)}
VALOR DE PAGAMENTO      :  R$ ${ValorDePagamento_ComDesconto.toFixed(2)}`)

    NomeDoProduto = input('Informe o nome do produto: ').toUpperCase()
    }

}

main()
