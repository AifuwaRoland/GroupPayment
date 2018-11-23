

    var username = "Mikey1";
    var password = "K1ngdom1";

     
    var userNames = [];
    var passWords = [];
    var Emails = [];
    var userCount = 0;
    var fromSignup = false;

    // alert(fromSignup);
    if(fromSignup == true){
        alert("Sign in with newly made Credentials to gain access!");
        fromSignup = false;
    }
    
    function checkUserInfo(){

        var usrnm = document.forms["myForm"]["username"].value;
        var pswrd = document.forms["myForm"]["password"].value;
        // var index = userSearch(usrnm);
        
        if( username != usrnm ){
            alert("not a valid username")
            return false;
        }

        if( username == usrnm && pswrd != password ){
            alert("Invalid password for username "+ usrnm );
            return false;
        }
        if( username == username && password == pswrd ){
           alert(" Loggin in...");
            return true;
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
function signOutProcedure(){
    
}

function validateSplitPageNG(){
    
    var orderId = document.getElementById("input_orderID").value;
    var billAmt = document.getElementById("input_billAmt").value;
    var btn_createNG = document.getElementById("btn_CreateNG").value;
    var btn_existing = document.getElementById("btn_Existing").value;

    if(document.getElementById("input_orderID").value != "" && document.getElementById("input_billAmt").value != "" ){
        location.href="addMembers.html";
    }
    else{
        alert("Both Order ID and Bill Amounts are required.");
    }

}

function validateSplitPageEG(){
    var orderId = document.getElementById("input_orderID").value;
    var billAmt = document.getElementById("input_billAmt").value;
    var btn_createNG = document.getElementById("btn_CreateNG").value;
    var btn_existing = document.getElementById("btn_Existing").value;
    alert(orderId+" order id "+ billAmt+" bill amount");

    if(orderId != "" && billAmt != "" ){
        location.href="previousPayGroup.html.html";
    }
    else{
        alert("Both Order ID and Bill Amounts are required.");
    }

}



