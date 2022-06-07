programa {
	funcao inicio() {
		real a1, a2, b1, b2
		escreva("Digite as notas da p1 e depois da p2 do aluno A: ")
		leia(a1)
		leia(a2)
		escreva("Digite as notas da p1 e depois da p2 do aluno B: ")
		leia(b1)
		leia(b2)
		
		escreva("Média do aluno A: ", media_aluno(a1,a2))
		escreva("\nMédia do aluno B: ", media_aluno(b1,b2))
	}
	
	funcao real media_aluno(real nota_1, real nota_2) {
	    retorne (nota_1 + nota_2)/2    
	}
}
