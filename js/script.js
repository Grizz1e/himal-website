const serverCount = document.getElementById('server-count');
const radioCount = document.getElementById('radio-count');
const userCount = document.getElementById('user-count');
const hamMenu = document.getElementById('ham-menu');

let sUpto = 0;
let rUpto = 29700;
let uUpto = 99700;


let counts = setInterval(counter);

function counter() {
    serverCount.textContent = ++sUpto;
    radioCount.textContent = ++rUpto;
    userCount.textContent = ++uUpto;

    if (sUpto === 300 || rUpto === 30000 || uUpto === 100000) {
        console.log("OK")
        clearInterval(counts);
        serverCount.textContent = "300+";
        radioCount.textContent = "30,000+";
        userCount.textContent = "100,000+";
    }
}

hamMenu.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('is-visible')
})