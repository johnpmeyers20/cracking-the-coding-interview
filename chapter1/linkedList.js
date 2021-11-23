let link = null;

let node = {
  value: null,
  next: null
};

const createNode = value => {
  return {
    value: value,
    next: null
  }
}

const four = createNode(4);
const three = createNode(3);
const two = createNode(2);
const one = createNode(1);

four.next = three;
three.next = two;
two.next = one;

console.log(four);

const printList = list => {
  let current = list;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

printList(four);
printList(two);
printList(null);