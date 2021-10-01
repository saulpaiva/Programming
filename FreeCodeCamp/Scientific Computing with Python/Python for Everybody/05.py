# More conditional structures

"""- multi-way

    if (...) :
        ...
    elif (...) :
        ...
    else :
        ..."""

"""- The try/except structures

try:
    ...
except:
    ...

(except only runs if try fails)"""

'''astr = 'Saul'
try:
    print('123')
    istr = int(astr)
    print('456')
except:
    istr = -1
    print('using except')
print('Done', istr)'''

guess = input('Choose a number and then press Enter: ')
try:
    number = float(guess)
    # print('Your number is very cool! ', number*'NICE ')
    print('Your number is very cool! ', number)
except:
    print('That is not a number, try again!')
