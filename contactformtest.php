
<?php

	if ($_POST["submit"]) {

					$emailTO="mjwedding@visualsystem.info";
					$subject=$_POST['subject'];
					$body=$_POST['body'];
					$headers=$_POST['email'];
					$emailTO2=$_POST['email'];
					if(!$_POST['email']){
						$error.= "<p class='messages'>Please include an Email address.</p>";
					}
					if(!$_POST['body']){
						$error.= "<p class='messages'>Please Leave a Message.</p>";
					}
					if (!$_POST['email']!=" " AND !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
					{
						$error.="<p class='messages'>PLEASE ENTER VALID EMAIL ADDRESS</p>";
					} 
					else{
						mail($emailTO,$subject,$body, $headers);
						mail($emailTO2,$subject,$body, $headers);
						$result="<div id='confirmbox'style='height:100%;width:100%; background-color: white;text-align: center;position:absolute;'><p class='messages2'>Thanks for your response we have notified Maria and Jamie on ".date('l')." ".date('m/d/Y')." at ".date("h:i")." that<br>".$body."<br>If you would like to ammend your details do not refresh this window; click the reset button and reenter the correct information. </p><br>
							<input id='submit3' type='submit' name='submit' class='button' value='Reset'/></div>";

						};

	} 
?>

<!doctype html>
<html>
	<head>
	<title>RSVP FORM</title>

	<meta charset="utf-8" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="vs.css">
			<link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet">

	<style>

	</style>


	</head>

		<body>
			<?php echo $result; ?>	
			<div id="maincarrier">
				<p>
					RSVP<span>FORM</span>
				</p>
				<form id="form" method="post">	
							

				<div>
					<input id="emailer" class="form" type="text" name ="email" placeholder="Your Email"value="<?php echo $_POST['email'] ?>"><br>	
					<input id="subject"  class="form" type="text" name ="subject" placeholder="Name"value=""><br>		
					<input id="party" style="height:1vw;width:15%; background-color: white;text-align: center;" class="form" type="text" name ="party" placeholder="No.in party"value=""><br>		
					<textarea id="messagebox"style="display:none;"class="form" name="body"><?php echo $_POST['body'];?></textarea>
				</div>
				<p id='rsvpdata' style="display:none;" class='messages2'></p><br>

				<input id="submit" type="submit" name="submit" class="button" value="YES"/>
				<input id="submit2" type="submit" name="submit" class="button" value="No"/>

				</form>

	<script>

		$("#submit").click(function()
		{
					var dudes = $('#party').val();
			$('#messagebox').val($('#subject').val()+' will be attending and will be a party of '+ dudes); 
			$('#subject').val('Confirmed! '+ $('#subject').val()+' has responded to the Collins + Quizon wedding RSVP');
			$('#subject').val('Confirmed! '+ $('#subject').val()+' has responded to the Collins + Quizon wedding RSVP');
		});
				$("#submit2").click(function()
		{
			$('#messagebox').val('Sadly! '+ $('#messagebox').val()+$('#subject').val()+' cannot make it'); 
			$('#subject').val($('#subject').val()+' will not be attending');
		});
		$("#submit3").click(function()
		{ 
			$('input[name=email').val('');
			$('textarea[name=body').val('');	
			$('#confirmbox').hide();	
		});
	</script>


		</body>
</html>