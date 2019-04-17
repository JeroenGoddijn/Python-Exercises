my_string = "DigitalCrafts"

# 1. Uppercase a String
print(my_string.upper())

# 2. Capitalize a String
print(my_string.capitalize())

# 3. Reverse a String
print(my_string[::-1])

# 4. Leetspeak
my_paragraph = """DigitalCrafts is fun and Veronica is a great instructor!"""
my_leetspeak = []
for char in my_paragraph.upper():
    if char == "A":
        my_leetspeak.append("4")
    elif char == "E":
        my_leetspeak.append("3")
    elif char == "G":
        my_leetspeak.append("6")
    elif char == "I":
        my_leetspeak.append("1")
    elif char == "O":
        my_leetspeak.append("0")
    elif char == "S":
        my_leetspeak.append("5")
    elif char == "T":
        my_leetspeak.append("7")
    else:
        my_leetspeak.append(char)

print(''.join(str(letter) for letter in my_leetspeak))

# 5. Long-long Vowels
my_long_vowels_list = []
for letter in my_string:
    if letter.lower() in ("a", "e", "i", "o", "u"):
        my_long_vowels_list.append(letter*5)
    else:
        my_long_vowels_list.append(letter)

print(''.join(str(letter) for letter in my_long_vowels_list))

# 6. Caesar Cipher
from pycipher import  Caesar
code = "lbh zhfg hayrnea jung lbh unir yrnearq"
print(Caesar(key=13).decipher(code))
