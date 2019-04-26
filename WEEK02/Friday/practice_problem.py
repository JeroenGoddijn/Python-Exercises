# Given a string, reverse each word in the sentence
# i.e. "Hello World!"==> "olleH !dlrow"

def reverse_words_in_sentence(sentence):
    
    # split the sentence
    words = sentence.split()
    reversed_words = []
    
    # for each word in the line:
    for word in words:
        # reverse each word and add it to the reversed_words list
        reversed_words.append(word[::-1])

    print(' '.join(reversed_words))

reverse_words_in_sentence("Hello world!")


### More extensive option without using builtin functions:

string = "Hello World!"
backwards_word = []
new_string = []
string_list = []

split_string = string.split(" ")

for word in split_string:
    for i in range(len(word)-1,-1,-1):
        backwards_word.append(word[i])
    single_string = ''.join(backwards_word)
    string_list.append(single_string)
    single_string = []
    backwards_word = []