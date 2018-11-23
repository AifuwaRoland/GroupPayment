

    var username = "Group40";
    var password = "1234";
    
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



function signOutProcedure(){
    
}

function payNow(){

alert("Payment successfull!s");
location.href="Welcome.html"

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

function declineInvitation(){
    alert("Invitation declined!");
    location.href="index.html";
}

function declineBill(){
    alert("Bill declined! you will not be charged for this");
    location.href="index.html";
}


function quickSignUp(){
    alert("sign up successful! continue to payment page.");
    location.href="PaymentMthodSetup.html";
}
