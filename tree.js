
function insert(treeNode, value){
	if(treeNode.value){
		if(treeNode.value < value) {
			insert(treeNode.right, value)
		} else {
			insert(treeNode.left, value)
		}
	} else {
		treeNode.value = value
		treeNode.right = {}
		treeNode.left = {}
	}
}

function preOrder(tree){
	let values = []
	
	function pre(treeNode){
		
		values.push(treeNode.value)
		
		if(Object.keys(treeNode.left).length != 0){
			pre(treeNode.left)
		}
		if(Object.keys(treeNode.right).length != 0){
			pre(treeNode.right)
			
		}
	}
	pre(tree)
	
	return values 
	
}

function inOrder(tree){
	let values = []
	
	function order(treeNode){
		if(Object.keys(treeNode.left).length != 0){
			order(treeNode.left)
		}
		
		values.push(treeNode.value)
		
		if(Object.keys(treeNode.right).length != 0){
			order(treeNode.right)
		}
	}
	order(tree)
	
	return values
}

function posOrder(tree){
	let values = []
	function pos(treeNode){
		if(Object.keys(treeNode.left).length != 0){
			pos(treeNode.left)
		}
		if(Object.keys(treeNode.right).length != 0){
			pos(treeNode.right)
		}
		
		values.push(treeNode.value)
		
	}
	pos(tree)
	return values
}

module.exports = { insert, preOrder, inOrder, posOrder}


