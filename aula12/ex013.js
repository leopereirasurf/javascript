var agora = new Date()
var diaSem = agora.getDay()

/*
0= domingo
1= segunda 
2= terça
3= quarta
4= quinta
5= sexta
6= sabado
7= domingo
*/
console.log(diaSem)
switch(diaSem){
   case 0: 
 console.log('domingo')
 break
 case 1: 
 console.log('segundao')
 break
 case 2: 
 console.log('terça')
 break
 case 3: 
 console.log('dquarta')
 break
 case 4: 
 console.log('quinta-feira')
 break
 case 5: 
 console.log('dsexta-feira')
 break
 case 6: 
 console.log('sabado')
 break
 default:
     console.log('[erro] dia invalido')
     break
 
}
