import { get_number_inteiro,print } from "./io_utils.js"

function main(){
//entrada de dados
    const Dividendo = get_number_inteiro('Informe o dividendo: ')
    const Divisor = get_number_inteiro('Informe o divisor: ')

    let Quociente = 0
    let Resto = 0
    let Contador = 0

    while(Contador < 2){
        Contador++
        //computa o quociente
        if(Contador === 1){
            Quociente = parseInt(Dividendo * (Divisor ** -1))
        }
        //computa o resto
        else{
            Resto = Dividendo - (Quociente * Divisor)
        }
    }

    print(
`QUOCIENTE -> [${Dividendo}] / [${Divisor}] = [${Quociente}]
RESTO     -> [${Dividendo}] % [${Divisor}] = [${Resto}]`)
}

main()