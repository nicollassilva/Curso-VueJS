<template>
    <div class="progress-bar">
        <span :style="returnPercents">{{ percents }}%</span>
    </div>
</template>

<script>
export default {
    props: {
        percents: {
            type: String,
            default: '0'
        }
    },
    computed: {
        returnPercents() {
            return `width: ${this.percents <= 100 ? this.percents : 100}%`
        }
    }
}
</script>

<style>
    .progress-bar {
        width: 1000px;
        height: 35px;
        margin: 20px 0;
        border-radius: 10px;
        border: 1px solid #aaa;
        left: 50%;
        transform: translateX(-50%);
        position: relative;
    }
    .progress-bar span {
        height: 100%;
        transition: width .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        border-radius: 10px;
        float: left;
        background-color: lawngreen;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(0, 0, 0, 0.5)
    }
</style>