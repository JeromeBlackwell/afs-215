def PepsiCoke(num):
    if num < 3:
        print(str(num))
    elif num % 3 == 0 and num % 5 == 0:
        print("PepsiCoke")
    elif num % 3 == 0:
        print("Pepsi")
    elif num % 5 == 0:
        print("Coke")
          
PepsiCoke(1)
PepsiCoke(2)
PepsiCoke(3)
PepsiCoke(5)
PepsiCoke(6)
PepsiCoke(10)
PepsiCoke(15)

