list = []
jaime = "triste"
while jaime == "triste":
    item = input()
    if item == "exit":
        jaime = "contento"
    elif item == "-":
        del list[-1]
    else:
        list.append(item)
print(list)