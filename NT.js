function search() {
    var uname = document.getElementById("symbol").value;
    var pwd1 = document.getElementById("pwd1").value;
    var pwd2 = document.getElementById("pwd2").value;

    var filter = /[A-Z]/;
    if (uname == '') {
        alert("Please Enter Symbol of Stock");
    }
    else if (pwd1 == '') {
        alert("Enter the Starting date");
    }
    else if (pwd2 == '') {
        alert("Enter the Ending date");
    }
    else if (!filter.test(uname)) {
        alert("Enter Correct Symbol");

    }

    else {

      // data =  '[{"open" : 32, "close" : 42},{"open" : 32, "close" : 42}]';

     var data =  '[{"close" : 32, "open" : 22, "high" : 44, "low" : 10},{"close" : 22, "open" : 20, "high" : 44, "low" : 10}]';

        var mydata = JSON.parse(data);
        
        


    }
}

function clearFunc() {
    document.getElementById("symbol").value = "";
    document.getElementById("pwd1").value = "";
    document.getElementById("pwd2").value = "";
}
