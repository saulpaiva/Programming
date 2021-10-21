'''file handle as a sequence'''

# # copy relative PATH
# xfile = open('Scientific Computing with Python\Python for Everybody\mbox.txt')
# # reads each line of the file
# for i in xfile:
#     print(i)

'''counting lines in a file'''

# fhand = open('Scientific Computing with Python\Python for Everybody\mbox.txt')
# count = 0
# for line in fhand:
#     count += 1
# print('Line Count:', count)

'''reading the whole file'''

# fhand = open('Scientific Computing with Python\Python for Everybody\mbox.txt')
# inp = fhand.read()
# print('Length:', len(inp))
# print(inp[:22])

'''searching through a file'''

# fhand = open('Scientific Computing with Python\Python for Everybody\mbox.txt')
# # prints with "new lines \n"
# for line in fhand:
#     if line.startswith('cheese'):
#         print(line)

'''searching through a file (fixed)'''

# fhand = open('Scientific Computing with Python\Python for Everybody\mbox.txt')
# # print lines without "new lines"
# for line in fhand:
#     line = line.rstrip()
#     if line.startswith('cheese'):
#         print(line)

'''skipping with continue'''

# fhand = open('Scientific Computing with Python\Python for Everybody\mbox.txt')
# for line in fhand:
#     line = line.rstrip()
#     if not line.startswith('cheese'):
#         continue
#     print(line)

'''using "in" to select lines'''

# fhand = open('Scientific Computing with Python\Python for Everybody\mbox.txt')
# for line in fhand:
#     line = line.rstrip()
#     if not 'cheese' in line:
#         continue
#     print(line)

'''other example:'''

# fhand = open('Scientific Computing with Python\Python for Everybody\mbox.txt')
# for line in fhand:
#     line = line.rstrip()
#     if 'cheese' in line:
#         print(line)

'''prompt for file name'''

fname = input('Enter the file path/name:    ')
fhand = open(fname)