var FBurl = "https://wasim-storefront.firebaseio.com/";



// POST
var postUpdatedInventory = function () {
    for (var propName in sessionStorage) {
        // create a new request
        var request = new XMLHttpRequest;
        // .open() the request
        request.open("POST", FBurl + ".json", true);
        // .onload() specifies what to do after we get a response
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                //Successful
                var data = JSON.parse(this.response);
                console.log(data);
                sessionStorage.removeItem(propName);
            } else {
                //Request failed
                console.log(this.response);
            }
        };
    
        // .onerror() specifies what to do we don't get a response
        request.onerror = function() {
                //Connection fails
                console.log("Whoops, connection failed!");   
        };
        // .send() the request
        request.send(sessionStorage[propName]);
    }
};


// GET
var getUpdatedInventory = function () {
    // create a new request
    var request = new XMLHttpRequest;
    // .open() the request
    request.open("GET", FBurl + ".json", true);
    // .onload() specifies what to do after we get a response
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            //Successful
            var data = JSON.parse(this.response);
            console.log(data);
            for (var propName in data) {
                localStorage.setItem(propName, JSON.stringify(data[propName]))
            }
        } else {
            //Request failed
            console.log(this.response);
        }
    };

    // .onerror() specifies what to do if we don't get a response
    request.onerror = function () {
        //Connection fails
        console.log("Whoops, connection failed!");
    };
    // .send() the request
    request.send();

};