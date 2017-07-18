<?php
  $jsonData = json_encode($dataArray, 5);
  echo "<script>const stringData = '$jsonData'</script>";
?>