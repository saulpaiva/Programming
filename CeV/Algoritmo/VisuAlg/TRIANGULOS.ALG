algoritmo "Triangulos"
var
L1, L2, L3: real
eq, es, tri: logico
inicio
    escreva("Digite o primeiro lado: ")
    leia(L1)
    escreva("Digite o sugundo lado: ")
    leia(L2)
    escreva("Digite o terceiro lado: ")
    leia(L3)
    eq <- (L1=L2) e (L2=L3)
    es <- (L1<>L2) e (L1<>L3) e (L2<>L3)
    tri <- (L1 < L2 + L3) e (L2 < L1 + L3) e (L3 < L1 + L2)
    escreval("Pode formar um triangulo?", tri)
    escreval("O triangulo e equilatero?",eq)
    escreval("O triangulo e escaleno?",es)
fimalgoritmo