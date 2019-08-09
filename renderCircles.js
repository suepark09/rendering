// function makeSingleCircle(circle) {
//     // circle.join()

//     let html = ''
//     html = circle.join() 

//     // TODO: put circle HTML stuff here

//     return html
// }

// const circle1 = {
//     radius: 50,
//     color: 'blue'
// }



// console.assert(makeSingleCircle(circle1) === 'xxx50yyybluezzz')

function oneCircle(circle) {
    // console.log('this is circle:', circle)
    // console.log('this is circles:', circles)
    return `
    <div class="text-center mt-5">
        <code>
        <div style ="
        border-radius: 50%; 
        height: calc(${circle.radius}*2px);
        width: calc(${circle.radius}*2px);
        background-color:${circle.color};
        ">
        </div>
        </code>
    </div> `
}

function renderCircles(circlesList) {
    let viewCircles = []


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