
$(document).ready(function()
{

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
				$("#hidemenu").toggle();
	});

	$("#hidemenu").click(function(event)
	{	
		$(".titleholderforworks").toggle();
		$("#menubuttonforworks").toggle();		
		$("#hidemenu").toggle();

	});

	$('#workopener,#workopener2').click(function(event)
	{
		$('.biobox2').hide();
		$(this).hide();
		$('.inviteholder').hide();
		$('.regworkhold2').show();
		$('.infoholder2').hide();
		$('#inviteopener2,#infopener2').show();

	});
		$('.inviteholder').click(function(event)
	{
		$('.biobox2').hide();
		$(this).hide();
		$('.inviteholder,#workopener2').hide();
		$('.regworkhold2').show();
		$('.infoholder2').hide();
		$('#inviteopener2,#infopener2').show();

	});

	$('#infopener,#infopener2').click(function(event)
	{
		$('.biobox2').hide();
		$(this).hide();
		$('.inviteholder').hide();
		$('.infoholder2').show();
		$('.regworkhold2').hide();
		$('#inviteopener2,#workopener2').show();
	});

	$('#inviteopener,#inviteopener2').click(function(event)
	{
		$('.biobox2').hide();
		$(this).hide();
		$('.inviteholder').show();
		$('.infoholder2').hide();
		$('.regworkhold2').hide();
		$('#workopener2,#infopener2').show();		
	});

	$('#mwmenuopener').click(function(event)
		{
						$('.mwmenu').show();
						$(".biobox2").hide();
						$(this).hide();
		});

	$("#bio").click(function(event)
		{
			$(".biobox").toggle();
			$(".biobox2").show();			
			$(".titleholder,.titleholderforworks,#hidemenu").toggle();
			$("#menubutton,#menubuttonforworks").toggle();
			$('html,body').animate({scrollTop:0},0);
			$(".regworkhold2,.infoholder2,.inviteholder,.mwmenu,.mwork,.coded").hide();
			$('#workopener2,#infopener2,#inviteopener2,#mwmenuopener').show();

		});


	// __________menu system for mworks page
	$('#mwbod').click(function(event)
		{
			$('.mwmenu').show();
			$('.coded,.mwork').hide();
			$(this).hide();
		});


	$('.mwchoose').click(function(event)
		{
			mw = event.target.id
			console.log(mw);
			$('#'+mw+'work').show();
			$('.mwmenu').hide();
			$('#mwbod').show();
			$('body').css('overflow-y','scroll')


		});


			$('#all').click(function(event)
				{
					$(".mwork,.coded").show();
				});





	});