
//create an array of animal strings that I like
var animals = ["cat", "dog", "horse", "chicken", "bear", "shark", "snake", "pig"];

//When button is clicked, the animal gifs will appear in DOM
function callgifs() {

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

        //creating loop to append each gif and rating to DOM
        for (var i = 0; i < results.length; i++) {
            var animalDiv = $("<div>");

            //create variable and DOM location for rating
            var rating = $("<p>").text("Rating: " + results[i].rating);
            var animalImg = $("<img>");

            //create variable and DOM location for gif
            animalImg.attr("src", results[i].images.original_still.url);
            animalImg.attr("animal-still", results[i].images.original_still.url);

            //creating attr for animated gif
            animalImg.attr("animal-animate", results[i].images.original.url);

            //creating attr for still gif
            animalImg.attr("data-state", "still");


            //append rating
            animalDiv.append(rating);
            animalDiv.append(animalImg);

            //apending image and rating to DOM
            $("#gifsgohere").prepend(animalDiv);
            $("#gifsgohere").prepend(animalImg);
    }	
});
}


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

        // Provided the initial button text
        a.text(animals[i]);

        // Added the button to the animal div
        $("#animalButtons").append(a);
    }
}

//calls createButtons to.. create the buttons
createButtons();

//when buttons are clicked 10 gifs are generated
$(".animaltime").on("click", callgifs);

//make it so the gifs can toggle from static/animated per click


//take the input from form on DOM
//create a button on the DOM with input
//button will generate 10 gifs like the previous buttons




    



