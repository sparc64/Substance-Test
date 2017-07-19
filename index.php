<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<title>Basic Participants Charts</title>

	<link rel="shortcut icon" href="favicon.png" type="image/png">

	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha256-rr9hHBQ43H7HSOmmNkxzQGazS/Khx+L8ZRHteEY1tQ4=" crossorigin="anonymous" />
	<link rel="stylesheet" href="css/charts.css">
</head>
<body>
  
  <div class="container mt-4 mb-5">
		    
		<div class="row">
			<div class="col">
				<div class="jumbotron">
					<div class="container">
						<h1 class="display-4">Basic Participants Chart View</h1>
						<hr class="my-4">
						<p class="lead">Statistics Summary Charts Based on Participants.</p>
					</div>
				</div>
			</div>
		</div>
		
		<div class="row mt-3">
			<div class="col">
				<h2 class="font-weight-bold">Attendance and Delivery</h2>
			</div>
		</div>
		
		<div class="row pl-4">
			<div class="col">
				
				<div class="row mt-4 py-4 bg-faded">
					<div class="col">
						<h4>Attendance</h4>

						<div class="row my-5">
							<div class="col">
								<div id="chart-attendance-participants"></div>
							</div>
							<div class="col">
								<div id="chart-attendance-percentage"></div>
							</div>
						</div>

						<div class="row my-5">
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
				</div>
				
				<div class="row mt-4 py-4 bg-faded">
					<div class="col">
						<h4>Delivery</h4>

						<div class="row my-5">
							<div class="col">
								<div id="chart-delivery-groups"></div>
							</div>
							<div class="col">
								<div id="chart-delivery-sessions"></div>
							</div>
							<div class="col">
								<div id="chart-delivery-hours"></div>
							</div>
						</div>
						
					</div>
				</div>
				
			</div>
		</div>
    
		<div class="row mt-5">
			<div class="col">
				<h2 class="font-weight-bold">Demographics</h2>
			</div>
		</div>

		<div class="row pl-4">
			<div class="col">
				
				<div class="row mt-4 py-4 bg-faded">
					<div class="col">
						<h4>Demographic - Gender</h4>
						
						<div class="row">
							<div class="col">
								<div id="chart-demographics-gender"></div>
							</div>
							<div class="col">
								<div id="chart-demographics-gender-percentage"></div>
							</div>
						</div>
					</div>
				</div>

				<div class="row mt-4 py-4 bg-faded">
					<div class="col">
						<h4>Demographic - Religion</h4>

						<div class="row">
							<div class="col">
								<div id="chart-demographics-religion"></div>
							</div>
							<div class="col">
								<div id="chart-demographics-religion-percentage"></div>
							</div>
						</div>
					</div>
				</div>

				<div class="row mt-4 py-4 bg-faded">
					<div class="col">
						<h4>Demographic - Ethnicity</h4>

						<div class="row">
							<div class="col">
								<div id="chart-demographics-ethnicity"></div>
							</div>
							<div class="col">
								<div id="chart-demographics-ethnicity-percentage"></div>
							</div>
						</div>
					</div>
				</div>

				<div class="row mt-4 py-4 bg-faded">
					<div class="col">
						<h4>Demographic - Age</h4>
						
						<div class="row">
							<div class="col">
								<div id="chart-demographics-age"></div>
							</div>
							<div class="col">
								<div id="chart-demographics-age-percentage"></div>
							</div>
						</div>
					</div>
				</div>

				<div class="row mt-5">
					<div class="col">
						<h4 class="font-weight-bold">Demographic - Other</h4>
					</div>
				</div>
				
				<div class="row pl-4">
					<div class="col">

						<div class="row mt-4 py-4 bg-faded">
							<div class="col">
								<h5>Disability</h5>

								<div class="row">
									<div class="col">
										<div id="chart-demographics-disability"></div>
									</div>
									<div class="col">
										<div id="chart-demographics-disability-percentage"></div>
									</div>
								</div>
							</div>
						</div>

						<div class="row mt-4 py-4 bg-faded">
							<div class="col">
								<h5>Education, training, employment status</h5>

								<div class="row">
									<div class="col">
										<div id="chart-demographics-education"></div>
									</div>
									<div class="col">
										<div id="chart-demographics-education-percentage"></div>
									</div>
								</div>
							</div>
						</div>

						<div class="row mt-4 py-4 bg-faded">
							<div class="col">
								<h5>Has this person been referred to you as part of the MOPAC funded sessions?</h5>

								<div class="row">
									<div class="col">
										<div id="chart-demographics-mopac"></div>
									</div>
									<div class="col">
										<div id="chart-demographics-mopac-percentage"></div>
									</div>
								</div>
							</div>
						</div>

						<div class="row mt-4 py-4 bg-faded">
							<div class="col">
								<h5>If yes, where have they been referred from?</h5>

								<div class="row">
									<div class="col">
										<div id="chart-demographics-mopac-from"></div>
									</div>
									<div class="col">
										<div id="chart-demographics-mopac-from-percentage"></div>
									</div>
								</div>
							</div>
						</div>

						<div class="row mt-4 py-4 bg-faded">
							<div class="col">
								<h5>Photo/Filming Consent</h5>

								<div class="row">
									<div class="col">
										<div id="chart-demographics-photo"></div>
									</div>
									<div class="col">
										<div id="chart-demographics-photo-percentage"></div>
									</div>
								</div>
							</div>
						</div>

						<div class="row mt-4 py-4 bg-faded">
							<div class="col">
								<h5>Referral Agency</h5>

								<div class="row">
									<div class="col">
										<div id="chart-demographics-agency"></div>
									</div>
									<div class="col">
										<div id="chart-demographics-agency-percentage"></div>
									</div>
								</div>
							</div>
						</div>

						<div class="row mt-4 py-4 bg-faded">
							<div class="col">
								<h5>Year Group/Age Category</h5>

								<div class="row">
									<div class="col">
										<div id="chart-demographics-agegroup"></div>
									</div>
									<div class="col">
										<div id="chart-demographics-agegroup-percentage"></div>
									</div>
								</div>
							</div>
						</div>
								
					</div>
				</div>	
					
			</div>
		</div>
		
		<div class="row mt-5">
			<div class="col">
				<h2 class="font-weight-bold">Impact</h2>
			</div>
		</div>
		
		<div class="row pl-4">
			<div class="col">
				
				<div class="row mt-4 py-4 bg-faded">
					<div class="col">
						<h4>Engagement and Progression</h4>

						<div class="row">
							<div class="col">
								<div id="chart-impact-engagement"></div>
							</div>
						</div>
					</div>
				</div>


				<div class="row mt-4 py-4 bg-faded">
					<div class="col">
						<h4>Outcomes</h4>

						<div class="row">
							<div class="col">
								<div id="chart-impact-outcomes"></div>
							</div>
						</div>
					</div>
				</div>

				<div class="row mt-4 py-4 bg-faded">
					<div class="col">
						<h4>Qualifications</h4>

						<div class="row">
							<div class="col">
								<div id="chart-impact-qualifications"></div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		
	</div>
	
 
  <?php include "php/load-data.php"; ?>
  <?php include "php/inject-data.php"; ?>
	
	
	<script src="js/parse-data.js"></script>
	
	<!-- 	
	Using CDNJS for consistency and built-in Subresource Integrity (SRI)
	https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
	https://www.w3.org/TR/SRI/
	 -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.slim.min.js" integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha256-gL1ibrbVcRIHKlCO5OXOPC/lZz/gpdApgQAzskqqXp8=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha256-+kIbbrvS+0dNOjhmQJzmwe/RILR/8lb/+4+PUNVW09k=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/highcharts/5.0.12/highcharts.js" integrity="sha256-zXVQoymYrmnVtdQCloLcwiI2rnLzkVk4C3UPUoFPC7M=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/highcharts/5.0.12/highcharts-more.js" integrity="sha256-Oz3F4WKDRb9iDPICXN6gLHGiby0csdoVtvnpcMfi+7g=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/highcharts/5.0.12/modules/solid-gauge.js" integrity="sha256-wFbvC5snkVoz0lsZOKdk3K3/sM6RyoY1MB/TfoeNEOM=" crossorigin="anonymous"></script>	

	<script src="js/charts/charts.js"></script>
	
	<script src="js/charts/attendance-participants.js"></script>
	<script src="js/charts/attendance-percentage.js"></script>
	<script src="js/charts/attendance-sessions.js"></script>
	<script src="js/charts/attendance-hours.js"></script>
	<script src="js/charts/attendance-hours-average.js"></script>
	
	<script src="js/charts/delivery-groups.js"></script>
	<script src="js/charts/delivery-sessions.js"></script>
	<script src="js/charts/delivery-hours.js"></script>

	<script src="js/charts/demographics-gender.js"></script>
	<script src="js/charts/demographics-religion.js"></script>
	<script src="js/charts/demographics-ethnicity.js"></script>
	<script src="js/charts/demographics-age.js"></script>
	<script src="js/charts/demographics-disability.js"></script>
	<script src="js/charts/demographics-education.js"></script>
	<script src="js/charts/demographics-mopac.js"></script>
	<script src="js/charts/demographics-mopac-from.js"></script>
	<script src="js/charts/demographics-photo.js"></script>
	<script src="js/charts/demographics-agency.js"></script>
	<script src="js/charts/demographics-agegroup.js"></script>

	<script src="js/charts/impact-engagement.js"></script>
	<script src="js/charts/impact-outcomes.js"></script>
	<script src="js/charts/impact-qualifications.js"></script>
	
</body>
</html>