class List:
  def __init__(self):
    self.list = []
  def append(self, data):
    self.list.append(data)
  def __str__(self):       
    myStr = ""        
    for item in self.list:             
      myStr += str(item)+ " "        
    return myStr
list = List()
list.append(3)
list.append('3')
myCar = {
  "brand": "Chris Craft",
  "model": "Commander 42",
  "year": 2017
}
list.append(myCar)
Car = (2023, "Fisker", "Ocean One", "Stealth Green")
list.append(Car)
print(list)