# Write a Phone Book App
# You will write a command line program to manage a phone book. When you start the phonebook.py program, it will print out a menu and ask the user to enter a choice:


# Electronic Phone Book 
# ===================== 
# 1. Look up an entry 
# 2. Set an entry 
# 3. Delete an entry 
# 4. List all entries 
# 5. Quit
# What do you want to do (1-5)?

# If they choose to look up an entry, you will ask them for the person's name, and then look up the person's phone number by the given name and print it to the screen.
# If they choose to set an entry, you will prompt them for the person's name and the person's phone number,
# If they choose to delete an entry, you will prompt them for the person's name and delete the given person's entry.
# If they choose to list all entries, you will go through all entries in the dictionary and print each out to the terminal.
# If they choose to quit, end the program.

phone_book = {"Igor":"857-485-2935"}
menu_select = 0

options = """
Electronic Phone Book 
===================== 
1. Look up an entry 
2. Add an entry 
3. Delete an entry 
4. List all entries 
5. Quit
"""
print(options)

def lookup_entry(name):
    if name in phone_book:
        return phone_book[name]
    else:
        errorMessage = "Sorry, couldn\'t find " + name + " in the phone book."
        return errorMessage

def add_entry(name, phone_number):
    if name in phone_book.keys():
        phone_book.update({name:phone_number}) 
        statusMessage = "Entry for " + name + " successfuly updated"
        return statusMessage
    else:
        phone_book[name] = phone_number
        statusMessage = "Entry added for " + name
        return statusMessage

def delete_entry(name):
    if name in phone_book:
        phone_book.pop(name)
        print("Deleted entry for " + name)
    else:
        print("Sorry, but no entry was found for " + name)

def all_entries():
    return phone_book

while int(menu_select) <= 5 and int(menu_select) >= 0:
    try:
        if int(menu_select) == 1:
            print(lookup_entry(input("Who\'s phone number are you looking for? ")))
            menu_select=0
        elif int(menu_select) == 2:
            name=input("What is the contact\'s name?")
            phone_number=input("What is the contact\'s phone number?")
            message = add_entry(name, phone_number)
            print(message)
#                print(phone_book)
            menu_select=0
        elif int(menu_select) == 3:
            name=input("What is the contact\'s name?")
            delete_entry(name)
#                print(phone_book)
            menu_select=0
        elif int(menu_select) == 4:
            print(all_entries())
            menu_select=0
        elif int(menu_select) == 5:
            print("This app will now exit. Bye!")
            break
        else:
            print(options)
            menu_select=int(input("What do you want to do (1-5)? "))
    except:
    #     print("That is not a valid menu option.")
        break