'''Write a program to read through a file and print the contents of the file (line by line) all in upper case.'''

# file: Scientific Computing with Python\Python for Everybody\mbox.txt

fname = input('Enter a file name/path:  ')
try:
    fhand = open(fname)
except:
    print('File cannot be opened:', fname)
    # quit/terminate the program, end
    quit()

for line in fhand:
    line = line.rstrip()
    # print just some lines of the file
    if 'cheese' in line:
        print(line)