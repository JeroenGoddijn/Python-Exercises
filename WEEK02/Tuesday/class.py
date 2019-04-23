# student1 = "Tarek"
# student2 = "Chris"
# student3 = "Michael"

# def Students():
#     print(f"{student1} {student2} {student3}",(student1, student2, student3))

# Students()


# class Students:

#     def printStudents():
#         print("Tarek Chris Michael")

# Students.printStudents()

# class Students:

#     def students(self):
#         print("Tarek Chris Michael")

# Michael = Students()
# Michael.students()

# Chris = Students()
# Chris.students()

class MyClass(object):
    def __init__(self, first_name, last_name):
        print("hello world")
        self.first_name = first_name
        self.last_name = last_name

    def printName(self):
        print(f"{self.first_name} {self.last_name}")

dc = MyClass("Chris", "Humphrey")
dc.printName()

dc_houston = MyClass("Mohammad", "Azam")
dc_houston.printName()