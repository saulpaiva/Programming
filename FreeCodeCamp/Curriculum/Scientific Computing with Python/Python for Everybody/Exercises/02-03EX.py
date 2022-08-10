'''02 - 03 EX'''

'''Write a program to prompt the user for hours and rate per hour to compute gross pay'''

while True :
    # total hours worked within a week
    hours = float(input('How many hours do you work in a week? '))
    # rate of money per hour worked
    rate = float(input('Hou many are you payed for hour worked?'))
    # print the gross pay in a week and a month of work
    print('The gross pay in a week of work is:', hours*rate, '\n', 'And for approximately a month of work is: ', hours*rate*4)
    break
print('Done!')

''''this simple problem can be more complex and complete!'''

# try:
#     print('Try this')
# except:
#     print('fail')
