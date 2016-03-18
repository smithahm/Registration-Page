<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Report Login</title>
	<meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />                 
<link rel="stylesheet" type="text/css" href="phplogin.css" />        	
</head>
<body>
<?php
require_once('php_helpers.php');
$UPLOAD_DIR = 'upload_im/';
$COMPUTER_DIR = '/home/jadrn021/public_html/proj2-b/upload_im/';
$db = get_db_connection();
$user = $_POST['user'];
$pass = $_POST['pass'];
$valid = false;

$raw_str = file_get_contents('passwords.dat');
$data = explode("\n",$raw_str);
foreach($data as $item) {
	$pair = explode('=',$item);
	if($user === $pair[0] && crypt($pass,$pair[1]) === $pair[1])
		$valid = true;
	}




if($valid) {

echo "<h1>Generated Report</h1>";

   if($_POST['report'] == 'reportOne') {
   
     $sql = "SELECT child_id from enrollment where program_id='1';";
     $result = mysqli_query($db, $sql); 
     echo "<h3>1. Beginning Spanish</h3>";

   if(($row_cnt = $result->num_rows) >= 1) {
     echo"<table>";
     echo"<tr>";
echo"<th class='first'>First Name </th>";
echo"<th>Last Name</th>";
echo"<th>Nick Name </th>";
echo"<th class='last'>Age</th>";
echo"</tr>";
      
     while($child=mysqli_fetch_array($result)){
     $childId =$child['child_id'];

  $sql1 = "SELECT first_name, last_name, nickname,TIMESTAMPDIFF(YEAR, birthdate, CURRENT_DATE) AS age from child where id='$childId';";
     $result1 = mysqli_query($db, $sql1); 
     $child1=mysqli_fetch_array($result1);
     

     echo "<tr>";
     echo "<td>" .$child1['first_name']. "</td>";
     echo "<td>" .$child1['last_name']. "</td>"; 
     echo "<td>" .$child1['nickname']. "</td>";
     echo "<td>" .$child1['age']. "</td>";
     echo "</tr>";
     
 
  }#while loop
echo"</table>";

}
else{
echo"<p class='content'>No participants are enrolled in this program</p>";
}

 $sql = "SELECT child_id from enrollment where program_id='2';";
     $result = mysqli_query($db, $sql); 
     echo "<h3>2. Advanced Spanish</h3>";

   if(($row_cnt = $result->num_rows) >= 1) {
     echo"<table>";
     echo"<tr>";
echo"<th class='first'>First Name </th>";
echo"<th>Last Name</th>";
echo"<th>Nick Name </th>";
echo"<th class='last'>Age</th>";
echo"</tr>";
      
     while($child=mysqli_fetch_array($result)){
     $childId =$child['child_id'];

     $sql1 = "SELECT first_name, last_name, nickname,TIMESTAMPDIFF(YEAR, birthdate, CURRENT_DATE) AS age from child where id='$childId';";
     $result1 = mysqli_query($db, $sql1); 
     $child1=mysqli_fetch_array($result1);

     echo "<tr>";
     echo "<td>" .$child1['first_name']. "</td>";
     echo "<td>" .$child1['last_name']. "</td>"; 
     echo "<td>" .$child1['nickname']. "</td>";
     echo "<td>" .$child1['age']. "</td>";
     echo "</tr>";
     
 
  }#while loop
echo"</table>";

}
else{
echo"<p class='content'>No participants are enrolled in this program</p>";
}


 $sql = "SELECT child_id from enrollment where program_id='3';";
     $result = mysqli_query($db, $sql); 
     echo "<h3>3.Conversational Spanish</h3>";

   if(($row_cnt = $result->num_rows) >= 1) {
     echo"<table>";
     echo"<tr>";
echo"<th class='first'>First Name </th>";
echo"<th>Last Name</th>";
echo"<th>Nick Name </th>";
echo"<th class='last'>Age</th>";
echo"</tr>";
      
     while($child=mysqli_fetch_array($result)){
     $childId =$child['child_id'];

     $sql1 = "SELECT first_name, last_name, nickname,TIMESTAMPDIFF(YEAR, birthdate, CURRENT_DATE) AS age from child where id='$childId';";
     $result1 = mysqli_query($db, $sql1); 
     $child1=mysqli_fetch_array($result1);
 

     echo "<tr>";
     echo "<td>" .$child1['first_name']. "</td>";
     echo "<td>" .$child1['last_name']. "</td>"; 
     echo "<td>" .$child1['nickname']. "</td>";
     echo "<td>" .$child1['age']. "</td>";
     echo "</tr>";
     
 
  }#while loop
echo"</table>";

}
else{
echo"<p class='content'>No participants are enrolled in this program</p>";
}


 $sql = "SELECT child_id from enrollment where program_id='4';";
     $result = mysqli_query($db, $sql); 
     echo "<h3>4. Advanced Conversational Spanish</h3>";

   if(($row_cnt = $result->num_rows) >= 1) {
     echo"<table>";
     echo"<tr>";
echo"<th class='first'>First Name </th>";
echo"<th>Last Name</th>";
echo"<th>Nick Name </th>";
echo"<th class='last'>Age</th>";
echo"</tr>";
      
     while($child=mysqli_fetch_array($result)){
     $childId =$child['child_id'];

     $sql1 = "SELECT first_name, last_name, nickname,TIMESTAMPDIFF(YEAR, birthdate, CURRENT_DATE) AS age from child where id='$childId';";
     $result1 = mysqli_query($db, $sql1); 
     $child1=mysqli_fetch_array($result1);
 

     echo "<tr>";
     echo "<td>" .$child1['first_name']. "</td>";
     echo "<td>" .$child1['last_name']. "</td>"; 
     echo "<td>" .$child1['nickname']. "</td>";
     echo "<td>" .$child1['age']. "</td>";
     echo "</tr>";
     
 
  }#while loop
echo"</table>";

}
else{
echo"<p class='content'>No participants are enrolled in this program</p>";
}

 $sql = "SELECT child_id from enrollment where program_id='5';";
     $result = mysqli_query($db, $sql); 
     echo "<h3>5. Spanish Grammar and Composition</h3>";

   if(($row_cnt = $result->num_rows) >= 1) {
     echo"<table>";
     echo"<tr>";
echo"<th class='first'>First Name </th>";
echo"<th>Last Name</th>";
echo"<th>Nick Name </th>";
echo"<th class='last'>Age</th>";
echo"</tr>";
      
     while($child=mysqli_fetch_array($result)){
     $childId =$child['child_id'];

    $sql1 = "SELECT first_name, last_name, nickname,TIMESTAMPDIFF(YEAR, birthdate, CURRENT_DATE) AS age from child where id='$childId';";
     $result1 = mysqli_query($db, $sql1); 
     $child1=mysqli_fetch_array($result1);
 
     echo "<tr>";
     echo "<td>" .$child1['first_name']. "</td>";
     echo "<td>" .$child1['last_name']. "</td>"; 
     echo "<td>" .$child1['nickname']. "</td>";
     echo "<td>" .$child1['age']. "</td>";
     echo "</tr>";
     
 
  }#while loop
echo"</table>";

}
else{
echo"<p class='content'>No participants are enrolled in this program</p>";
}

 $sql = "SELECT child_id from enrollment where program_id='6';";
     $result = mysqli_query($db, $sql); 
     echo "<h3>6. Cultural Treasures of Mexicox</h3>";

   if(($row_cnt = $result->num_rows) >= 1) {
     echo"<table>";
     echo"<tr>";
echo"<th class='first'>First Name </th>";
echo"<th>Last Name</th>";
echo"<th>Nick Name </th>";
echo"<th class='last'>Age</th>";
echo"</tr>";
      
     while($child=mysqli_fetch_array($result)){
     $childId =$child['child_id'];

     $sql1 = "SELECT first_name, last_name, nickname,TIMESTAMPDIFF(YEAR, birthdate, CURRENT_DATE) AS age from child where id='$childId';";
     $result1 = mysqli_query($db, $sql1); 
     $child1=mysqli_fetch_array($result1);
 


     echo "<tr>";
     echo "<td>" .$child1['first_name']. "</td>";
     echo "<td>" .$child1['last_name']. "</td>"; 
     echo "<td>" .$child1['nickname']. "</td>";
     echo "<td>" .$child1['age']. "</td>";
     echo "</tr>";
     
 
  }#while loop
echo"</table>";

}
else{
echo"<p class='content'>No participants are enrolled in this program</p>";
}

}#report One


else {

$sql = "SELECT id, parent_id, relation, first_name, last_name,nickname,image_filename, gender, birthdate, conditions, diet, emergency_name, emergency_phone from child order by last_name;";
     $result = mysqli_query($db, $sql); 

     while($child=mysqli_fetch_array($result)){
     $parentID = $child['parent_id'];
     $childID = $child['id'];
      
     $sql1 = "SELECT first_name,last_name,address1,city,zip,primary_phone,email from parent where id='$parentID';";
     $result1 = mysqli_query($db, $sql1);
     $parent=mysqli_fetch_array($result1) ;

       
     $sql2 = "SELECT program_id, child_id from enrollment where child_id='$childID';";
     $result2 = mysqli_query($db, $sql2);
     $enroll=mysqli_fetch_array($result2) ;
     $programID = $enroll['program_id'];

     $sql3 = "SELECT description from program where id='$programID';";
     $result3 = mysqli_query($db, $sql3);
     $program=mysqli_fetch_array($result3) ;
   
     $fname = $child['image_filename'];
   
    echo "<div class='container'>";
    echo "<div class ='parent'>";
    echo "<p>Parent Info</p>";
    echo "<ul>";
    echo "<li>First Name: " .$parent['first_name']. "</li>";
    echo "<li>Last Name: " .$parent['last_name']. "</li>";
    echo "<li>Relationship to applicant: " .$child['relation']. "</li>";
    echo "<li>Address: " .$parent['address1']. "</li>";
    echo "<li>City: " .$parent['city']. "</li>";
    echo "<li>Zip: " .$parent['zip']. "</li>";
    echo "<li>Primary_Phone: " .$parent['primary_phone']. "</li>";
    echo "</ul>";
    echo "</div>";
   
    

    echo "<div class ='child'>";
    echo "<p>Child Info</p>";
    echo "<ul>";
    echo "<li><img src=\"$UPLOAD_DIR/$fname\""." width='100px' height='100px'/></li>";
    echo "<li>First Name: " .$child['first_name']. "</li>";
    echo "<li>Last Name: " .$child['last_name']. "</li>";
    echo "<li>Nickname: " .$child['nickname']. "</li>";
    echo "<li>Gender: " .$child['gender']. "</li>";
    echo "<li>Birthdate(YYYY-MM-DD): " .$child['birthdate']. "</li>";
    echo "<li>Enrolled in: " .$program['description']. " Program</li>";
    echo "<li>Medical Concerns: " .$child['conditions']. "</li>";
    echo "<li>Dietary requirements: " .$child['diet']. "</li>";
    
    echo "</ul>";
    echo "</div>";

    echo "<div class ='emergency'>";
    echo "<p>Emergency Contact Info</p>";
    echo "<ul>";
    echo "<li>Name: " .$child['emergency_name']. "</li>";
    echo "<li>Contact Number: " .$child['emergency_phone']. "</li>";
    echo "</ul>";
    echo "</div>";
    

    
    echo "</div>";

 }#end of while loop


}#end of else

}# end of IF valid


else
	echo "<p class='error'> OOPSS!!!, you are not authorised to view this source</p>";
?>







</body>
</html>
