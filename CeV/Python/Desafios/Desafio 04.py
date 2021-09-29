# Faça um programa que leia algo pelo teclado e mostre na tela o seu tipo primitivo e todas as informações possíveis sobre ela

n = input('Digite algo: ')

print('É numérico? ',n.isnumeric())
print('É texto? ',n.isalpha())
print('É alfa-numérico? ',n.isalnum())
print('É numérico? ',n.isnumeric())
print('É espaço? ',n.isspace())