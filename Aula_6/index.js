/*let temp = 37;

if(temp >= 37.5){
    console.log("Febre")
}else if(temp == 37){
    console.log("Quase febre")
}else{
    console.log("Sem febre")
}*/

/*
let pao = false;
let queijo = true;

if(pao || queijo){
    console.log("como")
}
*/

/*
switch(''){
    case 'a':
        console.log("A")
    case "b":
        console.log("A")    
}
*/

/*
function calc(n1,n2,op){
    let result;

    switch(op){
        case '+':
        result =  n1+n2;
        break;

        case '-':
        result = n1-n2;
        break;

        case'*':
        result = n1*n2;
        break;

        case'/':
        result = n1/n2;
        break;

        default:
            result = "erro";
            break;          
    }

    return result;
}

console.log(calc(61,25,'*'))

for(let i=0; i<=10; i++){
    console.log('2 x ${i} = ',2*1);
}

let teste = 0;
while(teste <= 10){
    console.log('3 x ${teste}=', 3*teste);
    teste++
}
*/


/*exercicio 1 */

function exe(n1,n2){
if(n1 > n2){
    console.log(n1)
}else{
    console.log(n2)
    return resultado;
}

}

exe(260,90)

/*exercicio 2 */


function exe2(n1){
    if(n1 < 0){
        console.log('negativo')
    }else{
        console.log('positivo')
    }
}

exe2(2)

/*exercicio 3 */
function exe3(letra){
    switch(letra){
        case 'a':
            console.log("Vogal")
            break;
        case 'e':
            console.log("Vogal")
            break;
        case 'i':
            console.log("Vogal")
            break;
        case 'o':
            console.log("Vogal")
            break;
        case 'u':
            console.log("Vogal")   
            break;
            
            default:
                console.log("Consoante")
    }
}

exe3("B")

/*exercicio 4 */
function exe4(nota1,nota2,nota3,nota4){
let media = (nota1 + nota2 + nota3 + nota4)/4
    if(media > 7 && media <10 ){
        console.log('Aprovado')
    }else if(media == 10){
        console.log('Aprovado com Distinção')
    }else{
        console.log("Reprovado")
    }
}

exe4(10,10,10,10)

/*exercicio5 */
function exe5(n1,n2,n3){
   if(n1> n2 && n1> n3){
    console.log(n1)
   }else if(n2> n1 && n2 > n3){
    console.log(n2)
   }else{
    console.log(n3)
    
   }
   
}
     
exe5(1,8,9)

/*exercicio 6 */
function exe6(amaciante,sabao,detergente){
    if(amaciante < sabao && amaciante<detergente){
        console.log(`o maior preço e o do amaciante q e q`,amaciante)
    }else if(sabao<amaciante && sabao<detergente){
        console.log(sabao)
    }else{
        console.log('o menor preço e o do amaciante q e q ',detergente)
    }
}
exe6(12,15,9)

function exe7(letra){
switch(letra){
    case 'm':
        console.log("Bom Dia!!")
        break;
    case 'v':
        console.log("Boa Tarde!!")
        break;
    case 'n':
        console.log("Boa Noite!!")
        break;
   
        default:
            console.log("Valor invalido")
}

}
exe7("v")

function exe8(n1){
    if(n1> 60 && n1>90 )

}


/*exercicio 9 */
function exe9(numero){
    switch(numero){
        case '1':
            console.log("Domingo")
            break;
        case '2':
            console.log("Segunda")
            break;
        case '3':
            console.log("Terça")
            break;
        case '4':
            console.log("Quarta")
            break;
        case '5':
            console.log("Quinta")
            break;
        case '6':
            console.log("Sexta")
            break;
        case '7':
            console.log("Sabado")            
            default:
                console.log("Valor invalido")
    }
    
    }
    exe9("3")