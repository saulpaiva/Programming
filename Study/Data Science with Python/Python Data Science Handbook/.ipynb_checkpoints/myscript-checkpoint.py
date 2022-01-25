# file: myscript.py

def square(x):
    """square a number"""
    return x ** 2

for N in range(1, 101):
    print(N, "square is", square(N))