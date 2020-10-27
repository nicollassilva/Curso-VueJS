new Vue({
    el: '#app',
    data: {
        moveLeft: 5,
        moveTop: 5
    },
    computed: {
        carrinho() {
            return {
                left: `${this.moveLeft > 0 ? this.moveLeft : (0, this.moveLeft = 5)}px`,
                top: `${this.moveTop > 0 ? this.moveTop : (0, this.moveTop = 5)}px`
            }
        }
    },
    methods: {
        moverCarrinho(e) {
            console.log(e)
        },
        changeLeft(acrescentar) {
            if(this.moveLeft < 700 && this.moveLeft >= 0) {
                acrescentar ? this.moveLeft += 5 : this.moveLeft -= 5
            }
        },
        changeTop(acrescentar) {
            if(this.moveTop < 300 && this.moveTop >= 0) {
                acrescentar ? this.moveTop += 5 : this.moveTop -= 5
            }
        }
        
    }
})