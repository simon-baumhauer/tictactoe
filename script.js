let fields = [];

let currentshape = 'cross';

function fillShape(id) {
    if (currentshape == 'cross') {
        currentshape = 'star';
    } else {
        currentshape = 'cross';
    }
    fields[id] = currentshape
    console.log(fields);
    draw();
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'star') {
            document.getElementById('star-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }

    }
}