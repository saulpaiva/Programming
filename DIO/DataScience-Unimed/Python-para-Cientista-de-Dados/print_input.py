nome = input("Informe o seu nome: ")
idade = input("Informe a sua idade: ")


print(nome, idade) # end padrão é end="\n"
print("teste", end=" ")
print(nome, idade, end="...\n")
print(nome, idade, sep="#")
print(nome, idade, sep="#", end="...\n")