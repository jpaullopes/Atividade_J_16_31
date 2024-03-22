import {get_number_inteiro,print} from './io_utils.js'
//verifica qual o maior peso
function MenorPeso(Valor_1,Valor_2){
    let Menor = Valor_1

    if(Valor_2 < Valor_1){
        Menor = Valor_2
    }

    return Menor
}
//verifia qual o menor peso
function MaiorPeso(Valor_1,Valor_2){
    let Maior = Valor_1
    
    if(Valor_2 > Valor_1){
        Maior = Valor_2
    }

    return Maior

}

function main(){
//entrada de dados
    let N_De_Identificação = get_number_inteiro('Informe o número de identificação do boi: ')
    let Peso_Do_Boi = get_number_inteiro('Informe o peso do boi[Kg]: ') 
   
    let Boi_Com_MaiorPeso = 0
    let Maior_Peso_do_boi = 0 
    let Boi_Com_MenorPeso = N_De_Identificação
    let Menor_Peso_do_boi = Peso_Do_Boi
    
    while(N_De_Identificação !== 0){
        
        //atribui o maior e o menor peso dos bois
        Menor_Peso_do_boi = MenorPeso(Menor_Peso_do_boi,Peso_Do_Boi)
        Maior_Peso_do_boi = MaiorPeso(Maior_Peso_do_boi,Peso_Do_Boi)
        
        //verifica qual o mais pesado e mais leve e atribui o numero de identificação 
        if(Menor_Peso_do_boi === Peso_Do_Boi){
            Boi_Com_MenorPeso = N_De_Identificação
        }
        if(Maior_Peso_do_boi === Peso_Do_Boi){
            Boi_Com_MaiorPeso = N_De_Identificação
        }

        N_De_Identificação = get_number_inteiro('Informe o número de identificação do boi: ')
        Peso_Do_Boi = get_number_inteiro('Informe o peso do boi[Kg]: ')        
    }
    
    print(`
NÚMERO DE IDENTIFICAÇÃO(BOI MAIS MAGRO) : ${Boi_Com_MenorPeso}°
PESO(KG) DO BOI MAIS MAGRO               : ${Menor_Peso_do_boi} Kg
NÚMERO DE IDENTIFICAÇÃO(BOI MAIS GORDO)  : ${Boi_Com_MaiorPeso}°
PESO(KG) DO BOI MAIS GORDO               : ${Maior_Peso_do_boi} Kg`)
}

main()