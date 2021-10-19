'''Intermediate Strings'''

'''slicing strings'''

# s = 'Monty Python'
# # s sub 0 through 12...
# # colon ":" operator
# print(s[0:12])
# print(s[0:1])
# print(s[6:100])
# print(s[:])

'''string concatenation'''

# a = 'Hello'
# b = 'There'
# c = a + b
# print(c)
# d = a + ' ' + b
# print(d)

# print(a,b)

'''using "in" as a logical operator'''

# fruit = 'banana'

# # in python terminal:
# 'n' in fruit
# 'm' in fruit
# 'nan' in fruit

# if 'a' in fruit :
#     print('Found it!')

'''string comparison'''

# word = 'Banana'

# if word == 'banana' :
#     print('All right, bananas.')

# # or:

# if word < 'banana' :
#     print('Your word, ' + word + ', comes before banana.')
# elif word > 'banana' :
#     print('Your word, ' + word + ', comes after banana.')
# else :
#     print('All right, bananas.')
# # upper and lower case makes difference
# # in general, upper case comes before any lower case

'''string library'''

# greet = 'Hello Bob'
# zap = greet.lower()
# print(zap)
# print(greet)
# print('Hi There'.lower())

'''string-methods'''

# stuff = 'Hello World'
# type(stuff)
# dir(stuff)

'''searching a string'''

# fruit = 'banana'
# # position of some string with ".find"
# pos = fruit.find('na')
# print(pos)
# aa = fruit.find('z')
# print(aa)

'''making everything UPPER CASE and lower case'''

# greet = 'Hello Bob'
# nnn = greet.upper()
# print(nnn)
# www = greet.lower()
# print(www)

'''search and replace'''

# greet = "Hello Bob"
# nstr = greet.replace('Bob','Jane')
# nstr2 = greet.replace('o','X')
# print(greet)
# print(nstr)
# print(nstr2)

'''stripping whitespace'''

# greet = '   Hello Bob   '
# l = greet.lstrip()
# r = greet.rstrip()
# both = greet.strip()

# print('.' + l + '.')
# print('.' + r + '.')
# print('.' + both + '.')
# # can be tab, newline, whitespaces...

'''prefixes'''

# line = 'Please have a nice day'
# Please = line.startswith('Please')
# p = line.startswith('p')
# print(Please)
# print(p)

'''parsing and extracting'''

# data = 'From stephen.marquard@uct.ac.za Sat Jan  5 09:14:16 2008'
# atpos = data.find('@')
# print(atpos)
# sppos = data.find(' ',atpos)
# print(sppos)
# host = data[atpos+1 : sppos]
# print('> ' + host + ' <')

'''two kinds of strings'''

# unicode operation is still a string on Python 3.5.1 (in Python 3, all strings are unicode)