// Select color input
// Select size input
const colorPicker = document.querySelector('#colorPicker');

const rowss = document.querySelector('#inputHeight');
const columnss = document.querySelector('#inputWidth');

const pixelCanvas = document.querySelector('#pixelCanvas');
const canvasSize = document.querySelector('#sizePicker')


// When size is submitted by the user, call makeGrid()
canvasSize.addEventListener('submit', function(evt) {
    pixelCanvas.innerHTML = '';
    // default action that belongs to the event will not occur
    evt.preventDefault();
    makeGrid();

})

// EventListener for coloring cells
pixelCanvas.addEventListener('click', function(evt) {
    if (evt.target.nodeName.toLowerCase() === 'td') {
        evt.target.style.backgroundColor = colorPicker.value;
    }


})

// .value is property to set the value of input.
function makeGrid() {
    for (let x = 0; x < rowss.value; x++) {
        const rows = pixelCanvas.insertRow(0);
        for (let z = 0; z < columnss.value; z++)
            rows.insertCell(0);
    }    
}