function createTable() {
    //Write your code 
let rows= prompt("input number of rows");
let cols= prompt("input number of cols");

	for(let i=1;i<=rows;i++){
		let x= document.getElementById("MyTable").insertRow(i);
		for(let j=1;j<=cols;j++){
			var y=x.insertCell(j);
			y.innerText= "row" +i +","+ "col"+j;
		}
	}
  
}
