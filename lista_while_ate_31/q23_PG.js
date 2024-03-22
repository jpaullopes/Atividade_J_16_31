import { get_number_above,print,get_number } from "./io_utils.js"

function main(){
//entrada de dados
    const Primeiro_Termo = get_number('Informe o primeiro termo da PG: ')
    const Razão_Da_PG = get_number_above('Informe o valor da razão da PG: ',0)
    const Numero_De_Termos = get_number_above('Informe o número de termos: ',0)

    let Contador = 0
    let Termo_Da_PG = 0
    let Termos_PG = ''

    while(Contador < Numero_De_Termos){
    //computa os termos N da pg   
        Termo_Da_PG = (Primeiro_Termo + (Contador * Razão_Da_PG)).toString()
        if(Contador === 0){
            
            Termos_PG += `${Termo_Da_PG}`
        }
        else{

            Termos_PG += `, ${Termo_Da_PG}`
        }
        Contador++
    }

    print(
`Os ${Numero_De_Termos} primeiros termos dessa PG serão:
[${Termos_PG}]`)

}

main()