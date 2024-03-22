import { get_number,print } from "./io_utils.js"

function main(){
//entrada de dados
    const Juros_Diario = get_number('Informe a porcentagem dos juros diário[%]: ')
    let ValorDoEmprestimo = get_number('Informe o valor do empréstimo[R$]: ')
    const ValorDaParcela = get_number('Informe o valor da parcela[R$]: ')

    let ContadorDeParcelas = 0
    let Valor_Juros = 0
    let Total_DePagamento = 0

    //equanto o emprestimo não zerar
    while(ValorDoEmprestimo > 0){
        
        ValorDoEmprestimo -= ValorDaParcela
        Valor_Juros = ValorDoEmprestimo * (Juros_Diario / 100)
        //aumenta o valor do emprestimo com os juros
        ValorDoEmprestimo = ValorDoEmprestimo + Valor_Juros
        Total_DePagamento += ValorDaParcela

        ContadorDeParcelas++
    }

    print(`
TOTAL DO PAGAMENTO   : R$ ${Total_DePagamento.toFixed(2)}
TEMPO DE PAGMENTO    : ${ContadorDeParcelas} DIAS`)

}

main()