# EXERCISE 1 and 2

name = input('What is your name? ')

print("Hello, "+ name)
print("Your name has " + str(len(name)) + " letters in it! Awesome!")

# EXERCISE 3
sentence = "{name}'s favorite subject in school is {subject}.".format(name=input("What's your name?"), subject = input("What is subject?"))
print(sentence)

# EXERCISE 4
day = int(input('Day (0-6)? '))
dayOfWeek = 0
if day >=0 and day <= 6:
    if day == 0:
        print("Sunday")
    elif day == 1:
        print("Monday")
    elif day == 2:
        print("Tuesday")
    elif day == 3:
        print("Wednesday")
    elif day == 4:
        print("Thursday")
    elif day == 5:
        print("Friday")
    elif day == 6:
        print("Saturday")
    else:
        print("You've entered an invalid number for day of week (input not number between 0 to 6).")

# ALTERNATIVE SOLUTION EXERCISE 4
day = int(input('Day (0-6)? '))
dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

if day <=6 and day >=0:
    print(dayOfWeek[day])
else:
    print("You've entered an invalid number for day of week (input not number between 0 to 6).")

# EXERCISE 5
day = int(input('Day (0-6)? '))
dayOfWeek = ""
if day > 0 and day < 6:
    print("Go to work")
elif day == 0 or day == 6:
    print("Sleep in")
else:
    print("Please enter a valid number for day of week between 0 to 6.")

# EXERCISE 6
temp = float(input("Please enter temperature in Celsius: "))
print(temp * 1.8 + 32)

# EXERCISE 7
total_bill = float(input("Enter amount of total bill: "))
service_level = input("Rate service level (good, fair, bad): ")

if service_level.lower() == "good":
    tip_percentage = 0.2
elif service_level.lower() == "fair":
    tip_percentage = 0.15
elif service_level.lower() == "bad":
    tip_percentage = 0.1

tip_amount = total_bill * tip_percentage
total_amount = total_bill + tip_amount
print("Tip amount: {:.2f}".format(tip_amount))
print("Total amount: {:.2f}".format(total_amount))

# EXERCISE 8
split_into = input("Split how many ways?")
amount_per_person = total_amount / int(split_into)
print("Amount per person: {:.2f}".format(amount_per_person))

# EXERCISE 9
x = 1
while x in range(1,11):
    print(x)
    x += 1


# EXERCISE 10
coins = -1
want_coin = ""
while want_coin != "no":
    coins += 1
    print("You have " + str(coins) + " coins.\n")
    want_coin = input("Do you want another coin? (yes/no)")
else:
    print("Bye")