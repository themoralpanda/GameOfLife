var height,width;
var value_dict = {};
var temp_dict = {};
var backup_dict = {};

var previous_iterations_count = 0;
var next_iterations_count = 0;



function ButtonLoader(a,b){
	window.height = a;
	window.width = b;
	var btn_grp_constructor ="";
	var temp;
	for(var i=0;i<a;i++)
	{
		for(var j=0;j<b;j++)
		{
			temp = "btn"+i+j;
			btn_grp_constructor+="<button id='"+temp+"' onclick='ButtonActivate(event)' class='button_config'></button>";
			value_dict[temp] = "dead";
			temp_dict[temp] = "dead";
			backup_dict[temp] = "dead";
		}
		btn_grp_constructor+="</br>";
							
	}	
	btn_grp_constructor+="</br><button onclick='Clear();' id='clear' class='btn btn-inverse' type='button'><span style='font-family:Flavors;font-size:25px;' >CLEAR</span></button>"
	//console.log(btn_grp_constructor);
    console.log(value_dict);
	document.getElementById('div1').innerHTML = btn_grp_constructor;
}

function ButtonActivate(event){

	var a = event.target;
	value_dict[a.id] = "alive";
	a = '#'+a.id;
	//alert($(a).css('background-color'));
	$(a).addClass("ButtonClicked");


	//alert($(a).css('background-color'));
	
	
	}

function Clear(){
	var i,j,id;
	$('#btn11').siblings().removeClass("ButtonClicked");
	$('#btn11').removeClass("ButtonClicked");
	}


function Clear_Cache()
{
	//Clears entire Cache.
	for(i=0;i<height;i++)
		for(j=0;j<width;j++)
		{
			id=Form_Id(i,j);
			value_dict[id]=temp_dict[id]="dead";
		}
}

function NextGen(){
	console.log(value_dict);
	console.log('height is' +height);
	console.log('width is '+width);
	for(var i=0;i<height;i++)
	{
		for(var j=0;j<width;j++)
		{
			var current = Form_Id(i,j);

			//var current_status = Check_Status(i,j) ;
			//console.log("Status of "+current+" is "+value_dict[current]);
			var count_neighbour = Neighbour_Check(current);
			console.log(temp_dict[current] + "in the beginning");
			if(value_dict[current] == 'alive')
			{
				console.log("inside alive part");
				if(count_neighbour < 2 )
						temp_dict[current] = "dies"
			    if(count_neighbour == 2 || count_neighbour == 3)
						temp_dict[current] = "alive"
				if(count_neighbour > 3) 
						temp_dict[current] = "dies"
					 	
	
			}
			else{
				console.log("inside dead part");
				if(count_neighbour == 3)
					temp_dict[current] = "alive";
			}
			console.log(temp_dict[current] + "in the end");

           

		}
	}
	
	Transform();
}


//function to check if an element with id equal to '#btn+i+j' is alive or not !
function Check_Status(i,j){
	var id = Form_Id(i,j);
	return (value_dict[id]);
	
}

//function to form id of the pattern '#btn'+i+j with the given i and j values
function Form_Id(i,j){

	return "btn"+i+j;
}


//function to count the number of live neighbours!
function Neighbour_Check(current){
	
	var i = Number(current.charAt(3));
	var j = Number(current.charAt(4));
	
	var a1 = i-1, a2 = i+1;
	var b1 = j-1 ,b2 = j+1;
	var count =0;
    
    //Checking the status of the Neighbours
    
    if($('#'+Form_Id(a1,b1)))
    {
    	console.log('inside 1');
	    if(Check_Status(a1,b1) == "alive")
	    	count++;  
	}

	if($('#'+Form_Id(a1,j)))
    {
    	console.log('inside 2');
	    if(Check_Status(a1,j) == "alive")
    		count++;
	}

	if($('#'+Form_Id(a1,b2)))	
    {
    	console.log('inside 3');
	    if(Check_Status(a1,b2) == "alive")
	    	count++;
	}

	if($('#'+Form_Id(i,b1)))
    {
    	console.log('inside 4');
	    if(Check_Status(i,b1) == "alive")
    		count++;
    }
    	
    if($('#'+Form_Id(i,b2)))
    {
    	console.log('inside 5');
	    if(Check_Status(i,b2) == "alive")
    		count++;
    }	
    
    if($('#'+Form_Id(a2,b1)))
    {
    	console.log('inside 6');
    	if(Check_Status(a2,b1) == "alive")
    		count++;
    }	
    
    if($('#'+Form_Id(a2,j)))
    {
    	console.log('inside 7');
	    if(Check_Status(a2,j) == "alive")
    		count++;
    }	
    
    if($('#'+Form_Id(a2,b2)))
    {
    	console.log('inside 8');
	    if(Check_Status(a2,b2) == "alive")
    		count++;
    }	

    
    console.log('count of live neighbours for '+current+' is '+count);
    return count;

}

//Function to transform the element based on analysis
function Transform(){
	//console.log('status for '+id+' is '+status);
	Clear();
	console.log(temp_dict);
	console.log(value_dict);
	var id;
	for(var i =0;i<height;i++)
		for(var j=0;j<width;j++)
		{
		    id = Form_Id(i,j);
			if(temp_dict[id] == "alive")
			{
				
				$('#'+id).addClass("ButtonClicked");
			}

		}

}	

function PreviousGeneration()
{
   
   
   previous_iterations_count++;	
   var id,temp1;
	for(var i =0;i<height;i++)
		for(var j=0;j<width;j++)
		{
			id = Form_Id(i,j);
			temp1 = temp_dict[id];
			temp_dict[id] = value_dict[id]; 
			value_dict[id] = temp1;
		}

	 	Clear();
	 	Transform();
	 	
	
}

function NextGeneration()
{
	var i,j,id;
	if(next_iterations_count == 0)
	{
		if(isPanelEmpty_Check() == true)
		{
			alert("Dude ! Choose a pattern to continue !");
		}
		else{
			next_iterations_count++;
			NextGen();
			
		}
    	
	}
	else{
		if(isPanelEmpty_Check() == true)
			{
				alert("Dude ! Choose a pattern to continue !");
			}
			else{

				
						
				next_iterations_count++;

				Backup_Pattern();

				for(i =0;i<height;i++)
				{
					for(j=0;j<width;j++)
					{
						id = Form_Id(i,j);
						value_dict[id] = temp_dict[id];
						temp_dict[id]=backup_dict[id];
					}
				}
				
				
				 console.log("data after interchange");
				 console.log("value_dict");
				 console.log(value_dict);
				 console.log("temp_dict");
				 console.log(temp_dict);


				 	NextGen();
	 		}	
	}

}


function isPanelEmpty_Check()
{
	var i,j;
	outerloop:
		for(i =0;i<height;i++)
		{
			for(j=0;j<width;j++)
			{
				if($('#'+Form_Id(i,j)).css('background-color') == "rgb(0, 0, 0)")
					{
						return false;
					}
			}
		}
	return true;

}

function Backup_Pattern()
{
 var i,j, id;
 for(i =0;i<height;i++)
	{
		for(j=0;j<width;j++)
		{
			id = Form_Id(i,j);
			backup_dict[id] = value_dict[id];
			
		}
	}	

}









 


