function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)){
        alert("You can only input numeric input!");
        return false;
    }    
    return true;
}

function onlyAlphabets(e, t) {
	try {
		if (window.event) {
			var input = window.event.keyCode;
		}
		else if (e) {
			var input = e.which;
		}
		else { return true; }
		if (((input > 64 && input < 91) || (input > 96 && input < 123)) || (input == 32 && input!= 0 ))
			return true;
		else
			alert("You can only enter alpha!");
			return false;
	}
	catch (err) {
		alert(err.Description);
	}
}

function AlphaNumOnly (e) {  // Accept only alpha numerics, no special characters 
    var regex = new RegExp("^[a-zA-Z0-9 ]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str) || (str == 32 && str!= 0 )) {
        return true;
    }
	else
		alert("You can only enter alpha and numbers!");
		e.preventDefault();
		return false;
}