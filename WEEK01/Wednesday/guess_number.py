import random

secret_number = random.randint(1,10)

guess = 0

x = 1

while guess != secret_number and x <= 5:  
    if guess == 0:
        guess = int(input("I am thinking of a number between 1 and 10. What\'s the number? \n"))
    else:
        if guess < secret_number:
            guess = int(input("{user_input} is too low. What\'s the number? ".format(user_input = int(guess))))
        else:
            guess = int(input("{user_input} is too high. What\'s the number? ".format(user_input = int(guess))))
    x += 1
else:
    if x > 5:
        if guess < secret_number:
            print("{user_input} is too low. You ran out of guesses! ".format(user_input = int(guess)))
        else:
            print("{user_input} is too high. You ran out of guesses! ".format(user_input = int(guess)))
    else:
        print("Yes! You win!")