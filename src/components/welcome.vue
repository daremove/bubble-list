<template>
    <transition name="welcome">
        <div class="welcome__inner">

            <h1 class="welcome__title">Welcome to the Bubble List!</h1>
            <p class="welcome__description">
                This is a simple to-do list to help organize your day.
            </p>

            <button class="btn btn--bubble" type="button" @click="click" ref="btn">
                <span>
                    Start
                </span>
            </button>

            <language-select>
                <language-select-item value="ENG" />
                <language-select-item value="РУС" />
            </language-select>

        </div>
    </transition>
</template>
<script>
    import LanguageSelect from './language-select.vue';
    import LanguageSelectItem from './language-select-item.vue';

    export default {
        components: {
            'language-select': LanguageSelect,
            'language-select-item': LanguageSelectItem,
        },
        data() {
            return {
                timer: null,
            }
        },
        methods: {
            click() {
                this.$refs.btn.classList.add('active');
                clearInterval(this.timer);

                setTimeout(() => {
                    this.$router.push({name: 'list'});
                }, 150);
            }
        },
        created() {
            function randomValue(arr) {
                return arr[Math.floor(Math.random() * arr.length)];
            }

            let positions = [];
            let sizes = [8, 12, 16, 20];

            this.$nextTick(() => {
                let width = document.querySelector('.welcome__title').offsetWidth;

                for (let i = 0; i < width; i++) {
                    positions.push(i);
                }

                this.timer = setInterval(() => {
                    let size = randomValue(sizes);
                    let elem = document.createElement('div');

                    elem.classList.add('welcome__bubble');
                    elem.style.left = `${randomValue(positions)}px`;
                    elem.style.width = `${size}px`;
                    elem.style.height = `${size}px`;

                    document.querySelector('.welcome__title').append(elem);
                    setTimeout(() => {
                        elem.remove();
                    }, 2000);
                }, 350);
            });
        }
    }
</script>