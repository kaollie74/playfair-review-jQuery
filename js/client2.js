console.log('Hello from client2.js');

$(document).ready(onReady);

function onReady() {
    console.log('Awesome');

    $("#add-task").on('click', addTaskHandler);
    $('#task-list').on('click', '.delete', deleteTask)
    $('#task-list').on('click', '.flag', clickFlag)
    $('#clear-tasks').on('click', deleteAllTasks)
} // end onReady

function addTaskHandler(event) {
    // Default action when you submit a form
    // - click "submit" type button inside a <form> _
    // is to refresh the page. We want to prevent that!
    // when we submit a form the page refreshes. we don't want to do that
    event.preventDefault();

    const taskName = $('#task-name').val();
    console.log('clicked Add Task! Task is: ', taskName);

    // Add the task
    addTask(taskName);
    // clear out the for field so we can new stuff
    $('#task-name').val('');


}
// This function will add the task when the button is clicked
function addTask(task) {
    console.log('Adding the task', task);
    $("#task-list").append(
        `<li>
        ${task}
        <button class="delete"> Delete </button>
        <button class="flag">Flag</button>
        </li>`)

}

function deleteTask(event) {
    console.log('Clicked delete', $(this).parent().text());
    // 'this' is the delete button...
    // we want to remove it's parent element, the <li>
    console.log($(this).parent().remove());


}

function clickFlag(event) {
    console.log('Clicked Flag button', $(this).parent().first());
    //let backgroundColor = $(this).css('background-color', 'red');

    //We made a style class in the css called .important
    // we want to select the <li> which is the parent of 
    // 'this' or the thing we clicked on.
    $(this).parent().addClass('important'); 
    // if we removed the parent() method,
    // it would just add color to the flag button.

   // $(this).parent().toggleClass('important');
}

//This will remove all tasks from the list when we click
// remove all button.
function deleteAllTasks(event){
   console.log('Remove Button');
   
    $('#task-list').empty();
}