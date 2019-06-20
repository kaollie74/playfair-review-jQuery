console.log('Good Morning');

const playfair = [
    'Molly', 'Mark', 'Sean', 'Tim', 'David',
    'Adam', 'Sam', 'Danielle', 'Kyle', 'Blake',
    'Mitch', 'Jake'
]

$(document).ready(onReady); // .ready() is an event which calls
// the onReady function.                             function onReady(){

// function calls renderStudentList () and passes
// playfair array into it.  
function onReady() {

    console.log('jQuery works');
    renderStudentList(playfair);
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
    $('#students').append(`<li>${student}</li>`)
}