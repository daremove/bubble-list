<template>
    <div class="bubble" :class="{
    'animate-original': animation === 'original',
    'animate-alternate': animation === 'alternate',
    'animate-alternate-reverse': animation === 'alternate-reverse'
    }" :style="{height: size, width: size}">

    </div>
</template>
<script>
    export default  {
        data() {
            return {
                animation: '',
                size: '200px'
            }
        }
    }
</script>