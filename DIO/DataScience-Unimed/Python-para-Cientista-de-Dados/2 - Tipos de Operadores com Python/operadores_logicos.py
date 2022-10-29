print(True and True)
print(True and False)
print(False and False)
print(True or True)
print(True or False)
print(False or False)

# Exemplo

saldo = 1000
saque = 250
limite = 200
conta_especial = True

exp = saldo >= saque and saque <= saque <= limite or conta_especial and saldo >= saque
print(exp)

# # Coloque os parênteses de forma correta
# exp = saldo >= saque and saque <= saque <= limite or conta_especial and saldo >= saque
# print(exp)