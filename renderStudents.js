
function presentStudentStyles(student) {
    let attendance = "";
    if (student.isPresent === true) {
        attendance = "here"; 
    } else {
        attendance = "absent"; 
    }
    return `
            <div style="
            height: 80px;
            width: 200px;
            border: solid 1px black; 
            color: black;
            background-color: #c0ff8a;
            text-align: center;
            margin: 20px;
            font-size: 30px;
            ">
            `+ student.name +`
            <div style="
            font-size: 18px;
            ">
            `+ attendance +`
            </div> 
            </div>
        </div>
    `
}


function absentStudentStyles(student) {
    let attendance = "";
    if (student.isPresent === true) {
        attendance = "here"; 
    } else {
        attendance = "absent"; 
    }

    return `
            <div style="
            height: 80px;
            width: 200px;
            border: solid 1px black; 
            color: black;
            background-color: red;
            text-align: center;
            margin: 20px;
            font-size: 30px;
            ">
            `+ student.name +`
            <div style="
            font-size: 18px;
            ">
            `+ attendance +`
            
            </div> 
            </div>
        </div>
    `
}


function renderStudents(studentsAbstraction) {
  
    let viewStudents = [];

    for(let i = 0; i < studentsAbstraction.length; i++) {
       
        let student = studentsAbstraction[i];
     
        if(student.isPresent === true) {
            viewStudents.push(presentStudentStyles(student))
        } 
        else {
            student.isPresent === "absent"
            viewStudents.push(absentStudentStyles(student))
        }


    

      
        

    }
   
    

    return viewStudents.join(" ")
  
}




//possibly create two functions for present and absent? 

//create function with styling. must include styles for both green and 
//red boxes as sepate divs.
//create function that cycles through students array. possibly use 
//for loop with if statements inside
//if isPresent is true it should be green, else false. 



var studentsAbstraction = [
    {
        name: "Kamilah",
        isPresent: true
    },
    {
        name: "Kim",
        isPresent: true
    },
    {
        name: "Stuart",
        isPresent: false
    },
    {
        name: "Ron",
        isPresent: true
    },
    {
        name: "Krissy",
        isPresent: false
    }
]


function students() {
    var content = document.getElementById('content');
    
    console.log('get content', content)
    
    // var studentsAbstraction = [
    //     {
    //         name: "Kamilah",
    //         isPresent: true
    //     },
    //     {
    //         name: "Kim",
    //         isPresent: true
    //     },
    //     {
    //         name: "Stuart",
    //         isPresent: false
    //     },
    //     {
    //         name: "Ron",
    //         isPresent: true
    //     },
    //     {
    //         name: "Krissy",
    //         isPresent: false
    //     }
    // ]

    // let header = document.createElement("h1")
    // header.innerHTML = "ROLL CALL"
    var h1 = document.createElement("h1");
    
    content.innerHTML = renderStudents(studentsAbstraction);
    content.prepend(h1)
    h1.innerHTML = "Roll Call"
}


// console.log('what is this', studentsArray[0].isPresent)