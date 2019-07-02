class Node:
  def __init__(self, x: int):
    '''Creates Node Value'''
    self.val = x
    self.next = None
  
  def __str__(self) -> None:
    return str(self.val)

class LinkedList:
  '''LinkedList Stores the head of a LinkedList'''
  def __init__(self, head: Node):
    self.head = head
  
  def append(self, value: int) -> None:
    current = self.head
    while current.next != None:
      current = current.next
    current.next = Node(value)
  
  def printVals(self) -> None:
    current = self.head
    while current != None:
      print(current)
      current = current.next

# Initializing Head of LinkedList
x = Node(1)
# Initializing LinkedList using x as the Head
linked = LinkedList(x)
# Appending random values into the LinkedList
for i in range(10):
  linked.append(i)

# Printing all the values of a LinkedList
linked.printVals()
