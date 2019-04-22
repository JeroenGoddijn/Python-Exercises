# EXERCISE 1

phonebook_dict = { 
  'Alice': '703-493-1834', 
  'Bob': '857-384-1234', 
  'Elizabeth': '484-584-2923'
}

def phone_by_name(name):
    print(phonebook_dict.get(name))

def add_entry(name, phone_number):
    phonebook_dict[name] = phone_number
    print(phonebook_dict)

def delete_entry(name):
    phonebook_dict.pop(name)
    print(phonebook_dict)

def update_entry(name, phone_number):
    phonebook_dict.update({name:phone_number}) 
    print(phonebook_dict)

def print_phonebook():
    print(phonebook_dict)

# Print Elizabeth's phone number.
phone_by_name("Elizabeth")
# Add a entry to the dictionary: Kareem's number is 938-489-1234.
add_entry(name=input("What is the contact\'s name?"), phone_number=input("What is the contact\'s phone number?"))
# Delete Alice's phone entry.
delete_entry(name=input("What is the name of the contact you want to delete?"))
# Change Bob's phone number to '968-345-2345'.
update_entry(name=input("Who's phone number do you want to update?"), phone_number=input("What is the contact\'s phone number?"))
# Print all the phone entries.
print_phonebook()

# EXERCISE 2
ramit = { 
  'name': 'Ramit', 
  'email': 'ramit@gmail.com', 
  'interests': ['movies', 'tennis'], 
  'friends': [ 
     { 
       'name': 'Jasmine', 
       'email': 'jasmine@yahoo.com', 
       'interests': ['photography', 'tennis']
     }, 
     { 
        'name': 'Jan', 
        'email': 'jan@hotmail.com', 
        'interests': ['movies', 'tv'] 
     } 
    ] 
}

# Write a python expression that gets the email address of Ramit.
print(ramit['email'])
# Write a python expression that gets the first of Ramit's interests.
print(ramit['interests'][0])
# Write a python expression that gets the email address of Jasmine.
print(ramit['friends'][0]['email'])
# Write a python expression that gets the second of Jan's two interests.
print(ramit['friends'][1]['interests'][1])

# EXERCISE 3 - Letter Summary
# Write a letter_histogram function that takes a word as its input, and returns a dictionary containing the tally of how many times each letter in the alphabet was used in the word. For example:

def letter_histogram(word) :
    d = dict()
    for letter in word:
        if letter not in d:
            d[letter.lower()] = 1
        else:
            d[letter.lower()] += 1
    return d

def print_hist(h):
    for letter in h:
        print(letter, h[letter])

print_hist(letter_histogram(input("Please enter a word: ")))
print("*"*30)

# Exercise 4 - Word Summary
# Write a word_histogram function that takes a paragraph of text as its input, and returns a dictionary containing the tally of how many times each word in the alphabet was used in the text. For example:

def word_histogram(paragraph) :
    word_d = dict()
    for word in paragraph.split(" "):
        if word not in word_d:
            word_d[word.lower()] = 1
        else:
            word_d[word.lower()] += 1
    return word_d

def print_hist(k):
    for word in k:
        print(word, k[word])

print_hist(word_histogram('To be or not to be'))

# Bonus Challenge
# Given a histogram tally (one returned from either letter_histogram or word_summary), print the top 3 words or letters.