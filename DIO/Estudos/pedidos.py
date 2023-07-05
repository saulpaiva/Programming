# pedidos = []

numPedidos = int(input())

for i in range(1, numPedidos + 1):
    prato = input()
    calorias = int(input())
    # ehVegano = False
    ehVegano = input()
    if ehVegano == "s":
      opcao = "Vegano"
    if ehVegano == "n":
      opcao = "Nao-vegano"
    print(f"Pedido {i}: {prato} ({opcao}) - {calorias} calorias")
    
# for pedido in pedidos:
#   print(pedidos)

    # //TODO: Tendo em vista a variável booleana "ehVegano", imprima a saída deste desafio.