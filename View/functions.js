

    var username = "Mikey1";
    var password = "K1ngdom1";

     
    var userNames = [];
    var passWords = [];
    var Emails = [];
    var userCount = 0;
    var fromSignup = false;

    alert(fromSignup);
    if(fromSignup == true){
        alert("Sign in with newly made Credentials to gain access!");
        fromSignup = false;
    }
    
    function checkUserInfo(){

        var usrnm = document.forms["myForm"]["username"].value;
        var pswrd = document.forms["myForm"]["password"].value;
        var index = userSearch(usrnm);
        
        if( index == -1 ){
            alert("not a valid username")
            return false;
        }

        else{
           return validateUserInfo( index );
        }
        
    }

    function signUpProcedure(){
        var usrnm = document.forms["signUp-Form"]["signupUsername"].value;
        var pswrd = document.forms["signUp-Form"]["signupPassword"].value;
        var email = document.forms["signUp-Form"]["signupEmail"].value;

        userNames.push(usrnm);
        passWords.push(pswrd);
        Emails.push(email);

        userCount++;
        fromSignup = true;
        return true;
    }

    function userSearch( username ) {

        var result = -1;

        for( i =0; i<userCount; i++ ){
            if( userNames[i] == username ){
                result = i;
                break;
            }
        }
        return result;
    }

    function validateUserInfo( index ){

        var usrnm = document.forms["myForm"]["username"].value;
        var pswrd = document.forms["myForm"]["password"].value;


        if( pswrd != passWords[index] ){
            alert(" Invalid Password for username "+usrnm);
            return false;
        }
        else{
            alert(" valid credentials, logginf in...");
            return true;
        }
    }
