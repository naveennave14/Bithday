// List of button IDs in the order you want them clicked
const buttonIds = [
    'turn_on',
    'play',
    'bannar_coming',
    'balloons_flying',
    'cake_fadein',
    'light_candle',
    'wish_message',
    'story'
];

let index = 0;

function removeIconFromButton(button) {
    const icon = button.querySelector('i');   // change selector if needed
    if (icon) icon.remove();
}

function clickNext() {
    if (index >= buttonIds.length) return;

    const btn = document.getElementById(buttonIds[index]);
    if (btn) {
        btn.click();
        removeIconFromButton(btn);
    }

    index++;
    setTimeout(clickNext, 1500);
}

document.addEventListener('DOMContentLoaded', clickNext);
