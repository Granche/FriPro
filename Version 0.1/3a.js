var treA = [];

function nyElev(namn, enamn, klass, betyg) {
	var elev = {
		namn: namn,
		efternamn: enamn,
		klass: klass,
		betyg: betyg,
		tid: "",
		func: function() {
			var date = new Date();
			var hour = date.getHours();
			var minutes = date.getMinutes();

			var time = hour+":"+minutes;
			return time;
		}	
	}
	treA.push(elev)
}


nyElev("Adam", "", "3a", 5); 
nyElev("Blerta", "", "3a", 5); 
nyElev("Christian", "", "3a", 5); 
nyElev("Daniella", "", "3a", 5); 
nyElev("Erik", "", "3a", 5); 
nyElev("Frida", "", "3a", 5); 
nyElev("Gabriella", "", "3a", 5); 
nyElev("Hans", "", "3a", 5); 
nyElev("Iris", "", "3a", 5); 
nyElev("Johan", "", "3a", 5); 
nyElev("Klaudia", "", "3a", 5); 
nyElev("Lars", "", "3a", 5); 
nyElev("Maria", "", "3a", 5); 
nyElev("Niklas", "", "3a", 5); 
nyElev("Olof", "", "3a", 5); 
nyElev("Paula", "", "3a", 5); 
nyElev("Quazi", "", "3a", 5); 
nyElev("Rasmus", "", "3a", 5); 
nyElev("Sanna", "", "3a", 5); 
nyElev("Tova", "", "3a", 5); 
nyElev("Ulf", "", "3a", 5); 
nyElev("Veronica", "", "3a", 5); 


 





