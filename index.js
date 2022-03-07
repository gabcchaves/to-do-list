// Global variables
const taskList = document.getElementById('taskList');
const insertForm = document.getElementById('insertForm');
var taskIds = []


// Check backup
$(document).ready(() => {
	$.ajax({url: 'tasks.xml', success: (result) => {
		$('#mainTitle').innerHTML = 'something';
	}});
});

// Main page background
$('#mainBg').css({
	'height': '100vh',
	'background-color': '#0b2560'
});

// Main page card
$('#mainArea').css({
	'width': '70%'
});

// Application title
$('#mainTitle').css({
	'font-weight': 'bold'
});

// Text inputs
$('.textInput').css({
	'border-radius': '0%',
	'border': 'none',
	'border-bottom': '1px solid skyblue',
});
$('.textInput').focus(() => {
	$('.textInput').css({
		'transition': '0.2s',
		'border-bottom': '1px solid blue',
	});
});
$('.textInput').focusout(() => {
	$('.textInput').css('border-bottom', '1px solid skyblue');
});

// Add task
$('#addTask').on('click', () => {
	var newTask = document.createElement('label');
	var newTaskName = document.getElementById('taskNameInput').value;
	newTask.setAttribute('class', 'ms-2 me-2');
	newTask.innerHTML = `<input type="checkbox"> ${newTaskName}`;
	taskList.insertBefore(newTask, insertForm);
  $.ajax({url: "test.txt", success: function(result){
    $("#addTask").html('hi');
  }});
});

