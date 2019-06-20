console.log('Good Morning');

const playfair = [
    'Molly', 'Mark', 'Sean', 'Tim', 'David',
    'Adam', 'Sam', 'Danielle', 'Kyle', 'Blake',
    'Mitch', 'Jake'
]

$(document).ready(onReady);

// function calls renderStudentList () and passes
// playfair array into it.  
function onReady() {

    console.log('jQuery works');
    renderStudentList(playfair);

    // Need to select something alreay on the DOM
    // can filter the event to something new (dynamically generated)
    // do this with the 2nd arg to on ('.student )
    $('#students').on('click', '.student', showAwesomeAlert) // the '.student' was created at
    // the bottom to specify on who we
    //actually clicked.
}

// This function will be called when we click on a student
// it will show an alert saying tht student is awesome.
function showAwesomeAlert(event) {
    // We will do more with events later, but ignoring for now.
    // console.log('Event', event);
    //console.log(this);// 'this' is contextual it varies depending on where it is.
    let studentName = $(this).text();
    alert(`${studentName} is awesome!!!`)

}


// this function will take in an array of students,
// loop the our students & display them on the DOM
function renderStudentList(studentList) {
    for (student of studentList) {
        renderStudent(student);
    } // end for of
};
// This will take in a single student,
// and append it to the '#student' id on HTML page.
function renderStudent(student) {
    $('#students').append(`<li class="student">${student}</li>`)
}