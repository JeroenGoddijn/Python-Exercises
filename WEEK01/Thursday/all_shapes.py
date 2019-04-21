from turtle import *
import shapes

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
shapes.eq_triangle()
move_pen1()
shapes.square()
move_pen1()
shapes.pentagon()
move_pen1()
shapes.hexagon()
move_pen1()
shapes.octagon()
move_pen1()
shapes.star()
move_pen1()
shapes.cir()