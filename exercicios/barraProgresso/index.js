new Vue({
    el: '#app',
    data: {
        progresso: 0,
        working: ''
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
            this.working = setInterval(() => {
                this.progresso < 100 ? this.progresso += 10 : this.progresso = 0
            }, 500)
        },
        pararProgresso() {
            clearInterval(this.working)
        },
        resetarProgresso() {
            this.progresso = 0
        }
    }
})