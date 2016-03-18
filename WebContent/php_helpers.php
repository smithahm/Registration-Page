<?php

function get_db_connection() {
	$server = 'opatija.sdsu.edu:3306';
	$user = 'jadrn021';
	$password = 'chair';
	$database = 'jadrn021';  	
	
	if(!($db = mysqli_connect($server, $user, $password, $database))) {
    		write_error_page(mysqli_error($db));
		exit;
		}
	return $db;
	}
        
function isDup($arr) {
    $status;
    $check;
    $db = get_db_connection();

    $values = array_values($arr);	

    $fname = addslashes($values[0]);
    $lname = addslashes($values[2]);
    $hphone = $values[10].$values[11].$values[12];
    $cfname = addslashes($values[17]);
    $clname = addslashes($values[19]);

    $fname = trim(preg_replace('/\s+/', ' ', $fname));
    $lname = trim(preg_replace('/\s+/', ' ', $lname));
    $cfname = trim(preg_replace('/\s+/', ' ', $cfname));
    $clname = trim(preg_replace('/\s+/', ' ', $clname));
   
  
    $sql = "SELECT id FROM parent WHERE first_name='$fname' AND last_name='$lname' AND primary_phone='$hphone';";

    $result = mysqli_query($db, $sql); 
    $ans = $sql;
    $row_cnt = $result->num_rows;
    $ans .= " and row count is $row_cnt";  
  
    if($row_cnt >= 1){
   
     $sql1 = "SELECT id FROM child WHERE first_name='$cfname' AND last_name='$clname';";
     $result1 = mysqli_query($db, $sql1);
     $row_cnt1 = $result1->num_rows;
     $check = $sql1;
     $check .= " and row count is $row_cnt1";
     
     if($row_cnt1 >= 1) {
        $status = true; }
     else{
        $status = false;}
    }

    else {
        $status = false;
   }


    mysqli_close($db);
 
  
    return $status; 
       
    }
         
function do_insertion($query) {      
	$db = get_db_connection();
        if(!($result = mysqli_query($db, $query))) {
            write_error_page(mysqli_error($db));
          } #end if
	 mysqli_close($db);		
	}
        
function do_ajax_insertion($query) {      
	$db = get_db_connection();
        if(!($result = mysqli_query($db, $query))) {
            echo mysqli_error($db);
            exit;
          } #end if               
	mysqli_close($db);		
	}        	
		
function write_error_page($message) {
print <<< EOF
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>An Error has occurred</title>
    <style>
        h1, h2, h3 { text-align: center; }
    </style>
    <script src=""></script>
</head>
<body>
EOF;
print "<h2>Sorry, an unrecoverable error was encountered.<br />\n";
print $message;	
print "</body></html>\n";
exit;  // terminates this script and any others that called it.
}
	
?>	
