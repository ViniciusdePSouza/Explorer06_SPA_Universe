
import { Router } from './router.js'

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/explore", "/pages/explore.html")
router.add(404, "/pages/404.html")


const app = document.querySelector('#app')
const homeLink = document.querySelector('nav a:nth-child(1)')
const universeLink = document.querySelector('nav a:nth-child(2)')
const exploreLink = document.querySelector('nav a:nth-child(3)')



function changeStyleClassUniverse() {
    app.classList.add(universe - explorer)
    app.classList.remove(home - container)
}

function changeStylesHome() {
    app.classList.remove(universe - explorer)
    app.classList.add(home - container)
}

homeLink.addEventListener("click", () => {
    changeStylesHome()
})

universeLink.addEventListener("click", () => {
    changeStyleClassUniverse()
})
exploreLink.addEventListener("click", () => {
    changeStyleClassUniverse()
})

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()