<template>
    <transition name="list">
        <div class="list">

            <bubble />
            <bubble />
            <bubble />
            <bubble />
            <bubble />
            <bubble />
            <bubble />
            <bubble />

        </div>
    </transition>
</template>
<script>
    import Bubble from './bubble.vue';

    export default {
        components: {
            'bubble': Bubble,
        },
        data() {
            return {
                bubbles: [],
                animation: ['original', 'alternate', 'alternate-reverse'],
                sizes: ['100px', '200px', '300px', '150px', '170px']
            }
        },
        created() {
            function randomValue(arr) {
                return arr[Math.floor(Math.random() * arr.length)];
            }

            this.$nextTick(() => {
                this.bubbles = this.$children;

                this.bubbles.forEach(bubble => {
                    let animation = randomValue(this.animation);
                    let size = randomValue(this.sizes);

                    bubble.animation = animation;
                    bubble.size = size;
                });
            });

        }
    }
</script>