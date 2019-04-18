# 1. 1 to 10
# Using a for loop and the range function, print out the numbers between 1 and 10 inclusive, one on a line. Example output:
for x in range(1,10):
    print(x)

# 2. n to m
# Same as the previous problem, except you will prompt the user for the number to start on and the number to end on. 
range_start = input("What number do you want to start at?")
range_end = input("What number do you want to stop at? ")
for x in range(int(range_start), int(range_end) + 1):
    print(x)

# 3. Odd Numbers
# Print each odd number between 1 and 10 inclusive.
for x in range(1,10):
    if x %2 != 0:
        print(x)

# 4. Print a Square
# Print a 5x5 square of * characters.
r = 5
c = 5
for x in range(0,r):
    print("* "* c)


# 5. Print a Square II
# Print a NxN square of * characters. Prompt the user for N.
N = input("We're going to print a square of NxN. How big do you want the square to be? ")

for x in range(0, int(N)):
    print("* "* int(N))

# 6. Print a Box
# Given a height and width, input by the user, print a box consisting of * characters as its border. Example session:
width = input("Width?")
height = input("Height?")
for x in range(0, int(height)):
    if x == 0 or x == int(height)-1:
        print("* "* int(width))
    else:
        print("* ", " "* (int(width)-1), " *")


# 7. Print a Triangle
# Print a triangle consisting of * characters like this:
triangle_size = input("How wide do you want the triangle to be? ")
for x in range(int(triangle_size)+1):
    print("*"* int(x) )

# 8. Print a Triangle II
# Given a number as the height, print a triangle as in "Print a Triangle" but with the given height.
triangle_height = input("How high do you want the triangle to be? ")
for x in range(1, int(triangle_height)+1):
    print("*"* int(x))

# 9. Multiplication Table
# Print the multiplication table for numbers from 1 up to 10. 
for x in range(1,11):
    for y in range(1,11):
        result = x * y
        print(int(x)," X ", int(y), " = ", int(result))

# Bonus: Print a Banner
# Given a string, input by the user, print that string with a box around it. The box should stretch to the length of the string. Example session:

banner_string = input("What text would you like to display on the banner? ")
for x in range(0, 3):
    if x == 0 or x == 2:
        print("*"* int(len(banner_string)+4))
    else:
        print("*", banner_string, "*")

# Bonus: Triangle Numbers
# Print the first 100 triangle numbers. What is a triangle number? Read this: https://www.mathsisfun.com/algebra/triangular-numbers.html.

# Bonus: Factor a Number
# Given a number, print its factors. What are factors? https://www.khanacademy.org/math/pre-algebra/factors-multiples/divisibility-and-factors/v/finding-factors-of-a-number
