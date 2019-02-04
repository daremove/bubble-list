<template>
    <li class="language-select__item" v-if="active" @click="toggleSelect(value)">
        {{ value }}
    </li>
</template>
<script>
    export default {
        props: ['value'],
        data() {
            return {
                active: false,
                lang: '',
            }
        },
        methods: {
            toggleSelect(value) {
                if (this.$parent.active) {
                    this.$parent.toggleSelect(value);
                } else {
                    this.$parent.openAll();
                }
            }
        },
        created() {
            this.lang = this.value;
        }
    }
</script>