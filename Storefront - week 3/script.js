// https://wasim-storefront.firebaseio.com/

var myApp  = function() {
    
    var FBurl = "https://wasim-storefront.firebaseio.com/";
};

// constructor
var InventoryCunstructor = function(name, desc, img, price) {
    this["name"] = name;
    this["description"] = desc;
    this["image"] = img;
    this["price"] = price;
};

//// inventory
//var myApp = {};
//var laptopsArray = [];
//var w6500 = new InventoryCunstructor("6500", "Good", "http://pisces.bbystatic.com/image2/BestBuy_US/images/products/5236/5236179_sa.jpg", "$400");
//laptopsArray.push(w6500);
//var w6700 = new InventoryCunstructor("6700", "Better", "http://pisces.bbystatic.com/image2/BestBuy_US/images/products/5153/5153008_sa.jpg", "$450");
//laptopsArray.push(w6700);
//var w6900 = new InventoryCunstructor("6900", "Best", "http://pisces.bbystatic.com/image2/BestBuy_US/images/products/3500/3500039_sa.jpg", "$500");
//laptopsArray.push(w6900);

// add inventory
//var newLaptop = function () {
    
//    var laptop = {
//    name: laptopsArray[0].name,
//    desc: laptopsArray[0].description,
//    img: laptopsArray[0].image,
//    price: laptopsArray[0].price
//    };
//    sessionStorage.setItem("newLaptop" + i, JSON.stringify(laptop));

    
//    postUpdatedInventory();
//};

var displayCounter = 0;

var displayInfo = function () {
    var inventoryArray = {};
    for (var propName in localStorage) {
        //var item = JSON.parse(localStorage[propName]);
        if (propName !== "username" && propName !== "password") {
            inventoryArray.push(propName);
        }
    }
    displayCounter++;
    $$('header').innerHTML = inventoryArray[displayCounter].name + " <small>"+ inventoryArray[displayCounter].desc +"</small>";
};








// ---------login functions---------
var signup = function () {
    $$("modal-body").innerHTML = "Enter username: <br /><input type='text' id='username'><br /><br />";
    $$("modal-body").innerHTML += "Enter password: <br /><input type='password' id='password'><br /><br />";
    $$("modal-body").innerHTML += "Enter password again: <br /><input type='password' id='password2'><br /><br />";
    $$("modal-body").innerHTML += "<p class='btn btn-primary' id='signup' onclick='register();'>Sign up</p>";
    $$("modal-body").innerHTML += "<p class='btn btn-default' id='login' onclick='login();'>Log in</p>";
}

var login = function () {
    $$("modal-body").innerHTML = "Enter username: <br /><input type='text' id='username'><br /><br />";
    $$("modal-body").innerHTML += "Enter password: <br /><input type='password' id='password'><br /><br />";
    $$("modal-body").innerHTML += "<p class='btn btn-primary' id='login' onclick='verify()'>Log in</p>";
}

var register = function () {
    // check to see if all fields have been filled
    if ($$('username').value !== "" &&
        $$('password').value !== "" &&
        $$('password2').value !== "") {
        // check to see if the both passwords match
        if ($$('password').value === $$('password2').value) {
            localStorage.setItem("username", $$('username').value);
            userName = $$('username').value;
            localStorage.setItem("password", $$('password').value);
            $$("modal-body").innerHTML = "Thank you for signing up! Please log in.<br />";
            $$("modal-body").innerHTML += "<p class='btn btn-primary' id='login' onclick='login();'>Log in</p>";
        } else {
            $$("modal-body").innerHTML += "Passwords have to match. Please try again!";
        }
    } else {
        $$("modal-body").innerHTML += "Please fill out all fields";
    }
}

var verify = function () {
    var user = $$('username').value;
    var pass = $$('password').value;

    if (localStorage.getItem("username") === user && localStorage.getItem("password") === pass) {
        $$("modal-body").innerHTML = "Thank you for logging in.<br /><br />";
        $$("loginlogout").innerHTML = "Log Out";
        $$("loginlogout").setAttribute("onclick", "logout();");
        user = user[0].toUpperCase() + user.substring(1);
        $$("welcome").innerHTML = "Welcome, " + user + "!";
        $$("welcome").style.color = "white";
    } else {
        $$("modal-body").innerHTML += "Login failed. Please try again.";
    }
}

var logout = function () {
    $$("loginlogout").innerHTML = "Log In";
    $$("loginlogout").setAttribute("onclick", "login();");
    $$("modal-body").innerHTML = "You have successfully logged out.<br /><br />";
    // take them back to home page
};