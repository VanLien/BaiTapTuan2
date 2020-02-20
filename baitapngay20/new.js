function login() {
        let inputname;
        let inputpass;
        inputname = document.getElementById("name").value;
        inputpass =document.getElementById("password").value;
             if (inputname === 'Admin'){
                 if (inputpass === 'TheMasTer')
                     alert("Welcome");
                 else
                     if (inputpass === 'null')
                         alert("Canceled");
                     else
                         alert("Wrong password");
             }
        else {
            if ( inputname ==="null")
                alert("Canceled");
            else
                alert("toikhongbietban");
             }

}