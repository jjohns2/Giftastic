//create an array of animal strings that I like
var animals = ["cat", "dog", "horse", "chicken", "bear", "shark", "snake", "pig"];

function createButtons() {

    // Deletes the animals prior to adding new animals
    $("#animalButtons").empty();

    // Loops through the array of animals
    for (var i = 0; i < animals.length; i++) {
        // Then dynamicaly generates buttons for each animal in the array
        var a = $("<button>");
        // Adds a class of data-name to our button
        a.attr('data-name', animals[i]);
        // Adds a class of animaltime to our button
        a.addClass("animaltime");
        a.addClass("btn-light btn");
        // Provided the initial button text
        a.text(animals[i]);
        // Added the button to the animal div
        $("#animalButtons").append(a);
    }
}

//calls createButtons to.. create the buttons
createButtons();

//When button is clicked, the animal gifs will appear in DOM
$(document).on("click", ".animaltime", function () {
    //defining variable to become search query
    var animal = $(this).attr("data-name");
    //variables to call to API
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=Yur9bL7vCQMkCXU9aOXBYY6hkD2Lg6o8&limit=10";
    //create an ajax call 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        $("#gifgohere").empty();
        //creating loop to append each gif and rating to DOM
        for (var m = 0; m < results.length; m++) {

            var animalDiv = $("<div>");

            //create variable and DOM location for rating
            var rating = $("<p>").text("Rating: " + results[m].rating);
            var animalImg = $("<img>");

            //create variable and DOM location for gif
            animalImg.attr("src", results[m].images.original_still.url);
            animalImg.attr("data-still", results[m].images.original_still.url);

            //creating attr for animated gif
            animalImg.attr("data-animate", results[m].images.original.url);

            //creating attr for still gif
            animalImg.attr("data-state", "still");
            animalImg.attr('class', 'gifs');

            //append rating
            animalDiv.append(rating);
            animalDiv.append(animalImg);

            //apending image and rating to DOM
            $("#gifsgohere").prepend(animalDiv);
        }
    });
});

//make it so the gifs can toggle from static/animated per click

$(document).on('click', '.gifs', function () {
    var state = $(this).attr("data-state");
    console.log(state)
    if (state == "still") {
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state', 'animate');
        console.log("click")
    }

    else {
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state', 'still');
        console.log("click")
    }
});

//take the input from form on DOM
//create a button on the DOM with input
//button will generate 10 gifs like the previous buttons
$("#submitAnimal").on("click", function () {
    var inputAnimal = $("#animalInput").val();
    animals.push(inputAnimal);
    createButtons();
});

//hitting enter in form will create a button as well
$("#animalInput").keypress(function (e) {
    if (e.which == 13) {
        console.log("enter")
        var inputAnimal = $("#animalInput").val();
        animals.push(inputAnimal);
        createButtons();
        return false;
    }
});