
$(document).ready(function()
{
	
		$(".iconclass").click(function()
			{

				$("#iconholder").attr("id","iconholderB");								
				$(".subiconholder").attr("class","subiconholderB");
				$(".iconclass").attr("class","iconclassB");
				$(".navtitles").hide();
				$("#handicon").attr("id","handiconB");	
			});

		$("#motionicon").click(function()
			{
				$(".tableclass").hide();
				$("#MOTIONtableofcontents").show();
				$("#title").text("MOT'IN");
			});

		$("#codeicon").click(function()
			{
				$(".tableclass").hide();
				$("#CODEtableofcontents").show();
				$("#title").text("C'DE");
			});

		$("#handicon").click(function()
			{
				$(".tableclass").hide();
				$("#ENTRIEStableofcontents").show();
				$("#title").text("EXPRM'T");
			});

		$("#allicon").click(function()
		{
			$(".tableclass").hide();
			$("#ALLtableofcontents").show();
			$("#title").text("ALL");
		});

		$("#digitalicon").click(function()
		{
			$(".tableclass").hide();
			$("#DIGITALtableofcontents").show();
			$("#title").text("DIGT'L");
		});		

	// code for laocoon
		setInterval(function clocker()
		{
			var month = [
			  "January",
			"February",
			"March",
			"April",
			 "May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"];

			var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat",]
			var currentTime = new Date ( );
			var td = currentTime.getDate();
			var tm = currentTime.getMonth();
			var ty = currentTime.getFullYear();
			var tdy = currentTime.getDay();
			var th = currentTime.getHours();
			var tmt = currentTime.getMinutes();
			var ts = currentTime.getSeconds();
			var n = currentTime.getMilliseconds();
			var tmm = currentTime.getTime();
			var monthL = month[tm]
			var day = day[tdy]
			var browser = "BROWSER// "+ navigator.appName + " "+navigator.appCodeName;
			var timelist = td +" "+" "+ty+" "+" "+ th +" ' "+ tmt +" '' "+ ts+ " ''' "+n+"*";
			$(".dater").html(timelist);
			$("#skulltime").html("."+n)
		},1);


	//contact form code 
		$("#emailactivate").click(function()
		{
			$("#emailformcontain").show();
		});		

		$('#emailform').on('keyup keypress', function(e) 
		{
		  var keyCode = e.keyCode || e.which;
		  if (keyCode === 13) 
			  { 
			    e.preventDefault();
			    return false;
			  }
		});


		$("#skullbutt1").click(function()
			{
				$(".skullpattern").attr("class","skullpattern2");
				$("#basemask").attr("id","basemask2");
				$("#wiremask").attr("id","wiremask1");
				$("#wiremask2").attr("id","wiremask1");				
				$("#pinkskull").attr("id","pinkskullB");
				$("#pinkskullC").attr("id","pinkskullB");
				$("#arrowsC").attr("id","arrowsB");
				$("#arrows").attr("id","arrowsB");				
				$("#blinker").attr("id","blinker0");
				$(".skullpattern3").attr("class","skullpattern2");
				$("#basemask3").attr("id","basemask2");	
								$("#wiremask2").attr("id","wiremask");
				$("#mographbox2").attr("id","mographbox2a");
				$("#mographbox3").attr("id","mographbox3a");
				$("#mographbox3b").attr("id","mographbox3a");
				$("#morect2").attr("id","morect2a");
				$("#morect3").attr("id","morect3a");
				$("#morect3b").attr("id","morect3a");
				$("#teeth").fadeIn(1000);	
				$("#positnumber").text("02");
				$(".skullbuttonA").attr("class","skullbuttonA1");
				$(".skullbuttonB").attr("class","skullbuttonB1");
				$(".skullbuttonB2").attr("class","skullbuttonB1");
				$(".skullbuttonC").attr("class","skullbuttonC1");	
				$(".skullbuttonC1").attr("class","skullbuttonC2");	
				$(this).hide();
				$("#skullbutt3").show();	
				$("#bluebars").hide();
				$("#skulltime").hide();	
				$("#skullprogbar").hide();	
				$("#skullwarning").hide();	
			});

		$("#skullbutt2").click(function()
			{
				$(".skullpattern2").attr("class","skullpattern");
				$("#basemask2").attr("id","basemask");	
				$("#wiremask2").attr("id","wiremask");
				$("#wiremask1").attr("id","wiremask");
				$("#pinkskullC").attr("id","pinkskull");
				$("#arrowsC").attr("id","arrows");	
				$("#pinkskullB").attr("id","pinkskull");
				$("#arrowsB").attr("id","arrows");					
				$("#blinker0").attr("id","blinker");
				$(".skullpattern3").attr("class","skullpattern");
				$("#basemask3").attr("id","basemask");
				$("#mographbox2a").attr("id","mographbox2");
				$("#mographbox3a").attr("id","mographbox3");
				$("#mographbox2b").attr("id","mographbox2");
				$("#mographbox3b").attr("id","mographbox3");
				$("#morect2a").attr("id","morect2");
				$("#morect3a").attr("id","morect3");
				$("#morect2b").attr("id","morect2");
				$("#morect3b").attr("id","morect3");
				$("#teeth").fadeOut(1000);	
				$("#positnumber").text("01");
				$(".skullbuttonA1").attr("class","skullbuttonA");
				$(".skullbuttonA2").attr("class","skullbuttonA");	
				$(".skullbuttonB1").attr("class","skullbuttonB2");
				$(".skullbuttonC1").attr("class","skullbuttonC");
				$(".skullbuttonC2").attr("class","skullbuttonC");
				$("#skullbutt1").show();
				$("#bluebars").hide();
				$("#skulltime").hide();
				$("#skullprogbar").hide();
				$("#skullwarning").hide();
			});

				$("#skullbutt3").click(function()
			{
				$(".skullpattern2").attr("class","skullpattern3");
				$("#basemask2").attr("id","basemask3");	
				$("#pinkskullB").attr("id","pinkskullC");
				$("#arrowsB").attr("id","arrowsC");					
				$("#wiremask1").attr("id","wiremask2");
				$("#mographbox2").attr("id","mographbox2a");
				$("#mographbox3a").attr("id","mographbox3b");
				$("#morect2").attr("id","morect2a");
				$("#morect3a").attr("id","morect3b");
				$("#teeth").fadeOut(1000);		
				$("#positnumber").text("03");
				$(".skullbuttonA1").attr("class","skullbuttonA2");	
				$(this).hide();	
				$("#skullbutt1").show();
				$("#bluebars").show();
				$("#skullprogbar").show();
				$("#skulltime").show();
				$("#skullwarning").show();
			});

	// scaler for digital page

		$(".imageholder").click(function()
			{
				$(this).toggleClass("imageholderL");

			});
	});