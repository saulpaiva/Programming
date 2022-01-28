# file: myscript.py

def cubic(x):
    """cubic of a number"""
    return x ** 3

for N in range(1, 101):
    print(N, "cubic is", cubic(N))