'''what is not a "collection" '''

# "Most of our variables have one value in them - when we put a new value in the variable, the old value in overwritten"

'''a list is a kind of collection'''

# friends = ['Joseph','Glenn','Sally']

# carryon = ['socks','shirt','perfume']

'''list constants'''

# print([1, [5, 6], 7])

'''we already use lists!'''

# for i in [5, 4, 3, 2, 1]:
#     print(i)
# print('Blastoff!')

'''lists and definite loops - best pals'''


# friends = ['Joseph','Glenn','Sally']
# for friend in friends:
#     print('Happy New Year:', friend)
# print('Done!')

# z = ['Joseph','Glenn','Sally']
# for x in z:
#     print('Happy New Year:', x)
# print('Done!')

'''looking inside lists'''

# friends = ['Joseph','Glenn','Sally']
# print(friends[0])

'''lists are mutable'''
# # and strings are immutable

# # gives TypeError!
# fruit = 'Banana'
# fruit[0] = 'b'
# print(fruit)

# # it works!
# lotto = [2, 14, 26, 41, 63]
# print(lotto)
# lotto[2] = 30.0
# print(lotto)

'''how long is a list'''

# greet = 'Hello Bob'
# print(len(greet))

# x = [1, 2, 'Jon', 100]
# print(len(x))

'''using the "range" function'''

# print(range(4))

# for x in range(10) :
#     print(x)

# friends = ['Joseph','Glenn','Sally']
# print(range(len(friends)))

'''a tale of two loops...'''

# friends = ['Joseph','Glenn','Sally']

# for friend in friends :
#     print('Happy New Year:', friend)

# for i in range(len(friends)) :
#     friend = friends[i]
#     print('Happy New Year:', friend)