# Métodos úteis

nome = "sAuL"

print(nome.upper())
print(nome.lower())
print(nome.title())

texto = "  Olá mundo!    "

print("." + texto + ".")
print("." + texto.strip() + ".")
print("." + texto.rstrip() + ".")
print("." + texto.lstrip() + ".")

menu = "Python"

print(menu.center(16))
print(menu.center(16, "#"))

print("-".join(menu))
print(".".join(menu))