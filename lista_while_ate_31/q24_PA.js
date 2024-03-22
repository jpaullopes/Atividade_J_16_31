import { get_number_above,print,get_number } from "./io_utils.js"

function main(){
//entrada de dados
    const Primeiro_Termo = get_number('Informe o primeiro termo da PA: ')
    const Razão_Da_PA = get_number_above('Informe o valor da razão da PA: ',0)
    const Numero_De_Termos = get_number_above('Informe o número de termos:',0)

    let Contador = 1
    let Termo_Da_PA = 0
    let Termos_PA = ''

    while(Contador < Numero_De_Termos){
      //calcula o termo N da PA  
        Termo_Da_PA = (Primeiro_Termo * (Razão_Da_PA ** (Contador - 1))).toString()
        if(Contador === 1){
            
            Termos_PA += `${Termo_Da_PA}`
        }
        else{

            Termos_PA += `, ${Termo_Da_PA}`
        }
        Contador++
    }

    print(
`Os ${Numero_De_Termos } primeiros termos dessa PA serão:
[${Termos_PA}]`)

}

main()