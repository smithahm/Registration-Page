
// functions to validate field values
function isEmpty(fieldValue) {
        return $.trim(fieldValue).length == 0;    
        } 


//To validate city name
function isValidCity(city) {
        var pattern = /[0-9~!@#$%^&*()_+=:;",]/g;
     if(city.search(pattern) != -1)
           return false;
     else 
        return true;
    }

//to validate Email
function isValidEmail(email) {
        var posDot = email.lastIndexOf('.');
        var posAt = email.indexOf('@');

   if(posAt < 1 || posDot < posAt+2 || posDot+2 >= email.length)
      return false;
   else
      return true;
    } 
 
//To validate State
function isValidState(state) {                                
        var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DC2","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA",
        "MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH",
        "NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN",
        "TX","UT","VA","VT","WA","WI","WV","WY");
        for(var i=0; i < stateList.length; i++) 
            if(stateList[i] == $.trim(state))
                return true;
        return false;
        } 

//To validate the date
function isValidDate(month, date, year) {
    
    // now turn the three values into a Date object and check them
    var checkDate = new Date(year, month-1, date);    
    var checkDay = checkDate.getDate();
    var checkMonth = checkDate.getMonth()+1;
    var checkYear = checkDate.getFullYear();
    
    if(date == checkDay && month == checkMonth && year == checkYear)
        return true;
    else
        return false;          
        
}

//Check the child's age With respect to June 01 2014
function check_age(month, date, year){
    var ToYear = 2014;
    var ToMonth = 06;
    var ToDate = 01;
  
    var age = ToYear - year;
    var age_month = ToMonth - month;
    var age_date = ToDate - date;

   if(age_month < 0 ||(age_month == 0 && age_day < 0)) {
      age=  parseInt(age)-1 ;
    }

   if(age < 12 || age > 18) 
        return false;
   else
        return true;
   
}

//to validate the extension of image
function isValidExtImg(image) {
        var Extension = image.substring(image.lastIndexOf('.') + 1).toLowerCase(); 
       
        if(isEmpty(image)) {return true;}

        if (Extension == "gif" || Extension == "png" || Extension == "bmp" || Extension == "jpeg" || Extension == "jpg")
          return true;
        else 
          return false;
     } 


$(document).ready(function() {
 var ParenterrorStatus = $('#message_line');
 var ConsenterrorStatus = $('#message_line2');
 var elementHandle = new Array();
 var fileError = null;
  elementHandle[0] = $('[name="fname"]');
  elementHandle[1] = $('[name="mname"]');
  elementHandle[2] = $('[name="lname"]');
  elementHandle[3] = $('[name="rel"]');
  elementHandle[4] = $('[name="address"]');
  elementHandle[5] = $('[name="address2"]');
  elementHandle[6] = $('[name="city"]');
  elementHandle[7] = $('[name="state"]');
  elementHandle[8] = $('[name="zip"]');
  elementHandle[9] = $('[name="country"]');
  elementHandle[10] = $('[name="area_phone"]');
  elementHandle[11] = $('[name="prefix_phone"]');
  elementHandle[12] = $('[name="hphone"]');
  elementHandle[13] = $('[name="carea_phone"]');
  elementHandle[14] = $('[name="cprefix_phone"]');
  elementHandle[15] = $('[name="cphone"]');
  elementHandle[16] = $('[name="email"]');
  elementHandle[17] = $('[name="cfname"]');
  elementHandle[18] = $('[name="cmname"]');
  elementHandle[19] = $('[name="clname"]');
  elementHandle[20] = $('[name="byname"]');
  elementHandle[21] = $('[name="photograph"]');
  elementHandle[22] = $('[name="gender"]');
  elementHandle[23] = $('[name="mob"]');
  elementHandle[24] = $('[name="dob"]');
  elementHandle[25] = $('[name="yob"]');
  elementHandle[26] = $('[name="med"]');
  elementHandle[27] = $('[name="diet"]');
  elementHandle[28] = $('[name="sname"]');
  elementHandle[29] = $('[name="sarea_phone"]');
  elementHandle[30] = $('[name="sprefix_phone"]');
  elementHandle[31] = $('[name="sphone"]');
  elementHandle[32] = $('[name="program"]');


  function isValidData(){  
 
    // Only Empty value will be checked for First name
    if(isEmpty(elementHandle[0].val())) {
            elementHandle[0].addClass("error");
            ParenterrorStatus.text("Please enter your first name");
            elementHandle[0].focus();
            error_state = true;
            return false;
            }

   //Middle name is optional. Even if they dont enter anything is also fine. If entered anything then will be considered.
   /* if(isValidName(elementHandle[1].val())) {
            elementHandle[1].addClass("error");
            ParenterrorStatus.text("Middle name appears to have invalid characters");
            elementHandle[1].focus();
            return false;
            } */
   

    //Last name Empty. Checks only for Empty value
   if(isEmpty(elementHandle[2].val())) {
            elementHandle[2].addClass("error");
            ParenterrorStatus.text("Please enter your last name");
            elementHandle[2].focus();
            return false;
            }

  
  //Relationship to the child
  if((elementHandle[3].val()) == "nada") {
            elementHandle[3].addClass("error");
            ParenterrorStatus.text("Please select your relationship to the child");
            elementHandle[3].focus();
            return false;
            }


  //Address1 validation. Checks only for Empty value
  if(isEmpty(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            ParenterrorStatus.text("Please enter your address");
            elementHandle[4].focus();
            return false;
            }


 //Address2 validation is not required as this field is optional

 
  //City validation. Checks for Empty value
  if(isEmpty(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            ParenterrorStatus.text("Please enter your City");
            elementHandle[6].focus();
            return false;
            }

 //City validation. Only hiphen, `, 'apostrophe characters are allowed along with Alphabets
  if(!isValidCity(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            ParenterrorStatus.text("City appears to have invalid characters.");
            elementHandle[6].focus();
            return false;
            }

  //State Validation
   if(isEmpty(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            ParenterrorStatus.text("Please enter your state");
            elementHandle[7].focus();            
            return false;
            }
   if(!isValidState(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            ParenterrorStatus.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[7].focus();            
            return false;
            }

 //ZIp Code validation
    if(isEmpty(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            ParenterrorStatus.text("Please enter your zip code");
            elementHandle[8].focus();            
            return false;
            }
    if(!$.isNumeric(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            ParenterrorStatus.text("The zip code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[8].focus();            
            return false;
            }
    if(elementHandle[8].val().length != 5) {
            elementHandle[8].addClass("error");
            ParenterrorStatus.text("The zip code must have exactly five digits")
            elementHandle[8].focus();            
            return false;
            }
  
  //Country validation
   if((elementHandle[9].val()) == "nada") {
            elementHandle[9].addClass("error");
            ParenterrorStatus.text("Please choose your country");
            elementHandle[9].focus();
            return false;
            }

  //Home phone number validation
   if(isEmpty(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            ParenterrorStatus.text("Please enter your home phone area code");
            elementHandle[10].focus();            
            return false;
            }            
   if(!$.isNumeric(elementHandle[10].val())) {
            elementHandle[10].addClass("error");
            ParenterrorStatus.text("The home phone area code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[10].focus();            
            return false;
            }
   if(elementHandle[10].val().length != 3) {
            elementHandle[10].addClass("error");
            ParenterrorStatus.text("The home phone area code must have exactly three digits")
            elementHandle[10].focus();            
            return false;
            }   

   if(isEmpty(elementHandle[11].val())) {
            elementHandle[11].addClass("error");
            ParenterrorStatus.text("Please enter your home phone number prefix");
            elementHandle[11].focus();            
            return false;
            }           
   if(!$.isNumeric(elementHandle[11].val())) {
            elementHandle[11].addClass("error");
            ParenterrorStatus.text("The home phone number prefix appears to be invalid, "+
            "numbers only please. ");
            elementHandle[11].focus();            
            return false;
            }
   if(elementHandle[11].val().length != 3) {
            elementHandle[11].addClass("error");
            ParenterrorStatus.text("The home phone number prefix must have exactly three digits")
            elementHandle[11].focus();            
            return false;
            }

   if(isEmpty(elementHandle[12].val())) {
            elementHandle[12].addClass("error");
            ParenterrorStatus.text("Please enter your home phone number");
            elementHandle[12].focus();            
            return false;
            }            
   if(!$.isNumeric(elementHandle[12].val())) {
            elementHandle[12].addClass("error");
            ParenterrorStatus.text("The home phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[12].focus();            
            return false;
            }
   if(elementHandle[12].val().length != 4) {
            elementHandle[12].addClass("error");
            ParenterrorStatus.text("The home phone number must have exactly four digits")
            elementHandle[12].focus();            
            return false;
            }

 //Cell phone number validation
   if(!isEmpty(elementHandle[13].val())) {
                    
   if(!$.isNumeric(elementHandle[13].val())) {
            elementHandle[13].addClass("error");
            ParenterrorStatus.text("The cell phone area code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[13].focus();            
            return false;
            }
   if(elementHandle[13].val().length != 3) {
            elementHandle[13].addClass("error");
            ParenterrorStatus.text("The cell phone area code must have exactly three digits")
            elementHandle[13].focus();            
            return false;
            }  
 } 

   if(!isEmpty(elementHandle[14].val())) {
              
   if(!$.isNumeric(elementHandle[14].val())) {
            elementHandle[14].addClass("error");
            ParenterrorStatus.text("The cell phone number prefix appears to be invalid, "+
            "numbers only please. ");
            elementHandle[14].focus();            
            return false;
            }
   if(elementHandle[14].val().length != 3) {
            elementHandle[14].addClass("error");
            ParenterrorStatus.text("The cell phone number prefix must have exactly three digits")
            elementHandle[14].focus();            
            return false;
            }
   }

   if(!isEmpty(elementHandle[15].val())) {
                  
   if(!$.isNumeric(elementHandle[15].val())) {
            elementHandle[15].addClass("error");
            ParenterrorStatus.text("The cell phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[15].focus();            
            return false;
            }
   if(elementHandle[15].val().length != 4) {
            elementHandle[15].addClass("error");
            ParenterrorStatus.text("The cell phone number must have exactly four digits")
            elementHandle[15].focus();            
            return false;
            }
   }

  //Email validation
  if(isEmpty(elementHandle[16].val())) {
            elementHandle[16].addClass("error");
            ParenterrorStatus.text("Please enter your email address");
            elementHandle[16].focus();            
            return false;
            }  
  
   //Checks for an @ sign and at least one dot(.) Also @ must not be the first character it should be after last dot.         
   if(!isValidEmail(elementHandle[16].val())) {
            elementHandle[16].addClass("error");
            ParenterrorStatus.text("The email address appears to be invalid");
            elementHandle[16].focus();            
            return false;
            } 

  //Child's First name validation
   if(isEmpty(elementHandle[17].val())) {
            elementHandle[17].addClass("error");
            ParenterrorStatus.text("Please enter Child's first name");
            elementHandle[17].focus();            
            return false;
            } 
  //Child's Middle name validation is not required. This field is optional
  

  //Last name Empty. Checks only for Empty
   if(isEmpty(elementHandle[19].val())) {
            elementHandle[19].addClass("error");
            ParenterrorStatus.text("Please enter child's last name");
            elementHandle[19].focus();
            return false;
            }

   
  //By name Empty. Checks only for Empty
   if(isEmpty(elementHandle[20].val())) {
            elementHandle[20].addClass("error");
            ParenterrorStatus.text("Please enter the nickname of the child");
            elementHandle[20].focus();
            return false;
            }
  //By name Empty. Checks only for Empty
   if(isEmpty(elementHandle[21].val())) {
            elementHandle[21].addClass("error");
            ParenterrorStatus.text("Please upload child's image");
            elementHandle[21].focus();
            return false;
            }

   //To check Image extension. Valid files are only gif, png, bmp and jpg.
   if(!isValidExtImg(elementHandle[21].val())) {
            elementHandle[21].addClass("error");
            ParenterrorStatus.text("Please upload image with valid extension gif, png, bmp or jpg");
            elementHandle[21].focus();
            return false;
            }

   //To check Gender
   if(elementHandle[22][0].checked == false && elementHandle[22][1].checked == false ) {
            elementHandle[22].addClass("error");
            ParenterrorStatus.text("Please choose Child's gender");
            elementHandle[22].focus();
            $(".gender").addClass("focus");
            return false;
            }

    //To check Month
  if(isEmpty(elementHandle[23].val())) {
            elementHandle[23].addClass("error");
            ParenterrorStatus.text("Please enter Child's month of birth");
            elementHandle[23].focus();
            return false;
            }

     //To check Date
   if(isEmpty(elementHandle[24].val())) {
            elementHandle[24].addClass("error");
            ParenterrorStatus.text("Please enter child's date of birth");
            elementHandle[24].focus();
            return false;
            }

      //To check Year
   if(isEmpty(elementHandle[25].val())) {
            elementHandle[25].addClass("error");
            ParenterrorStatus.text("Please enter child's year of birth");
            elementHandle[25].focus();
            return false;
            }

   //to validate date
   if(!isValidDate(elementHandle[23].val(), elementHandle[24].val(), elementHandle[25].val())) {
            elementHandle[25].addClass("error");
            ParenterrorStatus.text("Date appears to be invalid");
            elementHandle[25].focus();
            return false;
            }

  //to check age
    if(!check_age(elementHandle[23].val(), elementHandle[24].val(), elementHandle[25].val())) {
            elementHandle[25].addClass("error");
            ParenterrorStatus.text("Kids must be of age 12 or greater and younger than 18 on 01 June 2014 ");
            elementHandle[25].focus();
            return false;
            }

   //To check medical concerns. User can enter anything they want. NA(Not appicable) or anything valid.
   

   //Diet field is optional. So NO validation required.
  
   //Secondary Contact name. Checks only for Empty value.
   if(isEmpty(elementHandle[28].val())) {
            elementHandle[28].addClass("error");
            ConsenterrorStatus.text("Please enter secondary contact name");
            elementHandle[28].focus();
            return false;
            }

  //Secondary Contact Phone number
  if(isEmpty(elementHandle[29].val())) {
            elementHandle[29].addClass("error");
            ConsenterrorStatus.text("Please enter secondary contact phone area code");
            elementHandle[29].focus();            
            return false;
            }            
   if(!$.isNumeric(elementHandle[29].val())) {
            elementHandle[29].addClass("error");
            ConsenterrorStatus.text("The phone area code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[29].focus();            
            return false;
            }
   if(elementHandle[29].val().length != 3) {
            elementHandle[29].addClass("error");
            ConsenterrorStatus.text("The phone area code must have exactly three digits")
            elementHandle[29].focus();            
            return false;
            }   
   if(isEmpty(elementHandle[30].val())) {
            elementHandle[30].addClass("error");
            ConsenterrorStatus.text("Please enter secondary contact phone number prefix");
            elementHandle[30].focus();            
            return false;
            }           
   if(!$.isNumeric(elementHandle[30].val())) {
            elementHandle[30].addClass("error");
            ConsenterrorStatus.text("The phone number prefix appears to be invalid, "+
            "numbers only please. ");
            elementHandle[30].focus();            
            return false;
            }
   if(elementHandle[30].val().length != 3) {
            elementHandle[30].addClass("error");
            ConsenterrorStatus.text("The phone number prefix must have exactly three digits")
            elementHandle[30].focus();            
            return false;
            }
   if(isEmpty(elementHandle[31].val())) {
            elementHandle[31].addClass("error");
            ConsenterrorStatus.text("Please enter Secondary phone number");
            elementHandle[31].focus();            
            return false;
            }            
   if(!$.isNumeric(elementHandle[31].val())) {
            elementHandle[31].addClass("error");
            ConsenterrorStatus.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[31].focus();            
            return false;
            }
   if(elementHandle[31].val().length != 4) {
            elementHandle[31].addClass("error");
            ConsenterrorStatus.text("The phone number must have exactly four digits")
            elementHandle[31].focus();            
            return false;
            }

    if((elementHandle[32].val()) == "sel") {
            elementHandle[32].addClass("error");
            ConsenterrorStatus.text("Please select the program");
            elementHandle[32].focus();
            error_state = true;
            return false;
            }


  return true;
}


  //Focus function
 elementHandle[0].focus();

$('#loading').hide();
$('#message_line3').hide();
$('#message_line4').hide();
$("input[type=button]").attr('disabled','disabled');

 
  //OnBlur function
 

  //Parents First name 
  elementHandle[0].on('blur', function() {
        if(isEmpty(elementHandle[0].val()))
            return;
        $(this).removeClass("error");
        ParenterrorStatus.text("");
        });

  //Parents Last name 
  elementHandle[2].on('blur', function() {
        if(isEmpty(elementHandle[2].val()))
            return;
        $(this).removeClass("error");
        ParenterrorStatus.text("");
        });

  //Relationship to the child
  elementHandle[3].on('blur', function() {
        if((elementHandle[3].val()) == "nada")
            return;
        $(this).removeClass("error");
        ParenterrorStatus.text("");
        });
  
 //Addr1 field validation
  elementHandle[4].on('blur', function() {
        if(isEmpty(elementHandle[4].val()))
            return;
        
        $(this).removeClass("error");
        ParenterrorStatus.text("");
        });

  //City field
  elementHandle[6].on('blur', function() {
        if(isEmpty(elementHandle[6].val()))
            return;
        if(isValidCity(elementHandle[6].val()))
           {
             $(this).removeClass("error");
             ParenterrorStatus.text("");
           }
        });

  //State field
  elementHandle[7].on('blur', function() {
        if(isEmpty(elementHandle[7].val()))
            return;
        if(isValidState(elementHandle[7].val()))
           {
             $(this).removeClass("error");
             ParenterrorStatus.text("");
           }
        });

  //Zip code 
  elementHandle[8].on('blur', function() {
        if(isEmpty(elementHandle[8].val()))
            return;
        if($.isNumeric(elementHandle[8].val()))
           { if(elementHandle[8].val().length == 5)
              {
                $(this).removeClass("error");
                ParenterrorStatus.text("");
              }
           }
        });
 
  //Country field
  elementHandle[9].on('blur', function() {
        if((elementHandle[9].val()) == "nada")
            return;
        $(this).removeClass("error");
        ParenterrorStatus.text("");
        });
  
  //Home Area phone field
  elementHandle[10].on('blur', function() {
        if(isEmpty(elementHandle[10].val()))
            return;
        if($.isNumeric(elementHandle[10].val()))
            { if(elementHandle[10].val().length == 3)
              {
                $(this).removeClass("error");
                ParenterrorStatus.text("");
              }
            }
        });

  //Home phone prefix number
  elementHandle[11].on('blur', function() {
        if(isEmpty(elementHandle[11].val()))
            return;
        if($.isNumeric(elementHandle[11].val()))
           { if(elementHandle[11].val().length == 3)
            {
             $(this).removeClass("error");
             ParenterrorStatus.text("");
            }
         }
      });
 
 //Home phone number
  elementHandle[12].on('blur', function() {
        if(isEmpty(elementHandle[12].val()))
            return;
        if($.isNumeric(elementHandle[12].val()))
           {  if(elementHandle[12].val().length == 4)
             {
               $(this).removeClass("error");
               ParenterrorStatus.text("");
             }
           }
        });

 //Cell phone validation
 elementHandle[13].on('blur', function() {
        if(isEmpty(elementHandle[13].val()))
            return;
        if($.isNumeric(elementHandle[13].val()))
           { if(elementHandle[13].val().length == 3)
            {
             $(this).removeClass("error");
             ParenterrorStatus.text("");
            }
           }
        });

  elementHandle[14].on('blur', function() {
        if(isEmpty(elementHandle[14].val()))
            return;
        if($.isNumeric(elementHandle[14].val()))
           { if(elementHandle[14].val().length == 3)
            {
             $(this).removeClass("error");
             ParenterrorStatus.text("");
            }
           }
       });

//Cell phone number validation 
  elementHandle[15].on('blur', function() {
        if(isEmpty(elementHandle[15].val()))
            return;
        if($.isNumeric(elementHandle[15].val()))
           { if(elementHandle[15].val().length == 4)
            {
             $(this).removeClass("error");
             ParenterrorStatus.text("");
            }
           }
        });

//Email validation
  elementHandle[16].on('blur', function() {
        if(isEmpty(elementHandle[16].val()))
            return;
        if(isValidEmail(elementHandle[16].val()))
           {
             $(this).removeClass("error");
             ParenterrorStatus.text("");
           }
        });

 //Child's first name
  elementHandle[17].on('blur', function() {
        if(isEmpty(elementHandle[17].val()))
            return;
        $(this).removeClass("error");
        ParenterrorStatus.text("");
        });

 //Child's middle name is optional

 //Child's last name
  elementHandle[19].on('blur', function() {
        if(isEmpty(elementHandle[19].val()))
            return;
        $(this).removeClass("error");
        ParenterrorStatus.text("");
        });


 //By-name of Child
  elementHandle[20].on('blur', function() {
        if(isEmpty(elementHandle[20].val()))
            return;
        $(this).removeClass("error");
        ParenterrorStatus.text("");
        });

  //Image of Child
  elementHandle[21].on('blur', function() {
        if(isEmpty(elementHandle[21].val()))
            return;
        if(isValidExtImg(elementHandle[21].val())){
        $(this).removeClass("error");
        ParenterrorStatus.text(""); }
        });

 //Gender validation
  elementHandle[22].on('blur', function() {
        if(elementHandle[22][0].checked == true || elementHandle[22][1].checked == true ){
             $(this).removeClass("error");
             $(".gender").removeClass("focus");
             ParenterrorStatus.text(""); 
           }
        });

 // Check for month
 elementHandle[23].on('blur', function() {
        if(isEmpty(elementHandle[23].val()))
            return;
        $(this).removeClass("error");
        ParenterrorStatus.text("");
        });

  // Check for date
 elementHandle[24].on('blur', function() {
        if(isEmpty(elementHandle[24].val()))
            return;
        $(this).removeClass("error");
        ParenterrorStatus.text("");
        });
 
  // Check for year,age and valid date
 elementHandle[25].on('blur', function() {
        if(isEmpty(elementHandle[25].val()))
            return;
        if(isValidDate(elementHandle[23].val(), elementHandle[24].val(), elementHandle[25].val())) {
               if(check_age(elementHandle[23].val(), elementHandle[24].val(), elementHandle[25].val())){
		$(this).removeClass("error");
        	ParenterrorStatus.text("");
            }
         }

        });   



 //Secondary contact name
  elementHandle[28].on('blur', function() {
        if(isEmpty(elementHandle[28].val()))
            return;
        $(this).removeClass("error");
        ConsenterrorStatus.text("");
        });

 //Secondary Phone number

 elementHandle[29].on('blur', function() {
        if($.isNumeric(elementHandle[29].val()))
           { if(elementHandle[29].val().length == 3)
            {
             $(this).removeClass("error");
             ConsenterrorStatus.text("");
            }
           }
        });

  elementHandle[30].on('blur', function() {
        if($.isNumeric(elementHandle[30].val()))
           { if(elementHandle[30].val().length == 3)
            {
             $(this).removeClass("error");
             ConsenterrorStatus.text("");
            }
           }
       });

  elementHandle[31].on('blur', function() {
        if($.isNumeric(elementHandle[31].val()))
           { if(elementHandle[31].val().length == 4)
            {
             $(this).removeClass("error");
             ConsenterrorStatus.text("");
            }
           }
        });

 //Summer Program field
 elementHandle[32].on('blur', function() {
        if((elementHandle[32].val()) == "sel")
            return;
        $(this).removeClass("error");
        ConsenterrorStatus.text("");
        });



   
   //To Uppercase
   elementHandle[7].on('keyup', function() {
        elementHandle[7].val(elementHandle[7].val().toUpperCase());
        });
        
  //Phone number key up 
  elementHandle[10].on('keyup', function() {
        if(elementHandle[10].val().length == 3)
            elementHandle[11].focus();
            });
            
  elementHandle[11].on('keyup', function() {
        if(elementHandle[11].val().length == 3)
            elementHandle[12].focus();
            }); 

  //Cell phone
  elementHandle[13].on('keyup', function() {
        if(elementHandle[13].val().length == 3)
            elementHandle[14].focus();
            });
            
  elementHandle[14].on('keyup', function() {
        if(elementHandle[14].val().length == 3)
            elementHandle[15].focus();
            });

  //Secondary contact number
  elementHandle[29].on('keyup', function() {
        if(elementHandle[29].val().length == 3)
            elementHandle[30].focus();
            });
            
  elementHandle[30].on('keyup', function() {
        if(elementHandle[30].val().length == 3)
            elementHandle[31].focus();
            });            
           


 $('form').on('submit', function(e) {
        for(var i=0; i < 33; i++)
          elementHandle[i].removeClass("error");
        ParenterrorStatus.text("");
        ConsenterrorStatus.text("");
        if(isValidData()) {
           $('#container').hide();
           $('#loading').show();
           send_file();
           var params = "first_name=" + $("[name='fname']").val() + "&mname=" + $("[name='mname']").val() + "&last_name=" + $("[name='lname']").val()+ "&rel="+ $("[name='rel']").val() + "&address=" + $("[name='address']").val() + "&address1=" + $("[name='address2']").val() + "&city=" + $("[name='city']").val() + "&state=" + $("[name='state']").val() + "&zip="+$("[name='zip']").val() + "&country="+$("[name='country']").val() + "&area_phone=" + $("[name='area_phone']").val() + "&prefix_phone=" + $("[name='prefix_phone']").val() + "&hphone=" +$("[name='hphone']").val() +  "&carea_phone=" + $("[name='carea_phone']").val() + "&cprefix_phone=" + $("[name='cprefix_phone']").val() + "&cphone=" + $("[name='cphone']").val()+ "&email="+ $("[name='email']").val() + "&cfname=" + $("[name='cfname']").val() + "&cmname=" + $("[name='cmname']").val() + "&clname=" + $("[name='clname']").val() + "&byname=" + $("[name='byname']").val() + "&photograph="+$("[name='photograph']").val() + "&gender="+$("[name='gender']").val() + "&mob=" + $("[name='mob']").val() + "&dob=" + $("[name='dob']").val() + "&yob=" +$("[name='yob']").val() + "&med=" + $("[name='med']").val() + "&diet=" + $("[name='diet']").val() + "&sname=" + $("[name='sname']").val()+ "&sarea_phone="+ $("[name='sarea_phone']").val() + "&sprefix_phone=" + $("[name='sprefix_phone']").val() + "&sphone=" + $("[name='sphone']").val() + "&city=" + $("[name='city']").val() + "&program=" + $("[name='program']").val() ;
	  params = encodeURI(params);             
          var req = new HttpRequest('ajax_check_dups.php?'+params, 
          handleAnswer);
          req.send();
          e.preventDefault();
	 }
	 else 
           return false;
        });

  
  $(':reset').on('click', function() {
        for(var i=0; i < 33; i++)
            elementHandle[i].removeClass("error");
        ParenterrorStatus.text("");
        ConsenterrorStatus.text("");
        });
	
  function send_file() {    
        var form_data = new FormData($('form')[0]);       
        form_data.append("image", document.getElementById('photograph').files[0]);
        $.ajax( {
            url: "ajax_file_upload.php",
            type: "post",
            data: form_data,
            processData: false,
            contentType: false,
            success: function(response) {
               $('#message_line4').show();
               $('#message_line4').css('color','red');
               $('#message_line4').css('font-weight', 'bold');
               $('#message_line4').html(response);

             },
            error: function(response) {
               $('#message_line4').show();
               $('#message_line4').css('color','red');
               $('#message_line4').css('font-weight', 'bold');
               $('#message_line4').html("Sorry, an error occured during image upload, "+response.statusText);
                }
            });
        }

   function handleAnswer(answer) {
        if($.trim(answer) == "OK" )  {
            var params = $('form').serialize();
            var img = $('#photograph').val();
            
            $.post('ajax_process_request.php', params+'&image='+img, handleAjaxPost);
          }
        else if ($.trim(answer) == "DUP") {
            $('#loading').hide();
            $('#container').show();
            $('#message_line3').show();
            $('#message_line3').html("Sorry Registration failed, " + elementHandle[17].val() + " " + elementHandle[19].val() + " is already enrolled in our Summer program");
            $('#message_line3').css('font-weight', 'bold');
            $('#message_line3').css('color','red');

         }
        else {
            $('#loading').hide();
            $('#container').show();
            $('#message_line3').show();
            $('#message_line3').css('font-weight', 'bold');
            $('#message_line3').css('color','red');
            $('#message_line3').html("Error with the system, please try again after some time");
           }        
        }
        
    function handleAjaxPost(answer) {
     $('#loading').hide();
     $('#container').show();
     $('#message_line3').show();

   if($.trim(answer) == "successful") {
     $("input[type=button]").removeAttr('disabled');
     $('#message_line3').css('color','blue');
     $('#message_line3').css('font-weight', 'bold');
     $('#message_line3').html("Congrats, You have successfully registered in our program.");
    }
    else
    {
     $('#message_line').css('color','red');
     $('#message_line').html(answer);

    }
     
  }        

});
