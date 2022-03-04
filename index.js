// Global variables
const taskList = document.getElementById('taskList');
const insertForm = document.getElementById('insertForm');
const ajax = new XMLHttpRequest();
var taskIds = []


// Check backup
ajax.open('GET', 'tasks.xml', true);
ajax.send();


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
	var newTask = document.createElement('h1');
	var newTaskName = document.getElementById('taskNameInput').value;
	newTask.innerHTML = newTaskName;
	taskList.insertBefore(newTask, insertForm);
});

