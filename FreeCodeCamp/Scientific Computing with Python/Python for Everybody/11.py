# Iterations: More Patterns

'''counting in a loop'''

# zork = 0
# print('Before', zork)
# for thing in [9, 41, 12, 3, 74, 15]:
#     zork = zork + 1
#     print(zork, thing)
# print('After', zork)

'''summing in a loop'''

zork = 0
print('Before', zork)
for thing in [9, 41, 12, 3, 74, 15]:
    zork = zork + thing
    print('sum =', zork, 'number:', thing)
print('After', zork)