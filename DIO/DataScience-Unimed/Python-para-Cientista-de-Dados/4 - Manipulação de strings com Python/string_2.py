# Interpolação de variáveis

# Definindo as variáveis utilizadas

nome = "Saul"
idade = 24
prifissao = "Programador"
linguagem = "Python"
saldo = 45.435

dados = {"nome": "Saul", "idade": 24}

# %

print("nome: %s Idade: %s" % (nome, idade))

# format

print("nome: {} Idade: {}" .format(nome, idade))
print("nome: {1} Idade: {0}" .format(idade, nome)) # surge o reaproveitamento de variáveis
print("nome: {name} Idade: {age}" .format(age=idade, name=nome))
print("nome: {nome} Idade: {idade}" .format(**dados))

# f-string

print(f"nome: {nome} Idade: {idade}")

print(f"nome: {nome} Idade: {idade} Saldo: {saldo:0.2f}")
print(f"nome: {nome} Idade: {idade} Saldo: {saldo:.2f}")
print(f"nome: {nome} Idade: {idade} Saldo: {saldo:10.2f}")