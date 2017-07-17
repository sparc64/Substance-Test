<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<title>Basic Participants Charts</title>

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha256-rr9hHBQ43H7HSOmmNkxzQGazS/Khx+L8ZRHteEY1tQ4=" crossorigin="anonymous" />
</head>
<body>
 
  <?php
    $handle = fopen("data/Basic Participants.csv", "r");
    
    // Error handler required, so the code doesn't fail silently.
    if ($handle !== FALSE) {
      while ( ($data = fgetcsv($handle, ",")) !== FALSE ) {
        
//         Data Structure:
//           Array
//           (
//               [Category] => Array
//                   (
//                       [Sub Category] => Array
//                           (
//                               [Title] => Array
//                                   (
//                                       [Description] => Array
//                                           (
//                                               [0] => Array
//                                                   (
//                                                       [0] => Breakdown
//                                                       [1] => Value
//                                                       [2] => Percentage
//                                                   )
//                                           )
//                                   )
//                           )
//                   )
//           )
        
        // Too complex but don't know how to make it more readable preserving same efficiency
        $dataArray[ $data[0] ][ $data[1] ][ $data[2] ][ $data[3] ][] = array_slice($data, 4) ;
      }
      fclose($handle);
    }
  
    echo '<pre>';
    print_r($dataArray);
    echo '</pre>';
  
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