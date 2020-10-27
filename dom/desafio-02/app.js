new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Esse é um alerta!')
        },
        alterarValor(e) {
            this.valor = e.target.value
        }
    }
})