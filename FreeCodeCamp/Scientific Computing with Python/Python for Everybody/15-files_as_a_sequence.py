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

fhand = open('Scientific Computing with Python\Python for Everybody\mbox.txt')
for line in fhand:
    if line.startswith('cheese'):
        print(line)