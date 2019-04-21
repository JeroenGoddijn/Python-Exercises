from turtle import *

# Equilateral Triangle
def eq_triangle(size, colour, fill_it):
    if fill_it:
        begin_fill()
        for i in range(3):
            pencolor(colour)
            forward(size)
            left(120)
        end_fill()
    else:
        for i in range(3):
            pencolor(colour)
            forward(size)
            left(120)

# Square
def square(size, colour, fill_it):
    if fill_it:
        begin_fill()
        for i in range(4):
            color(colour)
            forward(size)
            right(90)
        end_fill()
    else:
        for i in range(4):
            color(colour)
            forward(size)
            right(90)

# Pentagon
def pentagon(size, colour, fill_it):
    if fill_it:
        begin_fill()
        for i in range(5):
            pencolor(colour)
            width(5)
            forward(size)
            right(144)
        end_fill()
    else:
        for i in range(5):
            pencolor(colour)
            width(5)
            forward(size)
            right(144)

# Hexagon
def hexagon(size, colour, fill_it):
    if fill_it:
        begin_fill()
        for i in range(6):
            color("pink")
            left(60)
            forward(size/2)
        end_fill()
    else:
        for i in range(6):
            color("pink")
            left(60)
            forward(size/2)

# Octagon
def octagon(size, colour, fill_it):
    if fill_it:
        begin_fill()
        for i in range(8):
            color(colour)
            left(45)
            forward(size/2)
        end_fill()
    else:
        for i in range(8):
            color(colour)
            left(45)
            forward(size/2)

# Star
def star(size, colour, fill_it):
    if fill_it:
        begin_fill()
        for i in range(5):
            color(colour)
            width(5)
            right(144)
            forward(size/2)
            left(72)
            forward(size/2)
        end_fill()
    else:
        for i in range(5):
            color(colour)
            width(5)
            right(144)
            forward(size/2)
            left(72)
            forward(size/2)

# Circle
def cir(size, colour, fill_it):
    if fill_it:
        begin_fill()
        color(colour)
        circle(size)
        end_fill()
        mainloop()
    else:
        color(colour)
        circle(size)
        mainloop()