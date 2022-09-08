let countSheep = (num) => {
	let sheepString = ''
	for(let i=0; i<num; i++) {
		sheepString += `${i+1} sheep...`
	}
	
	return sheepString
}