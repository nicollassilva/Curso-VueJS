new Vue({
    el: '#app',
    data: {
        jogando: false,
        vidaPlayer: 100,
        vidaMonstro: 100,
        vencedor: null,
        logs: []
    },
    computed: {
        porcVidaPlayer() {
            return `${this.vidaPlayer}%`
        },
        porcVidaMonstro() {
            return `${this.vidaMonstro}%`
        },
        barraVidaPlayer() {
            return this.vidaPlayer < 20 ? 'fim' : 
                (this.vidaPlayer < 50 ? 'metade' : 'inteira');
        },
        barraVidaMonstro() {
            return this.vidaMonstro < 20 ? 'fim' : 
                (this.vidaMonstro < 50 ? 'metade' : 'inteira');
        }
    },
    watch: {
        vidaPlayer(novo) {
            if(novo <= 0) {
                this.jogando = false
                this.vencedor = 2
            }
        },
        vidaMonstro(novo) {
            if(novo <= 0) {
                this.jogando = false
                this.vencedor = 1
            }
        },
        jogando(novo, antigo) {
            if(novo === false) {
                this.vidaPlayer = 100
                this.vidaMonstro = 100
                this.logs = []
            }
        }
    },
    methods: {
        ataquePlayer(supremo) {
            let dano;
            if(!supremo) {
                dano = Math.floor((Math.random() * 10) + 2)
                this.vidaMonstro -= dano
            } else {
                dano = Math.floor((Math.random() * 12) + 8)
                this.vidaMonstro -= dano
            }
            this.addLog(`Player atacou e tirou ${dano} de vida`, 'player')
            this.ataqueMonstro()
        },
        ataqueMonstro() {
            let dano = Math.floor((Math.random() * 12) + 5);
            this.vidaPlayer -= dano
            this.addLog(`Monstro atacou e tirou ${dano} de vida`, 'monstro')
        },
        cura() {
            let cura = Math.floor((Math.random() * 12) + 7);
            if(this.vidaPlayer + cura <= 100) {
                this.vidaPlayer += cura
            }
            this.addLog(`Player se curou o total de ${cura}`, 'player')
            this.ataqueMonstro()
        },
        addLog(texto, causador) {
            this.logs.unshift({texto, causador})
        }
    }
})