/*
A soma dos termos de uma Progressão Aritmética (PA) se dá por S = (n/2)*(a_1 + a-n)
onde n é o número de termos da PA, a_1 é o primeiro termo e a_n o último termo.
*/

programa {
	
	funcao inteiro soma_intervalo(inteiro x, inteiro y){
	    inteiro soma = (x+y)*(y/2)
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
