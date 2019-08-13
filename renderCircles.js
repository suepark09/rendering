function oneCircle(circle) {

    return `
    <div class="text-center mt-5">
        <div style ="
        border-radius: 50%; 
        height: calc(${circle.radius}*2px);
        width: calc(${circle.radius}*2px);
        background-color:${circle.color};
        ">
        </div>
    </div> `
}


//this function returns the styles for ONE circle

function renderCircles(circlesList) {
//this function renders circles into the browser and applies the oneCircle
//function into each item of the circles object
    let viewCircles = [];
//Created new array to put the shapes in

    for(let i = 0; i < circlesList.length; i++) {
        
        let singleCircle = oneCircle(circlesList[i])
        viewCircles.push(singleCircle)

    }

    // console.log('this is circlesList:', circlesList)

    // let circle = circlesList[0]

    // return [
    //     oneCircle(circlesList[0]),
    //     oneCircle(circlesList[1]),
    // ].join('')

    return viewCircles.join('')

}

function circles() {
    var content = document.getElementById('content');

var circlesAbstraction = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

// content.innerHTML = renderCircles(circlesAbstraction);
content.innerHTML = renderCircles(circlesAbstraction)

}