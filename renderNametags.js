function nametagStyles(nametag) {
    return `
    <div class="text-center mt-5">
    
        <div style ="
        height: 120px;
        width:  250px;
        border: solid 1px grey;  
        color: black;
        font-size: 35px;
        font-family: helvetica;
        ">

        <div style ="
        height: 50px;
        width:  250px;
        background-color: #3279a8; 
        color: white; 
        margin-bottom: 5px;
        padding-top: 5px;
        font-size: 26px;
        ">
        Hello, my name is:
        </div>

        ` + nametag + `
        </div>
    </div>
    `
}

function renderNametags(nametags) {
    let viewNametags = [];
    for(let i = 0; i < nametags.length; i++) {
        let wholeNametag = nametagStyles(nametags[i])
        viewNametags.push(wholeNametag)
    }

    return viewNametags.join(" ")

}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}

console.log('test');