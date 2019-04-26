
class Character(object):
    def __init__(self,health, power):
        self.health = health
        self.power = power

    def printMyself(self):
        print("I am a hero")

class Hero(Character):
    def __init__(self, health, power):
        super(Hero, self).__init__(health, power)
        
class Goblin(Character):
    pass

hero = Hero(5,10)
goblin = Goblin(4, 8)

print(hero.health)
print(goblin.health)
hero.printMyself()