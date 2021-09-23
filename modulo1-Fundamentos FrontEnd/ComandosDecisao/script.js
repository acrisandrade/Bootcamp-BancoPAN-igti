function maior(a,b,c){
    if(a > b && a > c ){
     return a;
}else if (b > a && b > c){
    return b;
}else{
    return c;
}
}

function menor (a,b,c){ //op ternario
  return (a<b && a< c) ? a : (b < a && b < c) ? b : c ;
}

function formataMes(mes){
    switch(mes){
        case 1:
            return 'Janeiro';
        case 1:
        return 'Janeiro';
        break;
        case 2:
        return 'Fevereiro';
        break;
        case 3:
        return 'aMarço';
        break;
        case 4:
        return 'Abril';
        break;
        case 5:
        return 'Maio';
        break;
        case 6:
        return 'Junho';
        break;
        case 7:
        return 'Julho';
        break;
        case 8:
        return 'Agosto';
        break;
        case 9:
        return 'Setembro';
        break;
        case 10:
        return 'Outubro';
        break;
        case 11:
        return 'Novembro';
        break;
        case 12:
    return 'Dezembro';
    break;
    default:
        return "Mes não Encontado"
            
    }
}

console.log('Imprimindo de 1 a 5 com While:');

var contador1 = 1;

while(contador1 <= 5){
   console.log(contador1);
   contador1++
}

console.log('Imprimindo de 1 a 5 com DO While:');
//Executa um comando de repeticao e depois verifica condicao

var contador2 = 1

do{
    console.log(contador2); //Faça isso
   contador2++
}while (contador2 <= 5) //enquanto

console.log('Imprimindo de 1 a 5 com For:');

for( var contador3 = 1; contador3 <= 5; contador3++){
    console.log(contador3)
}