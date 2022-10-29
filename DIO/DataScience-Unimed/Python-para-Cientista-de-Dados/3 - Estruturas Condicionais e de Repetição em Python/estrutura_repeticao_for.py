# Exemplo utilizando um iterável

# pip install unidecode
from unidecode import unidecode # retira os acentos da string

texto = unidecode(input("Informe um texto: "))
# texto = " "

VOGAIS = "AEIOU"

for letra in texto:
    if letra.upper() in VOGAIS:
        print(letra, end="")

    else :
        print() # adiciona uma quebra de linha
        print("Executa no final do laço, quando se depara com uma consoante") 