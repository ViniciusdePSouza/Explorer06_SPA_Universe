export class Router {
    routes = {}
    
    add(routName, page) {
        this.routes[routName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const destinyRoute = this.routes[pathname] || this.routes[404]

        fetch(destinyRoute)
            .then(data => data.text())
            .then(html => {
                app.innerHTML = html
            })
    }
}