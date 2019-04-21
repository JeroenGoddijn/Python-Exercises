from turtle import *

# Equilateral Triangle
def eq_triangle():
    for i in range(3):
        begin_fill()
        pencolor("Cyan")
        forward(100)
        left(120)
        end_fill()

# Square
def square():
    for i in range(4):
        color("SlateBlue")
        forward(100)
        right(90)

# Pentagon
def pentagon():
    for i in range(5):
        pencolor('yellow')
        width(5)
        forward(100)
        right(144)

# Hexagon
def hexagon():
    for i in range(6):
        color("pink")
        left(60)
        forward(50)

# Octagon
def octagon():
    for i in range(8):
        color("red")
        left(45)
        forward(50)

# Star
def star():
    begin_fill()
    for i in range(5):
        color('yellow')
        width(5)
        right(144)
        forward(50)
        left(72)
        forward(50)
    end_fill()

# Circle
def cir():
    begin_fill()
    color('orange')
    circle(100)
    end_fill()
    mainloop()