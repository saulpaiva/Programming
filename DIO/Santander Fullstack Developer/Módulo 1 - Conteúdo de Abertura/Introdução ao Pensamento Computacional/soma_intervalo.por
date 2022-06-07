/*
A soma dos termos de uma Progressão Aritmética (PA) se dá por S = (n/2)*(a_1 + a_n)
onde n é o número de termos da PA, a_1 é o primeiro termo e a_n o último termo.

Obs: o presente algoritmo se limita apenas á sequencias de passo 1 e com início em valores maiores ou iguais à 1.
*/

programa {
	
	funcao inteiro soma_intervalo(inteiro x, inteiro y){
	    inteiro soma = ( (x + y)*(y -x +1) )/2
	    retorne soma
	}
	
	funcao inicio() {
		inteiro x, y
		
		escreva("Digite os números para executar a soma do intervalo")
		leia(x)
		leia(y)
		
		escreva(soma_intervalo(x,y))
	}
}
