'''Write a program which repeatedly reads numbers until the user enters "done". Once "done" is entered, print out the total, count, and average of the numbers. If the user enters anything other than a number, detect their mistake using "try" and "except" and print an error message and skip to the next number.'''

# global variables
s = 0
i = 0

# summary function
def summary():
    try:
        a = s/i
    except:
        a = None
    print('total =', s)
    print('count =', i)
    print('average =', a)

# iteration
while True:
    try:
        n = input('Enter a number: ')
        if n[0] == '#' :
            continue
        if n == 'done' or n ==  'Done' or n == 'DONE' :
            summary()
            break
        n = int(n)
        # n = float(n)
        s += n
        i += 1
    except:
        print('Invalid input')