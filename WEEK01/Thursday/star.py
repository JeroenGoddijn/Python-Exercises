from turtle import *

# OPTION 1

# move into position
up()
#right(90)
forward(200)

# forward(50)
# right(90)

down()

begin_fill()
pencolor('yellow')
fillcolor('yellow')
width(5)
for i in range(5):
    right(144)
    forward(200)
    left(72)
    forward(200)
end_fill()

mainloop()
