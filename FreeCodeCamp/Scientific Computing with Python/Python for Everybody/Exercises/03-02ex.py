'''Rewrite your pay program using "try" and "except" so that your program handles non-numeric input gracefully by printing a message and exiting the program'''

try :
    # input hours of work
    hr = input('Enter Hours: ')
    hr = float(hr)

    # input rate of pay per worked hour
    r = input('Enter Rate: ')
    r = float(r)

    if hr > 40 :
        extra_pay = (40*r + (hr-40)*r*1.5)
        print('Pay: ', extra_pay)
    else :
        print('Pay: ', hr*r)

except :
    print('Error, please enter numeric input')