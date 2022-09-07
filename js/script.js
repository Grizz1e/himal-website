const serverCount = document.getElementById('server-count');
const radioCount = document.getElementById('radio-count');
const userCount = document.getElementById('user-count');
const hamMenu = document.getElementById('ham-menu');

const allBtn = document.getElementById('all-btn')
const botBtn = document.getElementById('bot-btn')
const musicBtn = document.getElementById('music-btn')
const botCat = document.getElementById('bot-cat')
const musicCat = document.getElementById('music-cat')
const commands = document.querySelectorAll('.command-name')

let sUpto = 0;
let rUpto = 29700;
let uUpto = 99700;


let counts = setInterval(counter);

function counter() {
    if (!serverCount) return
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

allBtn.addEventListener('click', () => {
    botCat.classList.remove('hidden')
    musicCat.classList.remove('hidden')
    botBtn.classList.remove('bg-slate-500')
    allBtn.classList.add('bg-slate-500')
    musicBtn.classList.remove('bg-slate-500')
})
botBtn.addEventListener('click', () => {
    botCat.classList.remove('hidden')
    musicCat.classList.add('hidden')
    botBtn.classList.add('bg-slate-500')
    allBtn.classList.remove('bg-slate-500')
    musicBtn.classList.remove('bg-slate-500')

})
musicBtn.addEventListener('click', () => {
    botCat.classList.add('hidden')
    musicCat.classList.remove('hidden')
    botBtn.classList.remove('bg-slate-500')
    allBtn.classList.remove('bg-slate-500')
    musicBtn.classList.add('bg-slate-500')
})

commands.forEach(element => {
    element.addEventListener('click', () => {
        element.querySelector('.collapsible').classList.toggle('hidden')
    })
});