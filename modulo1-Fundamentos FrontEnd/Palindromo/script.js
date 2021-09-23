 palindromo('aba') //palindromo
 palindromo('Bola') //Nao e
 palindromo('') //Palindromo
 palindromo('ayzzxy')//e palindromo
 palindromo('W')// E palindromo

 function palindromo(s){
     for(var i = 0, j = s.length -1; i < j; i++, j--){
         if(s.charAt(i) != s.charAt(j)){
            console.log(s+' Não é Palindromo');
            return;
         }        
     }
     console.log(s+' É Palindromo');
 }