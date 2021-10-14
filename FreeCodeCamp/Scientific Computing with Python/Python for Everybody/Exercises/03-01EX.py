'''Rewrite your pay computation to give the employee 1.5 times the hourly rate for hours worked above 40 hours'''

hr = float(input('Enter Hours: '))
r = float(input('Enter Rate: '))
if hr > 40 :
    print('Pay: ', (40*r + (hr-40)*r*1.5))
else :
    print('Pay: ', hr*r)