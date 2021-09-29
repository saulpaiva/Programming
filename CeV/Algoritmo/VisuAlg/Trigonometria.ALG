algoritmo "semnome"
var
   a,r,s,c,t: real
inicio
     escreva("Digite o ângulo em graus: ")
     leia(a)
     r <- grauprad(a)
     s <- sen(r)
     c <- cos(r)
     t <- tan(r)
     escreval("Seu ângulo em radianos: ",r)
     escreval("Seno de",a," :",s)
     escreval("Cosseno de",a," :",c)
     escreval("Tangente de",a," :",t)
fimalgoritmo