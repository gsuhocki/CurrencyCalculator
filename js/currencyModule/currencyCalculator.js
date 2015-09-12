
//This function creates a movie with the parameters that have been passed in.
function CurrencyCalculatorFactor(){
	var currencyCalculator = new Object ();
	currencyCalculator.currencyObjectcollection=[];

	currencyCalculator.RequestData = function(url) {
			var request = new XMLHttpRequest();
 			request.open('GET', url);
 			request.onreadystatechange = function(){
 				if ((request.status==200)&&(request.readyState==4)){
 				var dataJSON = JSON.parse(request.responseText;
 				for(key in dataJSON){
 					console.log(key + "value" + dataJSON[key].USD)
 				}

	}

}	
	request.send();
}
	currencyCalculator.convert = function(value){

	}

	currencyCalculator.display = function(){
}

	currencyCalculator.RequestData ("http://coinabul.com/api.php")
}
 /**
 *This function grabs the JSON and parses it to an object.
 **/
CurrencyCalculatorFactor();

