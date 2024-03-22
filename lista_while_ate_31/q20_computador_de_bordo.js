import { get_number , print} from "./io_utils.js"

function main(){
    //entrada de dados
    const Distancia_DaViagem = get_number('Informe a distância total da viagem[Km]: ')
    const Quantidade_De_Litros = get_number('Informe a quantidade de combustivel pré viagem[L]: ')

    let DistanciaPercorrida = 0
    let Quantidade_Combustivel_Consumido = 0
//enquanto as condições forem verdadeiras
    while(Quantidade_De_Litros > Quantidade_Combustivel_Consumido && Distancia_DaViagem > DistanciaPercorrida){

        //incrementa a distancia e a quantidade de combustivel consumido
        DistanciaPercorrida += get_number('Informe a distância percorrida[Km]: ')
        Quantidade_Combustivel_Consumido += get_number('Informe quantos litros de combústivel formam consumidos[L]: ')

    } 
//calcula a performace do carro
    const Performace_Km_H = DistanciaPercorrida / Quantidade_Combustivel_Consumido

    //verificar se o carro consegiu chegar ao seu destino
    if(DistanciaPercorrida >= Distancia_DaViagem){
        print(`O carro COMPLETOU a viagem de ${Distancia_DaViagem} quilômetros(Km)`)
    }
    else{

        print(`Infelizmente o carro NÃO CHEGOU ao seu destino.`)
    }
    //verifica se a quantidade de combustivel foi o suficiente
    if(Quantidade_Combustivel_Consumido > Quantidade_De_Litros){

    print(`O carro NÃO teve combústivel o suficiente para completar a viagem!`)
    }

    print(`A performace do carro foi de: [${Performace_Km_H.toFixed(2)}] Km/H`)

}

main()