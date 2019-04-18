# 1. Hello
# Write a function hello which takes a name parameter and says Hello to the name. Example: hello('Igor') should print

def sayHello(name):
    print("Hello,",name)
    
sayHello(name = input("What is your name? "))

# 2. y = x + 1
# Write a function f(x) that returns x + 1 and plot it for x values of -3 to 3 in increments of 1. You may use the following code template:

import matplotlib.pyplot as plot 

def f(x): 
    return x+1

xs = list(range(-3, 4)) 
ys = [] 

for x in xs: 
    ys.append(f(x)) 

plot.plot(xs, ys) 
plot.show()

# 3. Square of x
# Write a function f(x) that returns that square of x. Plot it for x values of -100 to 100 in increments of 1. It should look like this

def f(x):
    return x**2

xs = list(range(-100, 101)) 
ys = [] 

for x in xs: 
    ys.append(f(x)) 

plot.plot(xs, ys) 
plot.show()

# 4. Odd or Even
# Write a function f(x) that returns 1 if x is odd and -1 if x is even. Plot it for x values of -5 to 5 in increments of 1. This time, instead of using plot.plot, use plot.bar instead to make a bar graph. It should look like this
def f(x):
    if x %2 == 0:
        return -1
    else:
        return 1

xs = list(range(-5, 6))
ys = [] 

for x in xs: 
    ys.append(f(x)) 

plot.bar(xs, ys) 
plot.show()   

# 5. Sine
# Write a function f(x) that returns the sin of x. Hint: there is a sin function in the math module. Plot it from -5 to 5 in increments of 1. It should look like this Sin 1
from math import sin

def f(x):
    return sin(x)

xs = list(range(-5, 6))
ys = [] 

for x in xs: 
    ys.append(f(x)) 

plot.plot(xs, ys) 
plot.show()   

# 6. Sine 2
# Unfortunately, that looked horrible, and we can't use smaller increment values because the range function only supports integers. Fortunately, there is a Python package called numpy that will allow ranges with decimal-point increments. You will install it using the command pipenv install numpy. Once you've done that, you write the import statement: from numpy import arange, and then you can use arange in place of range to use decimal increments, like so:
from numpy import arange

def f(x):
    return sin(x)

xs = list(arange(-5, 6, 0.1))
ys = [] 

for x in xs: 
    ys.append(f(x)) 

plot.plot(xs, ys) 
plot.show()   


# 7. Degree Conversion
# Write a function that takes a temperature in Celcius and converts it Fahrenheit. Plot it on a graph.

def celsiusToFahrenheit(temp):
    return (float(temp) * (9/5) + 35)

xs = list(range(0, 1,1))
ys = [] 

for x in xs: 
    ys.append(float(celsiusToFahrenheit(input("Enter a temperature in Celsius: ")))) 
#    print(ys)

plot.bar(xs, ys) 
plot.show()  

# 8. Play again?
# Write a function that prompts the user for input, asking them "Do you want to play again (Y on N)?". If the user answers "Y", the function should return True, otherwise, it should return False.
def playAgain(answer):
#    while answer.lower() != "yes" or answer.lower() != "y" or answer.lower() != "no" or answer.lower() != "n":
    if answer.lower() == "yes" or answer.lower() == "y":
#        print("True")
        return True
    elif answer.lower() == "no" or answer.lower() == "n":
#        print("False")
        return False
    else: 
        print("Invalid input.")
        playAgain(input("Do you want to play again (Y or N)? "))

playAgain(input("Do you want to play again (Y or N)? "))

# 9. Play again? Again.
# Write a function that asks the user whether they want to play again last the previous problem. Except this time, they have to answer with either "Y" or "N", if they give an invalid input, it should say "Invalid input." and prompt the user again for an answer. When the user finally gives a valid input, the function will return True if it was "Y", and False if it was "N".
# See exercise 8, but I accept Yes/yes/Y/y and No/no/N/n as valid answers.