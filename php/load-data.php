<?php
  $handle = fopen("data/Basic Participants.csv", "r");

  // Error handler required, so the code doesn't fail silently.
  if ($handle !== FALSE) {
    while ( ($data = fgetcsv($handle, ",")) !== FALSE ) {
      // Too complex but don't know how to make it more readable preserving same efficiency
      $dataArray[ $data[0] ][ $data[1] ][ $data[2] ][] = [ "description" => $data[3], "breakdown" => $data[4], "value" => $data[5], "percentage" => $data[6] ];
        
        //array_slice($data, 3) ;
    }
    fclose($handle);
  }

//   echo '<pre>';
//   print_r($dataArray);
//   echo '</pre>';
?>