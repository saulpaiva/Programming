# 4 spaces for identation in Python

def sacar(valor: float):
    saldo = 500

    if saldo >= valor:

        saldo -= valor
        print("Valor sacado!")
        print(f"Novo saldo: {saldo} ")

    print("Obrigado por ser nosso cliente, tenha um bom dia!")

def depositar(valor: float):
    saldo =500
    saldo += valor

    if valor > 0:

        print("Valor depositado!")
        print(f"Novo saldo: {saldo} ")

    print("Obrigado por ser nosso cliente, tenha um bom dia!")


    
sacar(100)
depositar(100)