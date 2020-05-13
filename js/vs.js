
$(document).ready(function()
{
	// so you only have to change the navigation on all pages in one spot!!!!
		var massmenu="<p id='title'><a href='index.html'>VISUAL SYSTEM</a></p><p id='who'>chico quizon</p><div id='menuholder'><p class='menu' id='works'>works</p><p class='list' id='workslist'><a href='collezione.html'>COLLEZIONE X CHICO</a></br><a href='rsf.html'>ROBOT SCANS FLOWER</a></br><a href='hypervisual.html'>HYPERVISUAL</a></br><a target='_blank' href='http://visualsystem.info/ar7/'>pjt-Ar7</a></br><a target='_blank' href='http://visualsystem.info/jcas3/'>pjt-Jcas3</a></br> <a href='mw.html'>Motion Works</a></br></p><p class='menu' id='journal'>journal</p><p class='list' id='journallist'><a href='https://entries.visualsystem.info/' >Entries</a></br><a href='http://blog.visualsystem.info/'>Visual Blog</a></br></p><p class='menuBIO' id='bio'>bio</p><p class='singlechoice' id='resume'><a href='resume1.pdf' target='_blank'>resume</a></p><p class='menu' id='contact'>contact</p><a href='http://visualsystem.info/contactform.php'><p  class='contactlinks' id='email' >EMAIL</p></a><a href='https://www.instagram.com/chico_works/' target='_blank'><p  class='contactlinks' id='insta' >INSTAGRAM</p></a><p id='hidemenu'>__</p></div>"
				$(".titleholderforworks,.titleholder").html(massmenu);

		var aboutme = "<p>Chico Quizon was born and raised in Quezon City,Philippines in 1978. At the age of 10, he and his family immigrated to Alabama, USA. He grew up hoping to draw graphic novels and idolizing greats such as Jim Lee and Whilce Portacio.  He became interested in the Fine Arts when his sister brought home a library copy of Philip Rawson's book 'Drawing'.  From it, he learned the foundational elements of his technical and theoretical understanding of drawing.  Rawson's ideas exposed him to the expressive possibilities of drawing. He plucked the names of the artists used by Rawson in his examples and delved into the masterworks of Michelangelo, Matisse, Picasso, and Dali. His tireless study and practice earned him one of the only two art scholarships awarded to incoming freshmen at the University of Alabama.  As a Studio Art major, he was introduced to Marcel Duchamp's Readymades which expanded Chico's idea of what constitutes a work of art. His belief in the artistic relevance of infographics sprang from here. In his junior year, he declined another art scholarship to move to New York City so he can pursue his artistic ambitions.At Hunter College, he would be influenced by the work of Edward Tufte (American pioneer and statistician in data visualization) and the art of informational design.Chico's exploration of Tufte's work and continued belief in the artistic possibilities of design would lead him to learn and utilize digital techniques. He finished his studies at Hunter College in 2004, graduating with a Bachelor's Degree in Studio Art.The following years would found him continuing to expand his artistic skills and ideas. While freelancing as a graphic designer and working as a night audit manager, Chico also found himself working as an independent film director, web coder and designer, and even as an emergency medical technician! These various experiences have all found their way into projects that led to a show at his former college and a spot at a Film Festival. His art has evolved with his use of digital tools to compose, process, and enlarge his initial sketches to produce a unique handmade mixed media work. Chico engages his viewers with the familiarity of visual elements rooted in utilitarian graphics while challenging them by re-contextualizing those graphics as art. The mystery for his audience is not in deciphering the images but what lies within the intricacies of how his audience is assembling the various elements of the image and how the visual system functions as it is exploding while simultaneously unifying the image. His works ask the audience if they are viewing information or decoration, functionality or art?</p>"
				$("#biostatement").html(aboutme);
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



	$("#bio").click(function(event)
		{
			$(".biobox").toggle();
			$(".biobox2").show();			
			$(".titleholder,.titleholderforworks,#hidemenu").toggle();
			$("#menubutton,#menubuttonforworks").toggle();
			$('html,body').animate({scrollTop:0},0);
			$(".regworkhold2,.infoholder2,.inviteholder,.mwmenu,.coded").hide();
			$('#workopener2,#infopener2,#inviteopener2,#mwmenuopener').show();
			$('body').css('overflow-y','scroll');

		});


	// __________menu system for mworks page
	$('#mwbod').click(function(event)
		{
			$('.mwmenu').show();
			$('.coded,.gifwork').hide();
			$(this).hide();
		});

	$('.mworkgifs').click(function(event)
		{
			tag = event.target.id
			$('.mwmenu').hide();
			$('#'+tag+'A').show();
			$('#mwbod').show();
		});
	$('.mwork').click(function(event)
		{
			tag = event.target.id
			$('.mwmenu').hide();
			$('#'+tag+'A').show();
			$('#mwbod').show();
		});

	$('#mwmenuopener').click(function(event)
		{
						$('.mwmenu').show();
						$(".biobox2,#mwbod").hide();
						$(this).hide();
		});

	});