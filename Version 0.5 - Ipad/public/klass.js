var ettBTva = [];

function nyElev(namn) {
	var elev = {
		namn: namn,
		tid: "",
		intid: "",
		uttid: "",
		aktivitet: "",
		klass: false,
		vegetarian: false,
		allergisk: false,
		flaskfri: false,
		state : null,
		
		intime: function() {

			var x = prompt("När ska "+elev.namn+" hem?")     			
			if(x === null) {										
				elev.tid = x;
			} else { 
				elev.tid = x
				elev.intid = elev.outtime();											
			}
			return elev.tid;
		},

		outtime: function() {

			var date = new Date();
			var hour = date.getHours();
			var minutes = date.getMinutes();
			var time = hour+":"+minutes;
			elev.uttid = time;
			return time;
		},

		frame: function() {
			
			var div = document.createElement("div");
			div.style.backgroundColor = "red";
			div.innerHTML = elev.namn;
			div.className = "draggable drag-drop";
			div.id = "yes-drop";
			klass.appendChild(div);
			
			return div
		}
		
	}
	ettBTva.push(elev)
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




