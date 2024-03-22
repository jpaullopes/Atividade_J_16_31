import { get_number,print, input } from "./io_utils.js"

//função que verifica o maior valor
function MenorValor(Valor_1,Valor_2){
    let Menor = Valor_1

    if(Valor_2 < Valor_1){
        Menor = Valor_2
    }
    return Menor
}
//função que verifica o menor valor
function MaiorValor(Valor_1,Valor_2){
    let Maior = Valor_1
    
    if(Valor_2 > Valor_1){
        Maior = Valor_2
    }
    return Maior
}

function main(){
//entrada de dados
    let Nome_Cartão_Candidata = input('Informe o nome do cartão da candidata: ')
    let Altura_Da_Candidata = get_number('Informe a altura da candidata[M]: ')
    let Peso_Da_Candidata = get_number('Informe o peso da candidata[Kg]: ')

    let Nome_Candidata_MaisAlta = ''
    let Nome_Candidata_MaisBaixa = ''
    let Nome_Candidata_MaisMagra = ''
    let Nome_Candidata_MaisPesada = ''
    let Menor_Altura = Altura_Da_Candidata
    let Maior_Altura = Number()
    let Menor_Peso = Peso_Da_Candidata
    let Maior_Peso = Number()

//enquanto o nome não for FIM
while(Nome_Cartão_Candidata.toUpperCase() !== 'FIM'){
           
    //verifica qual é a menor e maior do peso e altura
        Menor_Altura = MenorValor(Menor_Altura,Altura_Da_Candidata)
        Maior_Altura = MaiorValor(Maior_Altura,Altura_Da_Candidata)
        Menor_Peso   = MenorValor(Menor_Peso,Peso_Da_Candidata)
        Maior_Peso   = MaiorValor(Maior_Peso,Peso_Da_Candidata)
        
        if(Altura_Da_Candidata === Menor_Altura){
            Nome_Candidata_MaisBaixa = Nome_Cartão_Candidata
        }
        if(Altura_Da_Candidata === Maior_Altura){
            Nome_Candidata_MaisAlta = Nome_Cartão_Candidata
        }
        if(Peso_Da_Candidata === Menor_Peso){
            Nome_Candidata_MaisMagra = Nome_Cartão_Candidata
        }
        if(Peso_Da_Candidata === Maior_Peso){
            Nome_Candidata_MaisPesada = Nome_Cartão_Candidata
        }
        
        Nome_Cartão_Candidata = input('Informe o nome do cartão da candidata: ')
        Altura_Da_Candidata = get_number('Informe a altura da candidata[M]: ')
        Peso_Da_Candidata = get_number('Informe o peso da candidata[Kg]: ')
    }

    print(`
        ----[TABELA DAS CANDIDATAS]----
NOME DA CANDIDATA MAIS ALTA    : ${Nome_Candidata_MaisAlta} 
ALTURA DA CANDIDATA MAIS ALTA  : [${Maior_Altura.toFixed(2)}] Metros
NOME DA CANDIDATA MAIS BAIXA   : ${Nome_Candidata_MaisBaixa} 
ALTURA DA CANDIDATA MAIS BAIXA : [${Menor_Altura.toFixed(2)}] Metros
NOME DA CANDIDATA MAIS PESADA  : ${Nome_Candidata_MaisPesada} 
PESO DA CANDIDATA MAIS PESADA  : [${Maior_Peso.toFixed(2)}] Kg
NOME DA CANDIDATA MAIS MAGRA   : ${Nome_Candidata_MaisMagra} 
PESO DA CANDIDATA MAIS MAGRA   : [${Menor_Peso.toFixed(2)}] Kg `)

}

main()