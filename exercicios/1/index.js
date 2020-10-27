new Vue({
    el: '#app',
    data: {
        progresso: 0
    },
    computed: {
        progress() {
            return {
                width: `${this.progresso}%`
            }
        }
    },
    methods: {
        iniciarProgresso() {
            setInterval(() => {
                this.progresso < 100 ? this.progresso += 10 : this.progresso = 0
            }, 500)
        }
    }
})