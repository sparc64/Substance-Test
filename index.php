<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<title>Basic Participants Charts</title>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha256-rr9hHBQ43H7HSOmmNkxzQGazS/Khx+L8ZRHteEY1tQ4=" crossorigin="anonymous" />
	<link rel="stylesheet" href="css/charts.css">
</head>
<body>
  
  <div class="container mt-5">
    
		<div class="row">
			<div class="col">
				<h1 class="font-weight-bold float-left">Basic Participants</h1>
			</div>
		</div>
		
    <div class="row">
      <div class="col">
        <h2>Attendance and Delivery</h2>
      </div>
    </div>
    
		<div class="row">
			<div class="col">
        <h3>Attendance</h3>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div id="chart-attendance-participants"></div>
			</div>
			<div class="col">
				<div id="chart-attendance-percentage"></div>
			</div>
		</div>
  	<div class="row">
		</div>
  	<div class="row">
			<div class="col">
				<div id="chart-attendance-sessions"></div>
			</div>
			<div class="col">
				<div id="chart-attendance-hours"></div>
			</div>
			<div class="col">
				<div id="chart-attendance-hours-average"></div>
			</div>
		</div>
	</div>
 
  <?php include "php/load-data.php"; ?>
  <?php include "php/inject-data.php"; ?>
	
	<script src="js/parse-data.js"></script>
	
	<!-- 	
	Using CDNJS for speed and built-in Subresource Integrity (SRI)
	https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
	https://www.w3.org/TR/SRI/
	 -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.slim.min.js" integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g=" crossorigin="anonymous"></script>
<!-- 	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script> -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha256-gL1ibrbVcRIHKlCO5OXOPC/lZz/gpdApgQAzskqqXp8=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha256-+kIbbrvS+0dNOjhmQJzmwe/RILR/8lb/+4+PUNVW09k=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/highcharts/5.0.12/highcharts.js" integrity="sha256-zXVQoymYrmnVtdQCloLcwiI2rnLzkVk4C3UPUoFPC7M=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/highcharts/5.0.12/highcharts-more.js" integrity="sha256-Oz3F4WKDRb9iDPICXN6gLHGiby0csdoVtvnpcMfi+7g=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/highcharts/5.0.12/modules/solid-gauge.js" integrity="sha256-wFbvC5snkVoz0lsZOKdk3K3/sM6RyoY1MB/TfoeNEOM=" crossorigin="anonymous"></script>	

	<script src="js/charts/attendance-participants.js"></script>
	<script src="js/charts/attendance-percentage.js"></script>
	<script src="js/charts/attendance-sessions.js"></script>
	<script src="js/charts/attendance-hours.js"></script>
</body>
</html>