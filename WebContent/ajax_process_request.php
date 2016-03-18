<?php

require_once('php_helpers.php');

$values = array();

foreach($_POST as $item) {
    $item = trim($item);
    $values [] = ($item);
    }

$image = $_POST['image'];
$dob = $_POST['dob'];
$yob = $_POST['yob'];
$mob = $_POST['mob'];


if(!$values[0] || !$values[2] || !$values[4] || !$values[6] || !$values[7] || !$values[8] || !$values[10] || !$values[11] || !$values[12] || !$values[16] || !$values[17] || !$values[19] || !$values[20]) {
 echo "Failed, Missing required fields";
 exit;
}  

#Relationship field
if($values[3] == 'nada') {
 echo "Failed, Please select your relationship to the child";
 exit;
}

#Country field
if($values[9] == 'nada') {
 echo "Failed, Please choose your country";
 exit;
}

#Image field check
if(!$_POST['image']){
 echo "Failed, Please upload child's image";
 exit;
}   

#Gender check
if(!$_POST['gender']) {
  echo "Failed, Gender is required";
  exit;
}

#DOB check
if(!$_POST['dob'] || !$_POST['mob'] || !$_POST['yob']) {
  echo "Failed, Date of Birth is required";
  exit;
}

if(!is_numeric($_POST['dob']) || !is_numeric($_POST['mob']) || !is_numeric($_POST['yob'])) {
  echo "Failed, Date of Birth must be an integer";
  exit;
}


#emergency name check
if(!$_POST['sname'] || !$_POST['sarea_phone'] || !$_POST['sprefix_phone'] || !$_POST['sphone'] ){
 echo "Emergency contact name and number, both are required";
 exit;
} 

#First Name validation
if(!preg_match("/^[a-zA-Z0-9' ]*$/", $values[0])){
 echo "Failed, Special characters are not allowed in name field";
    exit;
}

#Middle Name validation
if(!$values[1]){
 if(!preg_match("/^[a-zA-Z0-9' ]*$/", $values[1])){
    echo "Failed, Special characters are not allowed in name field";
    exit;
  }
}

#Last Name validation
if(!preg_match("/^[a-zA-Z0-9' ]*$/", $values[2])){
 echo "Special characters are not allowed in name field";
    exit;
}


#address validation
if(!preg_match("/^[a-zA-Z0-9 ]*$/", $values[4])){
 echo "Special characters are not allowed in address field, only alphabets and numbers please";
    exit;
}

#address 2 validation
if($values[5]) {
  if(!preg_match("/^[a-zA-Z0-9 ]*$/", $values[5])){
    echo "Special characters are not allowed in address field, only alphabets and numbers please";
    exit;
  }
}

#city validation
if(!preg_match("/^[a-zA-Z ]*$/", $values[6])){
 echo "Special characters and numbers are not allowed in City field";
    exit;
}

#validating state field
if(strlen($values[7]) != 2) {
    echo "The STATE field must have exactly two characters, not ".
        strlen($values[7]).", the value $values[7] is invalid.";
    exit;
    }  
 
#Validating ZIP field 
if(strlen($values[8]) != 5) {
    echo "The ZIP field must have exactly five characters, not ".
        strlen($values[8]).", the value $values[8] is invalid.";
    exit;
    } 
    
if(!is_numeric($values[8])) {
    echo "The ZIP field must be a five digit integer, the value $values[8] is invalid.";
    exit;
    }
    
#Validating primary phone Area code
if(strlen($values[10]) != 3) {
    echo "The phone area code must have exactly three characters, not ".
        strlen($values[10]).", the value $values[10] is invalid.";
    exit;
    }  
    
if(!is_numeric($values[10])) {
    echo "The phone area code field must be a three digit integer, the value $values[10] is invalid.";
    exit;
    }


#Validating primary phone prefix number
if(strlen($values[11]) != 3) {
    echo "The phone prefix code must have exactly three characters, not ".
        strlen($values[11]).", the value $values[11] is invalid.";
    exit;
    }  
    
if(!is_numeric($values[11])) {
    echo "The phone prefix code field must be a three digit integer, the value $values[11] is invalid.";
    exit;
    }

#Validating primary phone 
if(strlen($values[12]) != 4) {
    echo "The phone prefix code must have exactly three characters, not ".
        strlen($values[12]).", the value $values[12] is invalid.";
    exit;
    }  
    
if(!is_numeric($values[12])) {
    echo "The phone prefix code field must be a three digit integer, the value $values[12] is invalid.";
    exit;
    } 


#E-mail validation
if(!filter_var($values[16], FILTER_VALIDATE_EMAIL)){
echo "Email appears to be invalid".
      ", the value $values[16] is invalid.";
    exit;
}

#child First Name validation
if(!preg_match("/^[a-zA-Z0-9' ]*$/", $values[17])){
 echo "Special characters are not allowed in name field";
    exit;
}

#Child's Middle Name validation
if($values[1]) {
 if(!preg_match("/^[a-zA-Z0-9' ]*$/", $values[18])){
    echo "Special characters are not allowed in name field";
    exit;
  }
}

#Child Last Name validation
if(!preg_match("/^[a-zA-Z0-9' ]*$/", $values[19])){
 echo "Special characters are not allowed in name field";
    exit;
}

#child Nick Name validation
if(!preg_match("/^[a-zA-Z0-9' ]*$/", $values[20])){
 echo "Special characters are not allowed in name field";
    exit;
}

#Image extension check
$path_parts = pathinfo($_POST['image']);
$extension = $path_parts['extension'];
if(!($extension == "gif" || $extension == "png" || $extension == "bmp" || $extension == "jpeg" || $extension == "jpg")) {
   echo "Please upload image with valid extension gif, png, bmp or jpg".
        " extension '$extension' is invalid.";
    exit;
          
}

#Gender check
$gender = $_POST['gender'];
if($gender == 'male')
  $gender = 'M';
else
  $gender = 'F';

#check date
if(!checkdate($mob, $dob, $yob)) {
 echo "Invalid date";
 exit;
}

#check age
if(!age($dob, $mob, $yob)){
 echo "Kids must be between age of 12 and 18";
 exit;
}

function age($day, $month, $year){

 $status;
 $year_diff  = 2014 - $year;
 $month_diff = 06 - $month;
 $day_diff   = 01 - $day;
 if ($day_diff < 0 && $month_diff==0) $year_diff--;
 if ($day_diff < 0 && $month_diff < 0) $year_diff--;
 if($year_diff < 12 || $year_diff > 18) 
   $status = false;
 else
    $status = true;

 return $status;

}



#Medical field check
if($_POST['med']) {
  if(!preg_match("/^[a-zA-Z' ]*$/", $_POST['med'])){
    echo "Special characters and numbers are not allowed in medical concerns field";
    exit;
  }
}

#Diet field check
if($_POST['diet']) {
  if(!preg_match("/^[a-zA-Z' ]*$/", $_POST['diet'])){
    echo "Special characters and numbers are not allowed dietary field";
    exit;
  }
}

#Emergency contact name validation
if(!preg_match("/^[a-zA-Z0-9' ]*$/", $_POST['sname'])){
 echo "Special characters are not allowed in name field";
    exit;
}

#Program field
if($_POST['program'] == 'sel') {
 echo "Please select the program";
 exit;
}


#To insert into database
$values[0] = addslashes($values[0]);
$values[1] = addslashes($values[1]);
$values[2] = addslashes($values[2]);
$values[4] = addslashes($values[4]);
$values[5] = addslashes($values[5]);
$values[6] = addslashes($values[6]);

$values[16] = addslashes($values[16]);
$values[17] = addslashes($values[17]);
$values[18] = addslashes($values[18]);
$values[19] = addslashes($values[19]);
$values[20] = addslashes($values[20]);


$med = addslashes($_POST['med']);
$diet = addslashes($_POST['diet']);
$emername = addslashes($_POST['sname']);
$sarea_phone = $_POST['sarea_phone'];
$sprefix_phone = $_POST['sprefix_phone'];
$sphone = $_POST['sphone'];
$description = $_POST['program'];


if(isDup($_POST)) {  
    echo("Candidate is already enrolled in our program.");
    exit;
    }

 $db = get_db_connection();
 $sql = "SELECT id FROM child WHERE image_filename='$image';";
 $result = mysqli_query($db, $sql);
 $row_cnt = $result->num_rows;

 if($row_cnt >= 1) {
    echo("Image File name already exists on the server, please upload with different name");
    exit;
    }




$statement = "INSERT INTO parent VALUES('',";
$statement .= "'$values[0]', '$values[1]', '$values[2]', '$values[4]','$values[5]','$values[6]','$values[7]',"; 
$statement .= "'$values[8]','$values[10]$values[11]$values[12]','$values[13]$values[14]$values[15]','$values[16]');";

do_ajax_insertion($statement);


$statement = "INSERT INTO child VALUES('',";
$statement .= "(SELECT Max(id) FROM parent), '$values[3]', '$values[17]', '$values[18]','$values[19]','$values[20]',"; 
$statement .= "'$image','$gender','$yob-$mob-$dob','$med','$diet','$emername','$sarea_phone$sprefix_phone$sphone');";

do_ajax_insertion($statement);



$statement = "INSERT INTO enrollment VALUES((SELECT id FROM program WHERE description='$description'), (SELECT Max(id) FROM child));";

do_ajax_insertion($statement);

$answer = "successful";

echo $answer;


?>
