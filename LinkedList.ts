

class LinkedNode {

  value: number;
  next: LinkedNode | null;
  constructor(value: number){
    this.value = value;
    this.next = null;
  }

  text(): string{
    return this.value.toString();
  }

}

class LinkedList{

  head: LinkedNode;
  constructor(head: LinkedNode){
    this.head = head;
  }

  append(value: number){
    let current = this.head;
    while (current.next != null){
      current = current.next
    }
    current.next = new LinkedNode(value)
  }

  print(){
    let current = this.head;
    while(current !== null){
      console.log(current.text())
    }
  }

}

let x = new LinkedNode(1);
let linked = new LinkedList(x);

for (var _i = 0; _i <= 10; _i++) { 
  linked.append(_i);
}

linked.print();

