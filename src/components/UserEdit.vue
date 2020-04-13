<template>
    <div class="component edit">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge1" class="mr-2">Edit age</button>
        <button @click="editAge2">Edit age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'
    export default {
        props: ['userAge'],
        methods: {
            editAge1(){
                this.userAge = 30;
                this.$emit('ageWasEdited', this.userAge);
            },
            editAge2(){
                this.userAge = 30;
                // eventBus.$emit('ageWasEdited', this.userAge);
                eventBus.changeAge(this.userAge);
            },
            
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen !important;
    }
</style>