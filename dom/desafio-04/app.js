new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classeAlternada: '',
		bool: false,
		estilo: '',
		progressoNumero: 0
	},
	computed: {
		progresso() {
			return {
				backgroundColor: 'red',
				width: `${this.progressoNumero}px`,
				height: '30px',
				transition: 'width .3s linear',
				border: '1px solid black'
			}
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque'
					? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			setInterval(() => {
				this.progressoNumero < 200 ? this.progressoNumero += 10 : ''
			}, 1000)
		},
		alternarClasses(e) {
			this.classeAlternada = e.target.value
		},
		apenasTrueFalse(e) {
			e.target.value == 'true' ? this.bool = true : this.bool = false
		},
		aplicarEstilos(e) {
			this.estilo = e.target.value
		}
	}
})
