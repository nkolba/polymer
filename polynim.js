window.Polynim = function(template, obj){
	if (Polymer && obj && obj.is){
		//inject template here
		var t = null;
		if (template){
		   t = document.createElement("template");
		  	var tId = "t-" + obj.is;
  			t.setAttribute("id",tId);
  			t.innerHTML = template;
	  		document.body.appendChild(t);
	  		obj._template = t;
  		}

		Polymer(obj);
	}
};