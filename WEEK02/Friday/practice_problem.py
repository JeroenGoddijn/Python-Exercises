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