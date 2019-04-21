from turtle import *
import shapes_exercise3

def move_pen0():
    up()
    right(90)
    forward(250)
    left(90)
    down()
    
def move_pen1():
    up()
    left(50)
    forward(200)
    down()

# def move_pen2():
#     up()
#     forward(120)
#     right(50)
#     forward(50)
#     down()

move_pen0()
shapes_exercise3.eq_triangle(100, "blue", True)
move_pen1()
shapes_exercise3.square(100, "purple", False)
move_pen1()
shapes_exercise3.pentagon(100, "green", False)
move_pen1()
shapes_exercise3.hexagon(100, "pink", True)
move_pen1()
shapes_exercise3.octagon(100, "brown", False)
move_pen1()
shapes_exercise3.star(100, "yellow", True)
move_pen1()
shapes_exercise3.cir(100, "orange", True)