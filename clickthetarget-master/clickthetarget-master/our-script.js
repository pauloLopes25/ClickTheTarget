window.scroll({
    bottom: 0,
    left: 0,
    behavior: 'smooth'
});


/**
 * Code that executes when a click happens inside the grid.
 *
 * @param interaction An object that describes the user interaction that just
 * occurred. It contains the following fields:
 * - x: The X coordinate of the click
 * - y: The Y coordinate of the click
 * - target: The DOM node that received the click.
 * - class: This string is either 'goal-0' if the user clicked the current
 *          target, 'goal-1' if they clicked the next target, 'goal-2' if they
 *          clicked the one following that, or else the empty string
 * - distance: The distance between the click and the center of the current
 *   target
 * - elapsed: The time elapsed since the previous click
 * - type: The type of click, either 'success', 'failure' or 'mistake'
 *
 * Notice that the X and Y coordinates are with regard to the grid. Thus, (0, 0)
 * is the top left corner of the grid.
 */
function processClick(interaction) {
//
}

/**
 * Code that executes when the sequence ends (the user has clicked he last
 * target)
 *
 * @param performance An object that describes the performance of the user. It
 * contains the following fields:
 * - age: The age of the user, which was given by them at the start of the
 *   exercise
 * - elapsed: The total time since the user was shown the first target
 * - successes: The number of successful clicks
 * - failures: The number of failed clicks (on wrong targets)
 * - mistakes: The number of clicks inside the grid but outside any target
 * - interactions: An array with the interactions made by the user.
 *
 * For a description of an interaction, see the documentation of the
 * `processClick` function
 */
function processEnd(performance) {
//
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let createTimer = () => {
    let div = document.createElement("div");
    let minute = document.createElement("span");
    minute.id = "minute";
    minute.innerHTML = "00";
    div.append(minute);
    div.append(document.createTextNode(":"));
    let second = document.createElement("span");
    second.id = "second";
    second.innerHTML = "00";
    div.append(second);
    div.append(document.createTextNode(":"));
    let millisecond = document.createElement("span");
    millisecond.id = "millisecond";
    millisecond.innerHTML = "00";
    div.append(millisecond);

    document.querySelector("#counter").append(div);
}


let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

let startTimer = () => {
    pause();
    reset();
    cron = setInterval(() => {
        timer();
    }, 10);
}

function pause() {
    clearInterval(cron);
}


function timer() {
    if ((millisecond += 10) === 1000) {
        millisecond = 0;
        second++;
    }
    if (second === 60) {
        second = 0;
        minute++;
    }
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
}

function reset() {
    minute = 0;
    second = 0;
    millisecond = 0;
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}


document.addEventListener('DOMContentLoaded', async function () {

    document.addEventListener("DOMSubtreeModified", async function () {

        document.querySelector("#results > button").addEventListener("click", async function () {
            await sleep(100);
            reset();
            await sleep(100);
            document.getElementById("counter").scrollIntoView({behavior: 'smooth'});
        })


        document.querySelector(".form-control > button").addEventListener("click", async function () {
            await sleep(100);
            startTimer()
            await sleep(100);
            document.getElementById("counter").scrollIntoView({behavior: 'smooth'});
        })


    });


    await sleep(2500);
    createTimer();

});

