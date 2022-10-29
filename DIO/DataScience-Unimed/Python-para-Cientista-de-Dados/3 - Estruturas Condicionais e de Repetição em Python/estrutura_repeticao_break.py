# Exemplo de break

while True: # Ou, por exemplo, while 1 = 1
    numero = int(input("Informe um número: "))  # type: ignore

    if numero == 10:
        print("Fim da iteração!")
        break
    
    print(numero)