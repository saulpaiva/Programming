'''Rewrite your pay computation with time-and-a-half for overtime and create a function called "computepay" which takes two parameters: "hours" and "rate" '''

def computepay(hr,r):
    try :
        hr = float(hr)
        r = float(r)

        # print hours of work
        print('Hours of work:', hr)
        
        # print rate of pay per worked hour
        print('Rate of pay:', r)

        if hr > 40 :
            extra_pay = (40*r + (hr-40)*r*1.5)
            print('Pay: ', extra_pay)
        else :
            print('Total pay: ', hr*r)

    except :
        print('Error, please enter numeric input')

computepay(45, 10)