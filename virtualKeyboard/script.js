// Display
const display = document.createElement('div');
display.className = 'display';
document.body.appendChild(display);

const textarea = document.createElement('textarea');
textarea.classList = 'display__textarea textarea';
textarea.setAttribute('rows', '5')
textarea.setAttribute('cols', '50')
display.appendChild(textarea);

const title = textarea.insertAdjacentHTML('beforebegin', '<p class ="title">RSS Virtual KeyBoard</p>');

//the keyboard
let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
document.body.appendChild(keyboard);

let array = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#x25B2;', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', `&#9664;`, '&#x25BC;', '&#x25BA;', 'Ctrl']
];

for (let i in array) {
    const row = document.createElement('div');
    row.classList = 'keyboard__row row';

    for (let k in array[i]) {
        let button = document.createElement('div');
        button.className = 'keyboard__key';
        button.innerHTML = array[i][k];
        const key = array[i][k];
        if (key === 'Backspace' || key === 'Tab' || key === 'Del' ||
            key === 'Capslock' || key === 'Shift' || key === 'Enter' ||
            key === 'Ctrl' || key === 'Win' || key === 'Alt') {
            button.classList = 'keyboard__key  row_color'
        }
        if (key === ' ') {
            button.classList = 'keyboard__key space'
        }
        row.appendChild(button)
    }
    keyboard.appendChild(row);
}
// the add event

keyboard.addEventListener('click', handler)
function handler(event) {

    if (event.target.className.includes('keyboard__key')) {
        let key = event.srcElement.textContent;
        event.target.style.color = 'red';
        event.target.style.borderRadius = '50px';
        setTimeout(() => {
            event.target.style.color = 'white';
            event.target.style.borderRadius = '5px';
        }, 110)
        switch (key) {
            case 'Tab':
                textarea.textContent += '\t';
                break;
            case 'Enter':
                textarea.textContent += '\n';
                break;
            case ' ':
                textarea.textContent += ' ';
                break;
            case 'Backspace':
                textarea.textContent = textarea.textContent.slice(0, -1);
                break;
            case 'Capslock':
                textarea.textContent = textarea.textContent + ""
                break;
            default:
                textarea.textContent += key;

        };
    };
}


