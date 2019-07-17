//create an array of animal strings that I like
var animals = ["cat", "dog", "horse", "chicken", "bear", "shark", "snake", "pig"];


function callAnimal() {

    var animal = $(this).attr("data-name");

    //variables to call to API
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=Yur9bL7vCQMkCXU9aOXBYY6hkD2Lg6o8&limit=10";
    var APIkey = "Yur9bL7vCQMkCXU9aOXBYY6hkD2Lg6o8";


    //create an ajax call 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        //takes the animal and returns 10 animal gifs
          var imageUrl = response.data.image_original_url;
          var animalImage = $("<img>");
          animalImage.attr("src", imageUrl);
          animalImage.attr("alt", "cat image");
          $("#animalButtons").prepend(animalImage);


        //rating should display after the animal gifs
    });
}

//When button is clicked, the animal gifs will appear in DOM
$(document).on("click", ".animaltime", callAnimal);






//create a loop to take in these animals and create buttons for them

function createButtons() {

    // Deletes the animals prior to adding new animals
    $("#animalButtons").empty();

    // Loops through the array of animals
    for (var i = 0; i < animals.length; i++) {

        // Then dynamicaly generates buttons for each animal in the array
        var a = $("<button>");

        // Adds a class of movie to our button
        a.attr("data-name", animals[i]);

        // Adds a class of movie to our button
        a.addClass("animaltime");

        // Provided the initial button text
        a.text(animals[i]);

        // Added the button to the animal div
        $("#animalButtons").append(a);
    }
}

//calls createButtons to.. create the buttons
createButtons();

//make it so the gifs can toggle from static/animated per click



//take the input from form on DOM
//create a button on the DOM with input
//button will generate 10 gifs like the previous buttons