const buttonIds = [
    'turn_on', 'play', 'bannar_coming', 'balloons_flying',
    'cake_fadein', 'light_candle', 'wish_message', 'story'
];

let index = 0;

function removeIconFromButton(button) {
    // Remove any element that looks like an icon
    const icon = button.querySelector('i, img, .fa, .fas, .far, .fab, .icon, [class*="icon"]');
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
