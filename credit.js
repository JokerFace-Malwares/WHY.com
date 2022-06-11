function function_name() {
	var name = document.getElementById('name').value;
	var error = document.getElementById("error")
	if(name.length == 0){
		error.innerHTML = " Name is required"
	}
	else{
		if (name == "jayasri" || name == "k.jayasri") {
			alert("It is a special game for you please say only(yes or no)^_^ if you say no you can exit.")
			document.write("HI")
			var who = prompt("Are you Jayasri type yes or no(small)")
				if (who == "yes") {
					document.write("\nOK!", "\n")
					document.write("I want to say something ^_^")
					var shall = prompt("Shall i say that say(ok->yes, notOk->no)")
						if(shall == "yes" ){
						document.write("\n", "You look so,so,so... cute.If you feel any inconvinence iam so sorry")
						document.write("\n", "Iam an AI(artificial intelligence) developed by->AJ")


				}

			}
		}
		else{ 
			alert("Thanks for participating") 
	}
	}
}