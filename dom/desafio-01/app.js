new Vue({
    el: '#desafio',
    data: {
        nome: 'Nícollas Silva',
        idade: 20,
        src: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        idadeV3() {
            return this.idade * 3
        },
        random() {
            return Math.random()
        }
    }
})