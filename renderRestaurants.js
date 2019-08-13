function restaurantStyling (restaurants) {

    let priceRating = restaurants.priceRating;
    let rating = "$"; 
    
    return `
        <div class="text-center mt-5" style="float: left;">
            <div style ="
            background-color: #dbdbdb; 
            height: 100%;
            width: 240px; 
            padding: 10px 0 0 10px;
            text-align: left;
            margin: 10px;
            border-radius: 5px;
            ">
                 <h2>`
                     + restaurants.name +
                 `</h2>
                 <p style ="
                 margin-top: -5px;
                 "> `
                    + restaurants.type + 
                `</p>
                 <p style ="
                 color: #3bc22d; 
                 font-weight: bold; 
                 font-size: 35px;
                 margin-top: -20px;
                 ">
                    `+ rating.repeat(priceRating) +
                 `</p>
            </div>
        </div>
    `
}


function renderRestaurants(restaurants) {
    let viewRestaurants = [];
    console.log('restaurants array', viewRestaurants)
    for (let i = 0; i < restaurants.length; i++) {
        let singleRestaurant = restaurantStyling(restaurants[i]);
        viewRestaurants.push(singleRestaurant);
    }

    return viewRestaurants.join("");
}

//create function with styles for the grey box
//inside that div, put another div for the heder style, and a div for the food type, and dollar sign

//create function that loops through restaurant function and applies style for each thing


function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}