window.Polynim = function(template, obj){
	if (Polymer && obj && obj.is){
		//inject template here
		var t = null;
		if (template){
			var tId = "t-" + obj.is;
			t = document.querySelector("template#" + tId);
			if (!t){
			   	t = document.createElement("template");				  	
  				t.setAttribute("id",tId);
  				t.innerHTML = template;
	  			document.body.appendChild(t);
	  		}
	  		obj._template = t;
  		}

		Polymer(obj);
	}
};