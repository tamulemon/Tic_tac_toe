// build a table that contains the grid
window.onload = function Game() {
	this.board = document.getElementById("board")
	this.score = {O: 0, X: 0};
	
	this.winScenario = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
	
	this.O_array = [];
	this.X_array = [];
	
	this.totalMove = 0;
	
	this.currPlay = 'O'
	
	this.previousWinner = '';
	
// click handler
	this.clickHandler = function (e) {
		var clickedCell = e.target;
		clickedCell.setAttribute("class", "clicked");
		var cellId = clickedCell.getAttribute("id");
		this.totalMove += 1;
		this.currPlay = (this.currPlay === 'O' ? 'X' : 'O')
		clickedCell.firstChild.textContent = this.currPlay;
		if (this.currPlay === 'O') {
			this.O_array.push(Number(cellId));
		} else {
			this.X_array.push(Number(cellId));
		}
		console.log('this.O_array', this.O_array);
		console.log('this.X_array', this.X_array);
//		var x = document.getElementsByClassName("clicked");
//		console.log(typeof(x)); //object
//		for(var p = 0; p < x.length; p++) {
//			x[p].removeEventListener('click', clickHandler, false);
//			console.log(x[p]);
//		}
		clickedCell.removeEventListener('click', clickHandler, false);
	}.bind(this);
	
	//// create html element that are clickable
	var totalCount = 0;
	
//	var theHandler = clickHandler.bind(this); // when call function.bind(), actually a new function is returned. to remove an eventlistener
// the exact same function need to be removed. So if 	do	cell.addEventListener('click', clickHandler.bind(this), false), and in the clickHandler add
// clickedCell.removeEventListener('click', clickHandler, false), will not work because they are not pointing to the same function
// to simplify it, bind(this) was added directly to the this.clickHandler, so when eventHandler is passed to 'click', no bind(this) will need to be used
// so can simply call clickHandler to remove it. Or save  clickHandler.bind(this) to a new variable and use this to add and remove event listener
	
	for(var i = 0; i < 3; i++) {
		var row = document.createElement("tr");
		this.board.appendChild(row);
		for (var j = 0; j <3; j ++) {
			var cell = document.createElement("td");
			totalCount ++;
			cell.width = cell.height = 50;
			cell.align = cell.valign = 'center';
			cell.addEventListener('click', clickHandler, false);
			cell.appendChild(document.createTextNode(''));
			cell.setAttribute("id", totalCount);
			row.appendChild(cell);
		}
	};

}
