<?php
if (!defined('ABSPATH')) {
	exit;
}

$username = "zxl101";
$password = "S079z079";
$host = "mytestdb.cjkcq2pcruvk.us-east-2.rds.amazonaws.com";
$database="iter2";

$connect = mysqli_connect( $host, $username, $password, $database );

$myquery4b = "select count(*) as school_no, city_name, s.city_id, school_type_des, edu_sec_des
            from school as s
            join city as c on s.city_id = c.city_id
            join school_type as st on s.st_id = st.st_id
            join education_sector as es on s.es_id = es.es_id
            group by city_name,school_type_des,edu_sec_des;";

$query4b = mysqli_query($connect, $myquery4b);

$sc_no = array();
while ( $row = mysqli_fetch_assoc( $query4b ) ) {
	$element = array();
	$element['edu_sec'] = $row['edu_sec_des'];
	$element['school_type'] = $row['school_type_des'];
	$element['school_no'] = $row['school_no'];
	$element['city_id'] = $row['city_id'];
	$element['city_name'] = $row['city_name'];
	$sc_no[] = $element;
}
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
	<meta charset="utf-8">
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<link rel="stylesheet" href="css/eccdia_style.css">
    <link rel="stylesheet" href="css/ecccity_style.css">
	<script type="text/javascript" src="js/ecccity_script.js"></script>
    <script type="text/javascript" src="js/eccdia_script.js"></script>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">

	<script src="http://d3js.org/d3.v3.min.js"></script>
	<script src="http://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js"></script>
	<script src="https://d3js.org/d3-axis.v1.min.js"></script>
</head>

<body>
<br>
<div class="section3_b" style="text-align: center">
	<p></p>
	<label class="text_label_b" style="font-family: Arial; font-size: 16px; margin-bottom: 15px">Select Your Preferred City:</label>
    <hr>
	<br>

	<div id="btn_group_1" style="text-align: center">

        <button class="edu_city" id="edu_btn1">Ballarat</button>
        <button class="edu_city" id="edu_btn2">Greater Bendigo</button>
        <button class="edu_city" id="edu_btn3">Greater Geelong</button>
        <button class="edu_city" id="edu_btn4">Greater Shepparton</button>
        <button class="edu_city" id="edu_btn5">Horsham</button>
    </div>
    <div id="btn_group_2" style="text-align: center">
        <button class="edu_city" id="edu_btn6">Latrobe</button>
        <button class="edu_city" id="edu_btn7">Mildura</button>
        <button class="edu_city" id="edu_btn8">Wangaratta</button>
        <button class="edu_city" id="edu_btn9">Warrnambool</button>
        <button class="edu_city" id="edu_btn10">Wodonga</button>
    </div>

	<div class="svg4_2" style="display: none">
	</div>

</body>
<script>
    var sc_no = <?php echo json_encode($sc_no); ?>;
</script>
</html>
