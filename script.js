var button = document.getElementById("Enter");
var ul = document.querySelector("ul");
var input = document.getElementById("userinput");


function inputLength(){
	return input.value.length;
}

function  createlist(){
	var li = document.createElement("li");
	
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.addEventListener("click", function(){
		var finished = this.classList.toggle("done");

		var removebutton = document.createElement("button");
		removebutton.classList.add("deletebutton");
		if(finished){
			removebutton.appendChild(document.createTextNode("Delete"));
			removebutton.classList = "deletebutton";
			li.appendChild(removebutton);

			removebutton.addEventListener("click", function(){
				this.parentElement.remove();
			})
		}else{
			this.getElementsByClassName("deletebutton")[0].remove();
		}
	})
	input.value="";
}

function additemAfterClick(){
	if(inputLength() > 0){
		createlist()
	}
}
function additemAfterPress(e){
	if(inputLength() > 0 && e.code === "Enter"){
		createlist();
	}
}

button.addEventListener("click", additemAfterClick);

input.addEventListener("keypress", additemAfterPress);


