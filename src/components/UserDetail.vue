<template>
    <div class="component detail">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName" class="mr-2">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
        <!-- <button></button> -->
    </div>
</template>

<script>
    import { eventBus } from '../main'
    export default {
        // props: ['name'],
        props: {
            name: String,
            /* name: [String, Array] means multiple values are valid
                name: {
                    type: String,
                    default: 'Max'
                }*/
            resetFn: Function,
            userAge: Number,
        },
        methods: {
            switchName(){
                return this.name.split('').reverse().join('');
            },
            resetName(){
                this.name = 'Max';
                this.$emit('nameWasReset', this.name);
            }
        },
        created(){
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral !important;
    }
</style>