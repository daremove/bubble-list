<template>
    <ul class="language-select">
        <slot></slot>
    </ul>
</template>
<script>
    export default {
        data() {
            return {
                languages: [],
                active: false,
            }
        },
        computed: {

        },
        methods: {
            toggleSelect(value) {
                this.languages.forEach(lang => {
                    lang.active = (value === lang.lang);
                });

                this.active = false;
            },
            openAll() {
                this.languages.forEach(lang => {
                    lang.active = true;
                });

                this.active = true;
            }
        },
        created() {
            this.$nextTick(() => {
                this.languages = this.$children;
                this.languages[0].active = true;
            });
        }
    }
</script>