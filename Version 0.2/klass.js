var tvaA = [];

function nyElev(namn) {
	var elev = {
		namn: namn,
		tid: "",
		func: function() {
			var date = new Date();
			var hour = date.getHours();
			var minutes = date.getMinutes();

			var time = hour+":"+minutes;
			return time;
		}	
	}
	tvaA.push(elev)
}


nyElev("Adam"); 
nyElev("Blerta"); 
nyElev("Christan"); 
nyElev("Daniella"); 
nyElev("Fredrik");
nyElev("Gabriella"); 
nyElev("Hans"); 
nyElev("Iris"); 
nyElev("Johanna"); 
nyElev("Kristina");
nyElev("Lars"); 
nyElev("Mahmoud"); 
nyElev("Niklas"); 
nyElev("Ove"); 
nyElev("Paola"); 
nyElev("Quazi"); 
nyElev("Rasmus"); 
nyElev("Sadia"); 
nyElev("Tova");
nyElev("Veronica"); 


 





