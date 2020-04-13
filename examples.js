const { insert, preOrder, inOrder, posOrder } = require('./tree') 

const tree = {}

insert(tree, 8)
insert(tree, 3)
insert(tree, 10)
insert(tree, 6)
insert(tree, 4)
insert(tree, 7)
insert(tree, 14)
insert(tree, 13)
insert(tree, 1)


console.log("PreOrder")
let resultPre = preOrder(tree)
console.log(`Array: ${resultPre}`)


console.log("inOrder")
let resultIn = inOrder(tree)
console.log(`Array: ${resultIn}`)

console.log("posOrder")
let resultPos = posOrder(tree)
console.log(`Array: ${resultPos}`)

