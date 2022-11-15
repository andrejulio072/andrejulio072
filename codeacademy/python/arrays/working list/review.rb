inventory = ["twin bed", "twin bed", "headboard", "queen bed", "king bed", "dresser", "dresser", "table", "table", "nightstand", "nightstand", "king bed", "king bed", "twin bed", "twin bed", "sheets", "sheets", "pillow", "pillow"]

inventory_len = len(inventory)
print(inventory_len)

first = inventory[1]
print(first)

last = inventory[-1]
print(last)

inventory_2_6 = inventory[2:6]
print(inventory_2_6)

first_3 = inventory[:3]
print(first_3)

twin_beds = inventory.count("twin bed")
print(twin_beds)

# Checkpoint 7
removed_item = inventory.pop(4)

# Checkpoint 8
inventory.insert(10, "19th Century Bed Frame")

#Checkpoint 9
inventory.sort()
print(inventory)
