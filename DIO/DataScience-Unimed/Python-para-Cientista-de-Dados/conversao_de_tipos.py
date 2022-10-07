# numérico para string

preco, idade = 10.50, 24

print(str(preco))
print(str(idade))

texto = f"idade {idade} preco {preco} "
print(texto)

print(type(texto))

# string para número

preco, idade = "10.50", "24"

print(float(preco))
print(int(idade))

# nem sempre é possível fazer a conversão dos tipos