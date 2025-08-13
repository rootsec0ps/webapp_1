// connect constants to elements in UI.html
const input = document.getElementById('love-input');
const submitBtn = document.getElementById('submit-btn');
const output = document.getElementById('output');

// state flag
let sheLovesMeNot = true;

// a helper to print to the page
function say(msg) {
    const line = document.createElement('div'); // creates a <div> like: <div>message</div>
    line.textContent = msg; // sets it's text (safe from HTML injection; not HTML)
    output.appendChild(line); // add it to the output area
}

function onSubmit() {
    // stop if we already finished earlier
    if (!sheLovesMeNot) return;

    // read the input's value (strings by default in the DOM)
    const raw = input.value;
    const love = parseInt(raw, 10) // 10 means to parse as base-10 decimal

    if (Number.isNaN(love)) {
        say('please enter a number');
        return
    }

    if (love >= 100) {
        say('i kiss u');
        sheLovesMeNot = false;
    } else if (love >= 95 && love < 100) {
        say('i hug u');
        sheLovesMeNot = false;
    } else {
        say('you know you love me more than that <3')
    }

    // if finished, lock controls
    if (!sheLovesMeNot) {
        input.disabled = true;
        submitBtn.disabled = true;
    }
}

submitBtn.addEventListener('click', onSubmit);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') onSubmit ();
});