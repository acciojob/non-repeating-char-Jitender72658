let givenString = prompt("Enter a string");

function firstNonRepeatingCharacter(string) {
	for(let i = 0;i<string.length;i++){
		if(string.lastIndexOf(string[i])==i){
			return string[i];
		}
	}	
}
alert(firstNonRepeatingCharacter(givenString));