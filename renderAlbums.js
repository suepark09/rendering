
function renderAlbumsStyles(albums) {

   
    let album = "";
    let song
    let songLength

    for(let i =0; i < albums.albums[i].length; i++) {
       
     album = albums.albums[i].title
     console.log('what is this', albums.albums[i].length)
     return album
    
     
    }


    return `
        <div class="mt-5">
           <h1>${albums.artist}</h1>
           <hr>
           <img src="${albums.albums.albumCover}" height:"30px">
           <h4>${albums.albums.title}</h4>
           <hr>
           <div style="
            display: flex;
            flex-direction: row;
           ">
           </div>
        </div>
    `
}

function renderAlbums(albums) {

    let viewAlbums= [];

    for(let i =0; i < albums.length; i++) {
        let singleAlbum = renderAlbumsStyles(albums[i]);
        viewAlbums.push(singleAlbum);
    }

return viewAlbums.join("");
}

function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

 

    content.innerHTML = renderAlbums(albumsAbstraction);

}