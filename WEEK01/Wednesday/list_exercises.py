# 1 Sum the Numbers
numbers = (1, 4, 7, 10, 13, 16, -2, -5)

sum = 1
for num in numbers:
    sum *= num
print(sum)

# 2. Largest Number
print(max(numbers))

# 3. Smallest Number
print(min(numbers))

# 4. Even Numbers
for num in numbers:
    if num %2 == 0:
        print(num)

# 5. Positive Numbers

for num in numbers:
    if num > 0:
        print(num)

# 6. Positive Numbers II
positive = []
for num in numbers:
    if num > 0:
        positive.append(num)
 
print(positive)

# 7. Multiply a list
factor = 5
mult_list = []
for num in numbers:
    mult_list.append(num*factor)
 
print(mult_list)

# 8. Multiply Vectors
list1 = [2, 4, 5]
list2 = [4, 7, 9]
mult_vectors = []
for i in range(len(list1)):
    mult_vectors.append(list1[i]*list2[i])

print(mult_vectors)

# 9. Matrix Addition
addition = [[0, 0], [0, 0]]
matrix1 = [ [2, -2],
         [5, 3] ]
matrix2 = [ [13, 53],
          [21, 99] ]
for i in range(0, len(matrix1)):
#    print("I=", i)
    for j in range(0, len(matrix1[i])):
#        print("J=", j)
        addition[i][j] = matrix1[i][j] + matrix2[i][j]
    i += 1
print(addition)

# 10. Matrix Addition II
# Use your solution in Matrix Addition, and extend it to work for a pair of matrices of any size, 
# as long as they have the same size.

# I believe my solution under exercise 9 already does so.

# 11. De-dup
# Given a list of numbers or strings, create a new list containing the same elements as the first list, 
# except with any duplicate values removed. Print the list.
duplicates_list = ["Arctic Desert", "Kalahari Desert", "Sahara Desert", "Sahara Desert", "Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert", "Great Basic Desert", "Syrian Desert", "Kalahari Desert", "Great Basic Desert", "Sahara Desert"]

uniq_list = []
for x in duplicates_list:
    if x not in uniq_list:
        uniq_list.append(x)

print(uniq_list)