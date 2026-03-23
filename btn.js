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

function clickNext() {
    if (index >= buttonIds.length) return;
    const btn = document.getElementById(buttonIds[index]);
    if (btn) {
        btn.click();
        console.log(`Clicked: ${btn.textContent}`);
    }
    index++;
    setTimeout(clickNext, 1500); // wait 1.5 seconds before next click
}

// Start the automation
clickNext();