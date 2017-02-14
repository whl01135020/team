// JavaScript Document
function xuanxiang(obj,obj2){
   		

   		for(var i=0;i<obj2.length;i++)
   		{
   			obj2[i].index=i;
   		};
   		for(var i=0;i<obj2.length;i++)
   		{
   			
   			obj2[i].onmouseover=function(){
				
				for(var i=0;i<obj2.length;i++)
				{
					obj[i].style.display='none';	
				}
				
   				var a=this.index;
   				obj[a].style.display='block';
   		}
   		}
}// JavaScript Document