'''Write a program which repeatedly reads numbers until the user enters "done". Once "done" is entered, print out the total, count, and average of the numbers. If the user enters anything other than a number, detect their mistake using "try" and "except" and print an error message and skip to the next number.'''

while True:
    s = 0
    try:
        n = input('Enter a number: ')
        if n[0] == '#' :
            continue
        if n == 'done' :
            break
        if n == 'Done' :
            break
        if n == 'DONE' :
            break
        n = int(n)
        s += n
    except:
        print('Invalid input')
