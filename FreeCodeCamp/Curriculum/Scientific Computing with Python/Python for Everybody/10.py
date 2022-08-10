# Iterations: Loop Idioms

'''
patterns of how construct a loop
making 'smart' loops
'''

# print('Before the loop')
# for thing in [9, 41, 12, 3, 74, 15] :
#     print(thing)
# print('After the loop')

'''What is the largest number'''

# largest = -1
# print('Before the loop', largest)
# for the_num in [9, 41, 12, 3, 74, 15] :
#     if the_num > largest :
#         largest = the_num
#     print('Largest so far:', largest, 'Number of the list:', the_num)
# print('After the loop', largest)

'''What is the smallest number'''

# smallest = None
# print('Before:', smallest)
# for itervar in [3, 41, 12, 9, 74, 15]:
#     if smallest is None or itervar < smallest:
#         smallest = itervar
#         #break
#     print('Loop:', itervar, smallest)
# print('Smallest:', smallest)
