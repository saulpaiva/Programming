'''02 - 03 EX'''

'''Write a program to prompt the user for hours and rate per hour to compute gross pay'''



while True :
    hours = input('How many hours do you work in a week? ')
    if hours[0] == '#' :
        continue
    if hours == 'done' :
        break
    if hours == 'Done' :
        break
    if hours == 'DONE' :
        break
    if hours < 0 :
        break
    try :
        float(hours)
    except:
        print('You have to digit a number!')
    rate = input('Hou many are you payed for hour worked?')
    if rate[0] == '#' :
        continue
    if rate == 'done' :
        break
    if rate == 'Done' :
        break
    if rate == 'DONE' :
        break
    if rate < 0 :
        break
    try :
        float(hours)
    except:
        print('You have to digit a number!')
print('Done!')
