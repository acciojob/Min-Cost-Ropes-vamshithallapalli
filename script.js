function mincost(arr)
{ 
	if(arr.length === 1) return 0;

	let heap = [...arr];
	heap.sort((a,b) => a-b);

	let cost = 0;

	while(heap.length > 1){
		let first = heap.shift();
		let second = heap.shift();

		let newRope = first + second;
        cost += newRope;

		heap.push(newRope);

		heap.sort((a,b) => a-b);
		
	}
	return cost;
}

module.exports=mincost;
