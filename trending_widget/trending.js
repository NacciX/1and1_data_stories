var qr = [];

var create_img_element = function(number, targetId){
    //create the img element

    //add the image to a specific element

};




Sisense.connect('http://nacci.sisense.com').then(function(app) { // replace with your Sisense server address
        app.dashboards.load('5c912c7f5c5e5523f8352234').then(function(dash){ //replace with your dashboard id
		
		dash.widgets.get('5cc9c6cced386a13000a1bbc').container = document.getElementById("widget1"); //replace with one of your widgets' id.
		dash.refresh();
		
		
		
		var obj = dash.widgets.get('5cc9c6cced386a13000a1bbc').$$scope.widget;//.rawQueryResult);
		var qr = obj.rawQueryResult;
		setTimeout(function(){
			//console.log('hi');
			//console.log(dash.widgets.get('5cc9c6cced386a13000a1bbc').$$scope.widget);	 //do what you need here
			//console.log(dash.widgets.get('5cc9c6cced386a13000a1bbc').$$scope.widget.rawQueryResult);
			qr = dash.widgets.get('5cc9c6cced386a13000a1bbc').$$scope.widget.rawQueryResult;
			
			data = qr.values;
			
			//console.log(data);

			// make chart
			//top 5 
			console.log(data);
			var number = 2;
			    
			var listDiv = document.getElementById('table');
			
			for (var i = 0; i < data.length; ++i) {
			    //row
			    var tr=document.createElement('tr');
			    tr.setAttribute("id", "list_element_"+i);
			    //columns
			    var th=document.createElement('th');
			    th.align='right';
			    var text_length = data[i][0].text.length;
			    var clean_text = data[i][0].text.slice(8, text_length-1).replace(/-/g, " "); 
			    th.innerHTML = '<a align="center" href="https://www.1and1life.com'+data[i][0].text+'">'+clean_text+'</a>';   // Use innerHTML to set the text
			    tr.appendChild(th);                

			    //column 2
			    var th = document.createElement('th');

			    th.setAttribute("id", "image_"+i);
			    th.align = 'center';
			    for (var j=0; j < data[i][1].data; j++){
				var img = document.createElement('img');
				//set the source of the image
				img.src = 'fire.gif';
				img.height = '30';
				img.align = 'center';
				th.appendChild(img);
			    };
			    tr.appendChild(th);
			    listDiv.append(tr);
			    //create_img_element(i, 'li'+i);

			}
			//listDiv.appendChild(tr);    // Note here

		    }, 1000);
		
	    });
    });
