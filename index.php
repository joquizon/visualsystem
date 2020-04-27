<?php
if ($_POST["submit"]) 
	{
		if (!$_POST['name']) 
		{
		$error="<br />enter your name";
		}	
		if (!$_POST['message']) 
		{
		$error.="<br />enter a comment";
		}
		if (!$_POST['email']) 
		{
			$error.="<br />enter your email address";
		}
		if ($_POST['email']!="" AND !filter_var($_POST['email'],
		FILTER_VALIDATE_EMAIL)) {
		$error.="<br />enter a valid email address";
		}
		if ($error) 
		{
		$result='<p><strong>PLEASE:</strong>'.$error.'</p>';
		} 
		else 
		{
			if (mail("josequizon@hotmail.com", "Comment from website!", "Name: ".
			$_POST['name']."
			Email: ".$_POST['email']."
			Comment: ".$_POST['message'])) 
				{
					$result='<p><strong>Thank you!</strong> I\'ll be in touch.</p>';
				} 
			else 
				{
					$result='<p>Sorry, there was
					an error sending your message. Please try again later.</p>';
				}
		}	
	}
?>


<!-- write jquery for submit button clearing fields when  name field when submit butt click -->
	 	


<!doctype html>
<html>
	<head>
		<link rel="stylesheet" href="dtype9.css">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
		<script src="dtype.js"></script>
	</head>
		<body>
			<div id="titleholder">
				<p id="title">
					DOC'T 9
				</p>

				<svg id="logo" x="0px" y="0px" viewBox="0 0 123 106.877" xml:space="preserve">
					<g i:extraneous="self">
						<polygon fill="#0C0C15" points="123,106.161 61.5,106.521 0,106.877 30.439,53.438 60.877,0 91.939,53.082 		"/>
						<path fill="#FFFFFF" d="M46.958,49.616c3.062,0,5.545,2.63,5.545,5.874c0,3.248-2.483,5.875-5.545,5.875
							c-3.065,0-5.547-2.627-5.547-5.875C41.411,52.246,43.893,49.616,46.958,49.616z"/>
						<path fill="#FFFFFF" d="M60.869,49.616c3.063,0,5.547,2.63,5.547,5.874c0,3.248-2.484,5.875-5.547,5.875
							c-3.063,0-5.545-2.627-5.545-5.875C55.324,52.246,57.806,49.616,60.869,49.616z"/>
						<path fill="#FFFFFF" d="M74.782,49.616c3.063,0,5.546,2.63,5.546,5.874c0,3.248-2.482,5.875-5.546,5.875s-5.546-2.627-5.546-5.875
							C69.236,52.246,71.719,49.616,74.782,49.616z"/>
						<path fill="#FFFFFF" d="M46.958,64.323c3.062,0,5.545,2.628,5.545,5.873c0,3.249-2.483,5.877-5.545,5.877
							c-3.065,0-5.547-2.628-5.547-5.877C41.411,66.951,43.893,64.323,46.958,64.323z"/>
						<path fill="#FFFFFF" d="M60.869,64.323c3.063,0,5.547,2.628,5.547,5.873c0,3.249-2.484,5.877-5.547,5.877
							c-3.063,0-5.545-2.628-5.545-5.877C55.324,66.951,57.806,64.323,60.869,64.323z"/>
						<path fill="#FFFFFF" d="M74.782,64.323c3.063,0,5.546,2.628,5.546,5.873c0,3.249-2.482,5.877-5.546,5.877
							s-5.546-2.628-5.546-5.877C69.236,66.951,71.719,64.323,74.782,64.323z"/>
						<path fill="#FFFFFF" d="M46.958,79.032c3.062,0,5.545,2.627,5.545,5.871c0,3.248-2.483,5.878-5.545,5.878
							c-3.065,0-5.547-2.63-5.547-5.878C41.411,81.659,43.893,79.032,46.958,79.032z"/>
						<path fill="#FFFFFF" d="M60.869,79.032c3.063,0,5.547,2.627,5.547,5.871c0,3.248-2.484,5.878-5.547,5.878
							c-3.063,0-5.545-2.63-5.545-5.878C55.324,81.659,57.806,79.032,60.869,79.032z"/>
						<path fill="#FFFFFF" d="M74.782,79.032c3.063,0,5.546,2.627,5.546,5.871c0,3.248-2.482,5.878-5.546,5.878s-5.546-2.63-5.546-5.878
							C69.236,81.659,71.719,79.032,74.782,79.032z"/>
					</g>
				</svg>

				<p id="who">
					w'rk / chico'q
				</p>

				<div id="email">
					<p id="emailactivate">
						email activate
					</p>

					<div id="resultmessage">
						<?php 
						echo $result; 
						?>
					</div>
					<div id="emailformcontain">

						<form id="emailform"method="post">
							<input class="contactentry" type="text" name="name" placeholder="Name">
							<<textarea rows="4" cols="50"class="contactentry" id="message" type="text" name="message" placeholder="Talk to Me">
						</textarea>
							<input class="contactentry" type="text" name="email" placeholder="Your email">
							<input type="submit" id="submit" name="submit" value=">>>>">
						</form>
					</div>
				</div>
			</div>		
			<!-- navigation -->
			<div id="iconholder">
				
				<!-- motion -->
						<a id="motionlink" href="motion.html">
							<div class="subiconholder">		
								<div class="iconclass" id="motionicon">
								</div>
									<p class="navtitles">
										mot'in
									</p>
							</div>
						</a>
					</div>

				<!-- code -->
				<a href="code.html">
					<div class="subiconholder">		

						<svg class="iconclass" id="codeicon" x="0px" y="0px"  viewBox="0 0 65.495 64.841" xml:space="preserve">
							<g i:extraneous="self">
								<g>
									<path fill="#010101" d="M0,40.501V24.405L65.495,0v20.087L28.789,32.322v0.262l36.706,12.17v20.087L0,40.501z"/>
								</g>
							</g>
						</svg>

						<p class="navtitles">
							c'de
						</p>
					</div>
				</a>
				<!-- hand -->
				<a href="entries.html">
					<div class="subiconholder">		
						
						<svg id="handicon" x="0px" y="0px" viewBox="0 0 15.73 87.319" xml:space="preserve">

							<g i:extraneous="self">
								<g>
									<rect fill="#010101" width="15.73" height="73.697"/>
									<polygon fill="#010101" points="7.865,87.319 3.933,80.507 0,73.696 7.865,73.696 15.73,73.696 11.798,80.507 "/>
								</g>
							</g>
				</a>
						</svg>

							<p class="navtitles">
								entr's
							</p>
					</div>

				<!-- digital -->
					<div class="subiconholder">		
						<div class="iconclass" id="digitalicon">
						</div>
							<p class="navtitles">
								digt'l
							</p>
					</div>
			</div>	
		</body>
</html>
