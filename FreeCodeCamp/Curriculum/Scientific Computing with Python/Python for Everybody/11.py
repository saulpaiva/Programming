'''Iterations: More Patterns'''

'''counting in a loop'''

# zork = 0
# print('Before', zork)
# for thing in [9, 41, 12, 3, 74, 15]:
#     zork = zork + 1
#     print(zork, thing)
# print('After', zork)

'''summing in a loop'''

# zork = 0
# print('Before', zork)
# for thing in [9, 41, 12, 3, 74, 15]:
#     zork = zork + thing
#     print('sum =', zork, 'number:', thing)
# print('After', zork)

'''finding the average in a loop'''

# count = 0
# sum = 0
# print('Before:', count, sum)
# for value in [9, 41, 12, 3, 74, 15]:
#     count += 1
#     sum += value
#     print(count, sum, value)
# print('After', count, sum)
# print(' N of elements =', count, '\n', 'Sum =', sum, '\n', 'Average =', sum/count)

'''filtering in a loop'''

# print('Before')
# for value in [9, 41, 12, 3, 74, 15]:
#     if value > 20:
#         print('Large number:', value)
# print('After')

'''search using a boolean variable'''

# found = False
# print('Before', found)
# for value in [9, 41, 12, 3, 74, 15]:
#     if value == 3:
#         found = True
#     print(found, value)
# print('After', found)


'''how to find the smallest value'''

# smallest = None
# print('Before the loop', smallest)
# for value in [9, 41, 12, 3, 74, 15] :
#     if smallest is None or smallest > value :
#         smallest = value
#     print('smallest so far:', smallest, 'Number of the list:', value)
# print('After the loop', smallest)

'''other manner of finding the smallest value'''

# smallest = None
# print('Before the loop', smallest)
# for value in [9, 41, 12, 3, 74, 15] :
#     if smallest is None :
#         smallest = value
#     elif value < smallest :
#         smallest = value
#     print('smallest so far:', smallest, 'Number of the list:', value)
# print('After the loop', smallest)

''' "is" and "is not" operators is stronger than "==" and "!=" '''