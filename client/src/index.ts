

Vue.component("greet", {
    template: require("./temp/greet.html"),

    data: () => ({
        name: "Jason"
    })
})

Vue.component("login", {
    template: require("./temp/login.html"),

    data: () => ({
        credential: "",
        password: ""
    }),
    
    methods: {

        login() {
            console.log(`${this.credential}:${this.password}`)

            this.credential = ""
            this.password = ""
        }

    }
})

new Vue({
    el: "#app",
    data: { name: "Matt" }
})