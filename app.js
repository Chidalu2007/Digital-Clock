function head() {
    const heading = document.getElementById('h1');
    heading.textContent = 'Digital Clock';
}
head();

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,'0');//it is used to pad the current string to another string multiple times if needed until the required lenght is attained.
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
updateClock();
setInterval(updateClock,1000);//it is a java script function that enables you to repeat the same thing multiple times according to the interval 1000millisecond=1sec.


