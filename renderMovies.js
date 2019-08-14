
function moviesStyling(movies) {

    //movie rating
    let decimalRating = movies.rottenTomatoesRating;
    let rottenTomatoesRating = decimalRating * 100;

    //grey background for
    // let contentStyle = document.getElementById("content").style;
    // contentStyle.backgroundColor = "#dbdbdb";
    // contentStyle.padding = "15px";

    return `
        <div class="mt-5">
            <div class="container" style="display: flex; flex-direction: row;">
                <div class="movie-img">
                   <img height= "200px" src="${movies.poster}">
                </div>
                <div class="movie-info" style= "
                background-color: #f5f5f5;
                border-radius: 5px;
                height: 200px; 
                margin-left: 15px;
                width: 250px;
                padding: 20px;
                ">
                
                   <h5> `+ movies.title +` </h5>
                   <h6 style= "
                   font-size: 14px;
                   "> 
                   `+ movies.year +`
                    </h6>
                   <p>IMDB:<br> `+ movies.imdbRating +` / 10</p>
                   <p>RottenTomatoes:<br> `+ rottenTomatoesRating +`% </p>
                </div>
            
            </div>
        </div>
    `
}

function renderMovies(movies) {
    let viewMovies = [];
    for(let i = 0; i < movies.length; i++) {
        let singleMovie = moviesStyling(movies[i]); 
        viewMovies.push(singleMovie);
    }

    return viewMovies.join('')
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);
   
}