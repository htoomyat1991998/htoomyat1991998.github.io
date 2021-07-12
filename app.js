const timeElement = document.querySelector('.taskbar .clock .time');
const screen = document.querySelector('.screen');
const shortcuts = {
    computer: document.getElementById('this-pc'),
    trash: document.getElementById('recycle-bin'),
    word: document.getElementById('word-2016'),
    excel: document.getElementById('excel-2016'),
    powerpoint: document.getElementById('powerpoint-2016'),
};

window.addEventListener('load', onload);

shortcuts.computer.addEventListener('click', () => {
    shortcuts.trash.classList.remove('selected');
    shortcuts.word.classList.remove('selected');
    shortcuts.excel.classList.remove('selected');
    shortcuts.powerpoint.classList.remove('selected');
    let el = shortcuts.computer;
    if (el.classList.contains('selected')) {
        openShortcut();
        el.classList.remove('selected');
    } else {
        el.classList.add('selected');
    }
});

shortcuts.trash.addEventListener('click', () => {
    shortcuts.computer.classList.remove('selected');
    shortcuts.word.classList.remove('selected');
    shortcuts.excel.classList.remove('selected');
    shortcuts.powerpoint.classList.remove('selected');
    let el = shortcuts.trash;
    if (el.classList.contains('selected')) {
        openShortcut();
        el.classList.remove('selected');
    } else {
        el.classList.add('selected');
    }
});

shortcuts.word.addEventListener('click', () => {
    shortcuts.computer.classList.remove('selected');
    shortcuts.trash.classList.remove('selected');
    shortcuts.excel.classList.remove('selected');
    shortcuts.powerpoint.classList.remove('selected');
    let el = shortcuts.word;
    if (el.classList.contains('selected')) {
        openShortcut();
        el.classList.remove('selected');
    } else {
        el.classList.add('selected');
    }
});

shortcuts.excel.addEventListener('click', () => {
    shortcuts.computer.classList.remove('selected');
    shortcuts.trash.classList.remove('selected');
    shortcuts.word.classList.remove('selected');
    shortcuts.powerpoint.classList.remove('selected');
    let el = shortcuts.excel;
    if (el.classList.contains('selected')) {
        openShortcut();
        el.classList.remove('selected');
    } else {
        el.classList.add('selected');
    }
});

shortcuts.powerpoint.addEventListener('click', () => {
    shortcuts.computer.classList.remove('selected');
    shortcuts.trash.classList.remove('selected');
    shortcuts.word.classList.remove('selected');
    shortcuts.excel.classList.remove('selected');
    let el = shortcuts.powerpoint;
    if (el.classList.contains('selected')) {
        el.classList.remove('selected');
        openShortcut();
    } else {
        el.classList.add('selected');
    }
});

function openShortcut() {
    screen.classList.add('load');
    setTimeout(() => {
        screen.classList.remove('load');
    }, 3000);
}


function onload() {
    setInterval(loop, 999);
}

function loop() {
    clock();
}

function clock() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    timeElement.textContent = time.replace(/^(\d{2}:\d{2}):\d{2} (AM|PM)$/, '$1 $2');
}