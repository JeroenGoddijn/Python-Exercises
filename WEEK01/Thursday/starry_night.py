import random
from turtle import *
import shapes_exercise3

def move_pen0():
    up()
    left(145)
    forward(500)
    right(145)
    down()
    
def move_pen1():
    up()
    forward(random.randint(50,80))
    down()

def move_pen2():
    up()
    right(90)
    forward(45)
    right(90)
    down()

def move_pen3():
    up()
    forward(random.randint(50,80))
    down()

def move_pen4():
    up()
    left(90)
    forward(50)
    left(90)
    down()

bgcolor("#180f2a")
move_pen0()
for i in range(7):
    for j in range(15):
        shapes_exercise3.star(random.randint(5,15), "yellow", True)
        move_pen1()
    move_pen2()
    for k in range(15):
        shapes_exercise3.star(random.randint(5,15), "yellow", True)
        move_pen3()
    move_pen4()
    for l in range(15):
        shapes_exercise3.star(random.randint(5,15), "yellow", True)
        move_pen1()
    move_pen2()
    for m in range(15):
        shapes_exercise3.star(random.randint(5,15), "yellow", True)
        move_pen3()
    move_pen4()
    # mainloop()