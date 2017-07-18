<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<title>Basic Participants Charts</title>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha256-rr9hHBQ43H7HSOmmNkxzQGazS/Khx+L8ZRHteEY1tQ4=" crossorigin="anonymous" />
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
        
        <table class="table table-bordered">
          <thead>
            <tr><th>Attendance</th></tr>
          </thead>
          <tbody>
            <tr><td>Table row</td></tr>
          </tbody>
        </table>
			</div>
		</div>
    
	</div>
 
  <?php
		include "php/load-data.php";
  ?>
  
  

	<!-- 	
	Using CDNJS for speed and built-in Subresource Integrity (SRI)
	https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
	https://www.w3.org/TR/SRI/
	 -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.slim.min.js" integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha256-gL1ibrbVcRIHKlCO5OXOPC/lZz/gpdApgQAzskqqXp8=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha256-+kIbbrvS+0dNOjhmQJzmwe/RILR/8lb/+4+PUNVW09k=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/highcharts/5.0.12/highcharts.js" integrity="sha256-zXVQoymYrmnVtdQCloLcwiI2rnLzkVk4C3UPUoFPC7M=" crossorigin="anonymous"></script>
</body>
</html>