
$(document).ready(function()
{
	// $("#works").click(function()
	// 	{	
 //    		$("#workslist").toggleClass("listA");
	// 	});

	$(".menu").click(function(event)
		{	
			var menuitem = event.target.id;
			$("#"+menuitem).toggleClass("menuA");
			$("#"+menuitem+"list").toggle();
		});

	$(".menuA").click(function(event)
		{	
			var menuitem = event.target.id;
			$("#"+menuitem).toggleClass("menu");
			$("#"+menuitem+"list").toggle();
		});



	$(".list").click(function()
		{
			$(".biobox").hide();
			$("#bio").attr("class","menu");	
					$("#slidetab").toggle();
		});



	$("#contact").click(function(event)
	{	
		$(".contactlinks").toggle();

	});

	$("#menubutton,#menubuttonforworks").click(function(event)
	{	
		$(".titleholder,.titleholderforworks").toggle();
		$("#menubutton,#menubuttonforworks").toggle();
			$(".biobox").toggle();
			$(".biobox2").hide();	
			$(".workholdhiderclass").attr("class","regworkhold");
			$(".infoholdhiderclass").attr("class","infoholder");
  			$("#scrollsignal").show();  
			$("#workhold").show();
			$("#infobox").show();
			$("#hidemenu").show();

	});

	$("#hidemenu").click(function(event)
	{	
		$(".titleholderforworks").toggle();
		$("#menubuttonforworks").toggle();		
		$("#hidemenu").toggle();

	});

	$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y >100) 
  {
  			$(".infoholder").hide();
  			$("#scrollsignal").hide();
			$(".regworkhold").show();


  }
  else
    {
    		$(".infoholder").show();
  			$("#scrollsignal").show();    		
			$(".regworkhold").hide();
    };
});

	

	$("#bio").click(function()
		{

			$(".biobox").toggle();
			$(".biobox2").show();			
			$("#workhold").hide();
			$(".titleholder,.titleholderforworks,#hidemenu,.infoholder").toggle();
			$("#menubutton,#menubuttonforworks").toggle();
			$(".regworkhold").attr("class","workholdhiderclass");
			$(".infoholder").attr("class","infoholdhiderclass");
			$('html,body').animate({scrollTop:0},0);
			$("#scrollsignal").hide();

		});

	// $(".collworks").click(function(event)
	// {	

	// 				var worker = event.target.id;
	// 		$("#"+worker).toggleClass("solowork");
	// 	$(".regworkhold").toggleClass("soloworkhold");
	// 	$(".collworks,.collworks2").toggle();
	// 		$("#"+worker).show();
	// });

	// $(".collworks2").click(function(event)
	// {	

	// 				var worker = event.target.id;
	// 		$("#"+worker).toggleClass("solowork");
	// 	$(".regworkhold").toggleClass("soloworkhold");
	// 	$(".collworks,.collworks2").toggle();
	// 		$("#"+worker).show();
	// });




	});