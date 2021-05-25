const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit").submit();
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const eusername = loginForm.username.value;
    const epassword = loginForm.password.value;

    if(loginButton){
        return(true);
    }
    else{
        break;
        return(false);
        
    }
    

    var charu = eusername[0];
    var spass = "dev44";
    var luser = eusername.length
    var checkl = luser - 3
    if(checkl > 7 || checkl < 7){
        loginErrorMsg.style.opacity = 1;
        } else {
        if(charu == 's' || 'S'){
           var charu = eusername[1];
           
           if(charu == '3'){
               var charu = eusername[2];
               
               if(charu == '3'){
                var same = epassword.localeCompare(spass)
                
                if(same == 0){
                    alert("You have successfully logged in.");
                    
                } else{
                    loginErrorMsg.style.opacity = 1;
                }
            
               } else {
                loginErrorMsg.style.opacity = 1;
               }
           } else{
            loginErrorMsg.style.opacity = 1;
           }
       } else {
        loginErrorMsg.style.opacity = 1;
       }
    }
   // if (username == "user" && password == "web_dev") {
   //     alert("You have successfully logged in.");
    //    location.reload();
   // } else {
    //    loginErrorMsg.style.opacity = 1;
  //  }
})
// checks if s33 is presetn at the start of the login code

    
// once username is verified correct then check corrisponding paswword 
// double string comparissatn
// compares entered pass with stored pass



