<?php
    $UPLOAD_DIR = 'upload_im/';
    $COMPUTER_DIR = '/home/jadrn021/public_html/proj2-b/upload_im/';
    $fname = $_FILES['photograph']['name'];

   
    if(file_exists("$UPLOAD_DIR".$fname))  { 
        echo "Image File name already exists on the server";
        
        }
    elseif($_FILES['photograph']['error'] > 0) {
    	$err = $_FILES['photograph']['error'];	
        echo "Error Code: $err";
	if($err == 1)
		echo "Image is too big to upload, only with size less than 2MB";
        
        }     
    else {
        move_uploaded_file($_FILES['photograph']['tmp_name'], "$UPLOAD_DIR".$fname);
        echo "Your file has been receieved";
        
    } 
    

    $d = dir($COMPUTER_DIR);
    while($fname = $d->read()) {
        $data[$fname] = stat($fname);
        }
    foreach($data as $fname => $fvalue) {
        if($fname == "." || $fname == "..") {
            ;
            }
        else {
            echo "";
        }
    }    


    ?>
        

</body>
</html>     
    
