import { get_number_inteiro , print} from "./io_utils.js"

//função que recebe e verifica se o número tem no máximo 3 digitos
function Get_Number_Max_Min(Mensagem,Min, Max){
    let Numero = get_number_inteiro(Mensagem) 
    while(Numero <= Min && Numero >= Max){
        print('Valor inválido!')
        Numero = get_number_inteiro(Mensagem)
    }
    return Numero
}

//função que retorna o algarismo romano correspondente ao número de entrada
function Algarismo_Romano(Numero){

    let Algarismo = 'M'
    if(Numero === 1){
        Algarismo = 'I'
    }
    else if(Numero === 4){
        Algarismo = 'IV'
    }
    else if(Numero === 5){
        Algarismo = 'V'
    }
    else if(Numero === 9){
        Algarismo = 'IX'
    }
    else if(Numero === 10){
        Algarismo = 'X'
    }
    else if(Numero === 40){
        Algarismo = 'XL'
    }
    else if(Numero === 50){
        Algarismo = 'L'
    }
    else if(Numero === 90){
        Algarismo = 'XC'
    }
    else if(Numero === 100){
        Algarismo = 'C'
    }
    else if(Numero === 400){
        Algarismo = 'CD'
    }
    else if(Numero === 500){
        Algarismo = 'D'
    }
    else if(Numero === 900){
        Algarismo = 'CM'
    }

    return Algarismo
}

//função que retorna a centena,dezena e unidade de um número
function Retornar_Ordens_Numericas(Valor,Ordem){

    const Centena = parseInt(Valor / 100)
    let Resto = Valor % 100
    const Dezena = parseInt(Resto / 10)
    const Unidade = Valor % 10

    if(Ordem === 'D'){
        return Dezena
    }
    else if(Ordem === 'U'){
        return Unidade
    }
    return Centena
}

function main(){

   //entrada de dados 
    const Numero_Decimal = Get_Number_Max_Min('Informe o número decimal[3 Digitos]: ',1,999)

    //o digito correspondente a centena,dezena e unidade
    const C = Retornar_Ordens_Numericas(Numero_Decimal, 'C') 
    const D = Retornar_Ordens_Numericas(Numero_Decimal, 'D') 
    const U = Retornar_Ordens_Numericas(Numero_Decimal, 'U')

    //o valor total correspondente a cada uma das ordens númericas
    let Centena = C * 100
    let Dezena = D * 10
    let Unidade = U

    //vai per a unidade e definicar quais números romas ela vai corresponder
    let Unidades_Romanas = ''
    while(Unidade > 0){

        if(Unidade > 0 && Unidade <= 3){
            Unidade -= 1
            Unidades_Romanas += Algarismo_Romano(1)
        }
        else if(Unidade === 4){
            Unidade -= 4
            Unidades_Romanas += Algarismo_Romano(4)
        }
        else if(Unidade >= 5 && Unidade < 9){
            Unidade -= 5
            Unidades_Romanas += Algarismo_Romano(5)
        }
        else if(Unidade === 9){
            Unidade -= 9
            Unidades_Romanas += Algarismo_Romano(9)
        }
    }

    //vai per a dezena e definicar quais números romas ela vai corresponder
    let Dezenas_Romanas = ''
    while(Dezena > 0){

        if(Dezena > 0 && Dezena <= 30){
            Dezena -= 10
            Dezenas_Romanas += Algarismo_Romano(10)
        }
        else if(Dezena === 40){
            Dezena -= 40
            Dezenas_Romanas += Algarismo_Romano(40)
        }
        else if(Dezena >= 50 && Dezena < 90){
            Dezena -= 50
            Dezenas_Romanas += Algarismo_Romano(50)
        }
        else if(Dezena === 90){
            Dezena -= 90
            Dezenas_Romanas += Algarismo_Romano(90)
        }
    }

//vai per a centena e definicar quais números romas ela vai corresponder
    let Centenas_Romanas = ''
    while(Centena > 0){

        if(Centena > 0 && Centena <= 300){
            Centena -= 100
            Centenas_Romanas += Algarismo_Romano(100)
        }
        else if(Centena === 400){
            Centena -= 400
            Centenas_Romanas += Algarismo_Romano(400)
        }
        else if(Centena >= 500 && Centena < 900){
            Centena -= 500
            Centenas_Romanas += Algarismo_Romano(500)
        }
        else if(Centena === 900){
            Centena -= 900
            Centenas_Romanas += Algarismo_Romano(900)
        }
    }

    //pega as centenas,dezenas e unidades romanas e concatena para formar o número
    const Numero_Romano = Centenas_Romanas + Dezenas_Romanas + Unidades_Romanas

    print(`
NÚMERO DECIMAL  >>>  NÚMERO ROMANO
    [${Numero_Decimal}]      >>>       [${Numero_Romano}]`)

}

main()